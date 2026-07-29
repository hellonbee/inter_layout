import { useState } from 'react'
import { useStore } from '../../store'
import { NumField } from './NumField'

const PALETTE = ['#c8916b', '#7d9c86', '#8b9dc3', '#d4a5a5', '#b8a978', '#9b8bb4', '#6faab5', '#c98f8f']

export function FurniturePanel() {
  const furniture = useStore((s) => s.furniture)
  const placed = useStore((s) => s.placed)
  const addFurniture = useStore((s) => s.addFurniture)
  const removeFurniture = useStore((s) => s.removeFurniture)
  const placeFurniture = useStore((s) => s.placeFurniture)

  const [name, setName] = useState('')
  const [width, setWidth] = useState(120)
  const [depth, setDepth] = useState(60)
  const [height, setHeight] = useState(75)
  const [color, setColor] = useState(PALETTE[0])

  const add = () => {
    const n = name.trim() || `가구 ${furniture.length + 1}`
    addFurniture({ name: n, width, depth, height, color })
    setName('')
    setColor(PALETTE[(furniture.length + 1) % PALETTE.length])
  }

  const countOf = (fid: string) => placed.filter((p) => p.furnitureId === fid).length

  return (
    <div className="panel-body">
      <p className="hint">가구·집기를 등록한 뒤 “배치”를 누르면 도면 중앙에 추가됩니다.</p>
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
        {furniture.map((f) => (
          <li key={f.id}>
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
        {furniture.length === 0 && <li className="empty">등록된 가구가 없습니다.</li>}
      </ul>
    </div>
  )
}
