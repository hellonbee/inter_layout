import { useEffect, useState } from 'react'
import { useStore } from '../store'

// 커밋(blur/Enter) 시 반영되는 소형 숫자 입력
function MiniNum({
  label,
  value,
  min,
  max,
  onCommit,
}: {
  label: string
  value: number
  min: number
  max: number
  onCommit: (v: number) => void
}) {
  const [text, setText] = useState(String(value))
  useEffect(() => setText(String(value)), [value])

  const commit = () => {
    const n = Number(text)
    if (!Number.isFinite(n)) {
      setText(String(value))
      return
    }
    const clamped = Math.round(Math.min(Math.max(n, min), max))
    setText(String(clamped))
    if (clamped !== value) onCommit(clamped)
  }

  return (
    <label className="mini-num">
      <span>{label}</span>
      <input
        type="number"
        inputMode="numeric"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') (e.target as HTMLInputElement).blur()
        }}
      />
    </label>
  )
}

export function SelectionToolbar() {
  const selectedId = useStore((s) => s.selectedId)
  const placed = useStore((s) => s.placed)
  const furniture = useStore((s) => s.furniture)
  const rotatePlaced = useStore((s) => s.rotatePlaced)
  const duplicatePlaced = useStore((s) => s.duplicatePlaced)
  const removePlaced = useStore((s) => s.removePlaced)
  const updateFurniture = useStore((s) => s.updateFurniture)
  const select = useStore((s) => s.select)

  const item = placed.find((p) => p.id === selectedId)
  const f = item && furniture.find((f) => f.id === item.furnitureId)
  if (!item || !f) return null
  const isWall = f.kind === 'wall'

  return (
    <div className="sel-toolbar">
      <div className="sel-row">
        <span className="sel-name">
          {f.name} <em>{item.rotation}°</em>
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
      <div className="sel-row dims">
        <MiniNum
          label={isWall ? '길이' : '가로'}
          value={f.width}
          min={2}
          max={10000}
          onCommit={(v) => updateFurniture(f.id, { width: v })}
        />
        <MiniNum
          label={isWall ? '두께' : '세로'}
          value={f.depth}
          min={2}
          max={10000}
          onCommit={(v) => updateFurniture(f.id, { depth: v })}
        />
        {!isWall && (
          <MiniNum
            label="높이"
            value={f.height}
            min={2}
            max={1000}
            onCommit={(v) => updateFurniture(f.id, { height: v })}
          />
        )}
        <span className="dims-note">cm · 같은 가구 전체 반영</span>
      </div>
    </div>
  )
}
