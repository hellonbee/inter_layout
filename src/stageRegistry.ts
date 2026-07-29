import type Konva from 'konva'

// 패널 등 캔버스 밖 UI에서 드롭 좌표를 계산할 수 있도록 현재 2D Stage를 공유
export const stageRegistry: { current: Konva.Stage | null } = { current: null }

// 화면(client) 좌표 → 도면(cm) 좌표. 캔버스 밖이면 null
export function clientToWorld(clientX: number, clientY: number) {
  const stage = stageRegistry.current
  if (!stage) return null
  const rect = stage.container().getBoundingClientRect()
  if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) return null
  const scale = stage.scaleX()
  return {
    x: (clientX - rect.left - stage.x()) / scale,
    y: (clientY - rect.top - stage.y()) / scale,
  }
}
