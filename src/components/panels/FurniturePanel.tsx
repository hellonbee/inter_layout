import { useRef, useState } from 'react'
import { clientToWorld } from '../../stageRegistry'
import { useStore } from '../../store'
import { NumField } from './NumField'

const PALETTE = ['#c8916b', '#7d9c86', '#8b9dc3', '#d4a5a5', '#b8a978', '#9b8bb4', '#6faab5', '#c98f8f']

interface DragState {
  fid: string
  startX: number
  startY: number
  moved: boolean
}

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

  const items = furniture.filter((f) => f.kind !== 'wall')

  const add = () => {
    const n = name.trim() || `가구 ${items.length + 1}`
    addFurniture({ name: n, width, depth, height, color })
    setName('')
    setColor(PALETTE[(items.length + 1) % PALETTE.length])
  }

  const countOf = (fid: string) => placed.filter((p) => p.furnitureId === fid).length

  // "배치" 버튼: 탭 = 중앙에 배치, 도면 위로 드래그 = 놓은 위치에 배치
  const onDragStart = (e: React.PointerEvent, fid: string) => {
    e.preventDefault()
    try {
      ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    } catch {
      // 포인터 캡처 실패해도 드래그/탭 동작은 계속
    }
    dragRef.current = { fid, startX: e.clientX, startY: e.clientY, moved: false }
  }

  const onDragMove = (e: React.PointerEvent, label: string) => {
    const d = dragRef.current
    if (!d) return
    if (!d.moved && Math.hypot(e.clientX - d.startX, e.clientY - d.startY) < 8) return
    d.moved = true
    setGhost({ x: e.clientX, y: e.clientY, label })
  }

  const onDragEnd = (e: React.PointerEvent) => {
    const d = dragRef.current
    dragRef.current = null
    setGhost(null)
    if (!d) return
    if (!d.moved) {
      placeFurniture(d.fid) // 탭: 도면 중앙에 배치
      return
    }
    const world = clientToWorld(e.clientX, e.clientY)
    if (world) placeFurnitureAt(d.fid, world.x, world.y)
  }

  return (
    <div className="panel-body">
      <p className="hint">
        가구를 등록한 뒤 <b>“배치” 버튼을 눌러 도면 위로 끌어다 놓으면</b> 그 자리에 놓입니다. 짧게 누르면 도면
        중앙에 배치됩니다.
      </p>
      <label className="field">
        <span>이름</span>
        <input
          type="text"
          placeholder="예: 진열대"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
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
          <li key={f.id}>
            <span className="dot" style={{ background: f.color }} />
            <span className="item-name">{f.name}</span>
            <span className="item-dims">
              {f.width}×{f.depth}×{f.height}
              {countOf(f.id) > 0 && <em> · {countOf(f.id)}개 배치됨</em>}
            </span>
            <button
              className="btn small drag-place"
              onPointerDown={(e) => onDragStart(e, f.id)}
              onPointerMove={(e) => onDragMove(e, f.name)}
              onPointerUp={onDragEnd}
              onPointerCancel={() => {
                dragRef.current = null
                setGhost(null)
              }}
            >
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
