import { lazy, Suspense, useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { PlanCanvas } from './components/PlanCanvas'
import { SidePanel } from './components/panels/SidePanel'

const View3D = lazy(() => import('./components/View3D').then((m) => ({ default: m.View3D })))
import { decodePlanFromHash } from './share'
import { useStore } from './store'

export default function App() {
  const viewMode = useStore((s) => s.viewMode)
  const loadPlan = useStore((s) => s.loadPlan)

  // 공유 링크(#p=...)로 접근한 경우 도면 불러오기
  useEffect(() => {
    const plan = decodePlanFromHash(window.location.hash)
    if (!plan) return
    const hasLocal = useStore.getState().placed.length > 0
    if (!hasLocal || window.confirm('공유된 도면을 불러올까요? 현재 작업 내용을 덮어씁니다.')) {
      loadPlan(plan)
    }
    history.replaceState(null, '', window.location.pathname + window.location.search)
  }, [loadPlan])

  return (
    <div className="app">
      <TopBar />
      <div className="main">
        <div className="canvas-area">
          {viewMode === '2d' ? (
            <PlanCanvas />
          ) : (
            <Suspense fallback={<div className="loading3d">3D 뷰 불러오는 중…</div>}>
              <View3D />
            </Suspense>
          )}
        </div>
        <SidePanel />
      </div>
    </div>
  )
}
