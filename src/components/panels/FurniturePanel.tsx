import { useEffect, useRef, useState } from 'react'
import { searchDanawa, type DanawaResult } from '../../danawa'
import { clientToWorld } from '../../stageRegistry'
import { useStore } from '../../store'
import { NumField } from './NumField'

const PALETTE = ['#c8916b', '#7d9c86', '#8b9dc3', '#d4a5a5', '#b8a978', '#9b8bb4', '#6faab5', '#c98f8f']

interface DragState {
  fid: string
  label: string
  startX: number
  startY: number
  active: boolean
  timer: number | null
}

const preventTouch = (e: TouchEvent) => e.preventDefault()

export function FurniturePanel() {
  const furniture = useStore((s) => s.furniture)
  const placed = useStore((s) => s.placed)
  const addFurniture = useStore((s) => s.addFurniture)
  const removeFurniture = useStore((s) => s.removeFurniture)
  const placeFurniture = useStore((s) => s.placeFurniture)
  const placeFurnitureAt = useStore((s) => s.placeFurnitureAt)

  const [name, setName] = useState('')
  const [width, setWidth] = useState(120)
  const [depth, setDepth] = useState(60)
  const [height, setHeight] = useState(75)
  const [color, setColor] = useState(PALETTE[0])
  const [ghost, setGhost] = useState<{ x: number; y: number; label: string } | null>(null)
  const dragRef = useRef<DragState | null>(null)

  // 다나와 검색 상태
  const [searching, setSearching] = useState(false)
  const [searchError, setSearchError] = useState('')
  const [searchResults, setSearchResults] = useState<DanawaResult[] | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => () => abortRef.current?.abort(), [])

  const items = furniture.filter((f) => f.kind !== 'wall')

  const add = () => {
    const n = name.trim() || `가구 ${items.length + 1}`
    addFurniture({ name: n, width, depth, height, color })
    setName('')
    setSearchResults(null)
    setColor(PALETTE[(items.length + 1) % PALETTE.length])
  }

  const countOf = (fid: string) => placed.filter((p) => p.furnitureId === fid).length

  const runSearch = async () => {
    const q = name.trim()
    if (!q) {
      setSearchError('검색할 가구 이름을 먼저 입력하세요.')
      return
    }
    abortRef.current?.abort()
    const ctrl = new AbortController()
    abortRef.current = ctrl
    setSearching(true)
    setSearchError('')
    setSearchResults(null)
    try {
      const results = await searchDanawa(q, ctrl.signal)
      if (results.length === 0) setSearchError('크기 정보가 있는 상품을 찾지 못했습니다.')
      else setSearchResults(results)
    } catch (e) {
      if (!ctrl.signal.aborted) setSearchError(e instanceof Error ? e.message : '검색 중 오류가 발생했습니다.')
    } finally {
      if (abortRef.current === ctrl) setSearching(false)
    }
  }

  const applyResult = (r: DanawaResult) => {
    setName(r.name)
    setWidth(r.width)
    setDepth(r.depth)
    setHeight(r.height)
    setSearchResults(null)
  }

  // ── 가구 셀 드래그: 데스크톱은 즉시, 모바일은 길게 눌러 시작 (짧게 스와이프하면 목록 스크롤) ──
  const cleanupDrag = () => {
    const d = dragRef.current
    if (d?.timer) window.clearTimeout(d.timer)
    document.removeEventListener('touchmove', preventTouch)
    dragRef.current = null
    setGhost(null)
  }

  const activateDrag = (x: number, y: number) => {
    const d = dragRef.current
    if (!d || d.active) return
    d.active = true
    document.addEventListener('touchmove', preventTouch, { passive: false })
    try {
      navigator.vibrate?.(20)
    } catch {
      /* 미지원 무시 */
    }
    setGhost({ x, y, label: d.label })
  }

  const onCellPointerDown = (e: React.PointerEvent, fid: string, label: string) => {
    if ((e.target as HTMLElement).closest('button, input')) return
    if (e.pointerType === 'mouse' && e.button !== 0) return
    try {
      ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    } catch {
      /* 합성 이벤트 등 캡처 실패해도 계속 */
    }
    const timer =
      e.pointerType === 'mouse'
        ? null
        : window.setTimeout(() => activateDrag(e.clientX, e.clientY), 280)
    dragRef.current = { fid, label, startX: e.clientX, startY: e.clientY, active: false, timer }
  }

  const onCellPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current
    if (!d) return
    if (d.active) {
      setGhost({ x: e.clientX, y: e.clientY, label: d.label })
      return
    }
    const dist = Math.hypot(e.clientX - d.startX, e.clientY - d.startY)
    if (e.pointerType === 'mouse') {
      if (dist > 6) activateDrag(e.clientX, e.clientY)
    } else if (dist > 12) {
      cleanupDrag() // 움직임이 먼저 시작됐으면 스크롤 제스처로 판단
    }
  }

  const onCellPointerUp = (e: React.PointerEvent) => {
    const d = dragRef.current
    const wasActive = d?.active
    const fid = d?.fid
    cleanupDrag()
    if (wasActive && fid) {
      const world = clientToWorld(e.clientX, e.clientY)
      if (world) placeFurnitureAt(fid, world.x, world.y)
    }
  }

  return (
    <div className="panel-body">
      <p className="hint">
        가구 이름을 입력하고 <b>다나와 검색</b>을 누르면 실제 상품 크기를 자동으로 채울 수 있습니다. 등록된 가구는{' '}
        <b>목록에서 도면 위로 끌어다 놓으면</b> 그 자리에 배치됩니다. (모바일: 길게 눌러 드래그)
      </p>
      <label className="field">
        <span>이름</span>
        <div className="name-row">
          <input
            type="text"
            placeholder="예: 시디즈 T50 의자"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') runSearch()
            }}
          />
          <button className="btn search-btn" onClick={runSearch} disabled={searching}>
            {searching ? '검색 중…' : '다나와 검색'}
          </button>
        </div>
      </label>
      {searching && <p className="hint searching">다나와에서 검색 중입니다… (최대 30초 걸릴 수 있어요)</p>}
      {searchError && <p className="hint error">{searchError}</p>}
      {searchResults && (
        <ul className="search-results">
          {searchResults.map((r, i) => (
            <li key={i}>
              <button onClick={() => applyResult(r)}>
                <span className="result-name">{r.name}</span>
                <span className="result-dims">
                  {r.width}×{r.depth}×{r.height} cm
                </span>
              </button>
            </li>
          ))}
          <li className="close-row">
            <button onClick={() => setSearchResults(null)}>닫기 ✕</button>
          </li>
        </ul>
      )}
      <div className="field-grid three">
        <NumField label="가로" value={width} min={5} max={2000} onCommit={setWidth} />
        <NumField label="세로" value={depth} min={5} max={2000} onCommit={setDepth} />
        <NumField label="높이" value={height} min={5} max={1000} onCommit={setHeight} />
      </div>
      <div className="color-row">
        {PALETTE.map((c) => (
          <button
            key={c}
            className={`swatch ${c === color ? 'active' : ''}`}
            style={{ background: c }}
            onClick={() => setColor(c)}
            aria-label={`색상 ${c}`}
          />
        ))}
      </div>
      <button className="btn primary full" onClick={add}>
        + 가구 등록
      </button>

      <ul className="item-list">
        {items.map((f) => (
          <li
            key={f.id}
            className="drag-cell"
            onPointerDown={(e) => onCellPointerDown(e, f.id, f.name)}
            onPointerMove={onCellPointerMove}
            onPointerUp={onCellPointerUp}
            onPointerCancel={cleanupDrag}
            onContextMenu={(e) => e.preventDefault()}
          >
            <span className="dot" style={{ background: f.color }} />
            <span className="item-name">{f.name}</span>
            <span className="item-dims">
              {f.width}×{f.depth}×{f.height}
              {countOf(f.id) > 0 && <em> · {countOf(f.id)}개 배치됨</em>}
            </span>
            <button className="btn small" onClick={() => placeFurniture(f.id)}>
              배치
            </button>
            <button
              className="icon-btn danger"
              onClick={() => {
                if (countOf(f.id) === 0 || window.confirm(`배치된 ${countOf(f.id)}개도 함께 삭제됩니다. 삭제할까요?`)) {
                  removeFurniture(f.id)
                }
              }}
              title="삭제"
            >
              ✕
            </button>
          </li>
        ))}
        {items.length === 0 && <li className="empty">등록된 가구가 없습니다.</li>}
      </ul>

      {ghost && (
        <div className="drag-ghost" style={{ left: ghost.x, top: ghost.y }}>
          {ghost.label}
        </div>
      )}
    </div>
  )
}
