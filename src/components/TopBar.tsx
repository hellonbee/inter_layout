import { useState } from 'react'
import { encodePlanToHash } from '../share'
import { selectPlan, useStore } from '../store'

export function TopBar() {
  const viewMode = useStore((s) => s.viewMode)
  const setViewMode = useStore((s) => s.setViewMode)
  const resetPlan = useStore((s) => s.resetPlan)
  const [copied, setCopied] = useState(false)

  const share = async () => {
    const plan = selectPlan(useStore.getState())
    const url = `${location.origin}${location.pathname}${location.search}${encodePlanToHash(plan)}`
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('아래 링크를 복사하세요:', url)
    }
  }

  return (
    <header className="topbar">
      <h1 className="logo">매장 배치 플래너</h1>
      <div className="topbar-actions">
        <div className="seg">
          <button className={viewMode === '2d' ? 'active' : ''} onClick={() => setViewMode('2d')}>
            2D
          </button>
          <button className={viewMode === '3d' ? 'active' : ''} onClick={() => setViewMode('3d')}>
            3D
          </button>
        </div>
        <button className="btn" onClick={share}>
          {copied ? '복사됨 ✓' : '공유'}
        </button>
        <button
          className="btn danger"
          onClick={() => {
            if (window.confirm('모든 배치를 초기화할까요?')) resetPlan()
          }}
        >
          초기화
        </button>
      </div>
    </header>
  )
}
