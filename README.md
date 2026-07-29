# 매장 배치 플래너

매장 인테리어 시 집기·가구 배치를 시뮬레이션하는 웹 앱.

- 도면(가로×세로×높이, cm)을 입력해 탑뷰 맵 생성
- 벽 두께·문 위치·문 폭 지정
- 가구/집기 등록(가로×세로×높이) 후 드래그·회전(15° 스냅) 배치
- 2D 탑뷰 + 3D 뷰(드래그 회전)
- localStorage 자동 저장, URL 공유 링크(`#p=...`)
- 모바일 터치 지원 (하단 시트 UI, 핀치 줌)

## 개발

```bash
npm install
npm run dev
```

## 배포

`main` 브랜치에 푸시하면 GitHub Actions가 GitHub Pages로 자동 배포합니다.
(저장소 Settings → Pages → Source를 "GitHub Actions"로 설정)
