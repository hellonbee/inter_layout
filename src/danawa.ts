// 다나와 검색 결과에서 가구 이름과 크기(가로x세로x높이, mm)를 추출
// 정적 사이트라 다나와에 직접 요청하면 CORS로 차단되므로 r.jina.ai 텍스트 프록시를 경유한다.

export interface DanawaResult {
  name: string
  width: number // cm
  depth: number // cm
  height: number // cm
  raw: string // 원본 치수 문자열 (예: 1600x800x720mm)
}

const DIM_RE = /(\d{2,4})\s*[xX×]\s*(\d{2,4})\s*[xX×]\s*(\d{2,4})(?:\s*~\s*\d{2,4})?\s*mm/

// 스펙/UI 라인으로 판단해 상품명 후보에서 제외하는 패턴
const NOT_NAME_RE =
  /[[\]/|]|상품 색상|가격|리뷰|별점|관심|의견|등록|몰$|상품분류|더보기|닫기|배송|쿠폰|광고|할인|적립|무이자|원$|위$|^\d|^크기|^모델명|^색상|^스펙/

// 목록에 끼어드는 짧은 UI 라벨 (정확히 일치할 때만 제외)
const UI_TOKENS = new Set(['무료배송', '착불', '선불', '오늘출발', '당일배송', '방문설치', '설치배송', '무료', '광고'])

export async function searchDanawa(query: string, signal?: AbortSignal): Promise<DanawaResult[]> {
  const target = `https://search.danawa.com/dsearch.php?query=${encodeURIComponent(query)}`
  const res = await fetch(`https://r.jina.ai/${target}`, { signal })
  if (!res.ok) throw new Error(`다나와 검색 실패 (HTTP ${res.status})`)
  const text = await res.text()
  const lines = text.split('\n').map((l) => l.trim())

  const results: DanawaResult[] = []
  const seen = new Set<string>()

  for (let i = 0; i < lines.length && results.length < 10; i++) {
    const m = lines[i].match(DIM_RE)
    if (!m) continue
    let name = ''
    // 형식 1: 상품명과 치수가 같은 줄 ("시디즈 T50 사무용의자 730 x 580 x 1140 mm")
    const prefix = lines[i]
      .slice(0, m.index ?? 0)
      .replace(/[[\](){}:/|·-]+\s*$/, '')
      .trim()
    const meaningful = prefix.replace(/[^가-힣a-zA-Z0-9]/g, '')
    if (meaningful.length >= 4 && !/^\[|크기|스펙|색상/.test(prefix)) {
      name = prefix
    } else {
      // 형식 2: 치수는 스펙 줄에 있고 상품명은 위쪽 줄 — 스펙/UI 라인을 건너뛰며 탐색
      for (let j = i - 1; j >= Math.max(0, i - 10); j--) {
        const l = lines[j]
        if (!l || l.length < 4 || l.length > 80) continue
        if (UI_TOKENS.has(l) || NOT_NAME_RE.test(l)) continue
        name = l
        break
      }
    }
    if (!name) continue
    const key = `${name}|${m[0]}`
    if (seen.has(key)) continue
    seen.add(key)
    results.push({
      name,
      width: Math.max(1, Math.round(Number(m[1]) / 10)),
      depth: Math.max(1, Math.round(Number(m[2]) / 10)),
      height: Math.max(1, Math.round(Number(m[3]) / 10)),
      raw: m[0].replace(/\s+/g, ''),
    })
  }
  return results
}
