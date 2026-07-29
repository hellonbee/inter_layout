import { useStore } from '../store'

export function SelectionToolbar() {
  const selectedId = useStore((s) => s.selectedId)
  const placed = useStore((s) => s.placed)
  const furniture = useStore((s) => s.furniture)
  const rotatePlaced = useStore((s) => s.rotatePlaced)
  const duplicatePlaced = useStore((s) => s.duplicatePlaced)
  const removePlaced = useStore((s) => s.removePlaced)
  const select = useStore((s) => s.select)

  const item = placed.find((p) => p.id === selectedId)
  if (!item) return null
  const f = furniture.find((f) => f.id === item.furnitureId)

  return (
    <div className="sel-toolbar">
      <span className="sel-name">
        {f?.name} <em>{item.rotation}°</em>
      </span>
      <button onClick={() => rotatePlaced(item.id, -15)} title="반시계 15°">
        ⟲15
      </button>
      <button onClick={() => rotatePlaced(item.id, 15)} title="시계 15°">
        ⟳15
      </button>
      <button onClick={() => rotatePlaced(item.id, 90)} title="90° 회전">
        90°
      </button>
      <button onClick={() => duplicatePlaced(item.id)} title="복제">
        복제
      </button>
      <button className="danger" onClick={() => removePlaced(item.id)} title="삭제">
        삭제
      </button>
      <button onClick={() => select(null)} title="선택 해제">
        ✕
      </button>
    </div>
  )
}
