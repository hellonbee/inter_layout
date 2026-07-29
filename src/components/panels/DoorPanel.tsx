import { useState } from 'react'
import { useStore } from '../../store'
import type { WallSide } from '../../types'
import { NumField } from './NumField'

const WALL_LABEL: Record<WallSide, string> = {
  top: '위쪽 벽',
  bottom: '아래쪽 벽',
  left: '왼쪽 벽',
  right: '오른쪽 벽',
}

export function DoorPanel() {
  const room = useStore((s) => s.room)
  const doors = useStore((s) => s.doors)
  const addDoor = useStore((s) => s.addDoor)
  const updateDoor = useStore((s) => s.updateDoor)
  const removeDoor = useStore((s) => s.removeDoor)
  const furniture = useStore((s) => s.furniture)
  const placed = useStore((s) => s.placed)
  const addWall = useStore((s) => s.addWall)
  const removePlaced = useStore((s) => s.removePlaced)
  const select = useStore((s) => s.select)

  const [wall, setWall] = useState<WallSide>('bottom')
  const [offset, setOffset] = useState(40)
  const [width, setWidth] = useState(90)
  const [wallLength, setWallLength] = useState(200)
  const [wallThick, setWallThick] = useState(10)

  const wallLen = (w: WallSide) => (w === 'top' || w === 'bottom' ? room.width : room.depth)

  const add = () => {
    const maxOffset = Math.max(0, wallLen(wall) - width)
    addDoor({ wall, offset: Math.min(offset, maxOffset), width: Math.min(width, wallLen(wall)) })
  }

  const placedWalls = placed
    .map((p) => ({ p, f: furniture.find((f) => f.id === p.furnitureId) }))
    .filter((x) => x.f?.kind === 'wall')

  return (
    <div className="panel-body">
      <h3 className="section-title">문</h3>
      <p className="hint">벽과 위치·폭을 정해 추가한 뒤, 도면에서 문을 드래그하면 벽을 따라 이동합니다.</p>
      <div className="field-grid">
        <label className="field">
          <span>벽</span>
          <select value={wall} onChange={(e) => setWall(e.target.value as WallSide)}>
            {(Object.keys(WALL_LABEL) as WallSide[]).map((w) => (
              <option key={w} value={w}>
                {WALL_LABEL[w]}
              </option>
            ))}
          </select>
        </label>
        <NumField label="위치" value={offset} min={0} max={10000} onCommit={setOffset} />
        <NumField label="문 폭" value={width} min={40} max={500} onCommit={setWidth} />
      </div>
      <button className="btn primary full" onClick={add}>
        + 문 추가
      </button>

      <ul className="item-list">
        {doors.map((d) => (
          <li key={d.id}>
            <span className="item-name">{WALL_LABEL[d.wall]}</span>
            <span className="item-dims">
              위치{' '}
              <input
                type="number"
                className="inline-num"
                value={d.offset}
                onChange={(e) => {
                  const v = Number(e.target.value)
                  if (Number.isFinite(v)) {
                    updateDoor(d.id, { offset: Math.min(Math.max(v, 0), Math.max(0, wallLen(d.wall) - d.width)) })
                  }
                }}
              />{' '}
              · 폭 {d.width}
            </span>
            <button className="icon-btn danger" onClick={() => removeDoor(d.id)} title="삭제">
              ✕
            </button>
          </li>
        ))}
        {doors.length === 0 && <li className="empty">등록된 문이 없습니다.</li>}
      </ul>

      <h3 className="section-title">내벽 (칸막이)</h3>
      <p className="hint">
        길이·두께를 정해 추가하면 도면 중앙에 생성됩니다. 가구처럼 드래그·회전해 배치하세요. 3D에서는 천장까지
        올라갑니다.
      </p>
      <div className="field-grid">
        <NumField label="길이" value={wallLength} min={10} max={10000} onCommit={setWallLength} />
        <NumField label="두께" value={wallThick} min={2} max={100} onCommit={setWallThick} />
      </div>
      <button className="btn primary full" onClick={() => addWall(wallLength, wallThick)}>
        + 내벽 추가
      </button>

      <ul className="item-list">
        {placedWalls.map(({ p, f }) => (
          <li key={p.id}>
            <span className="dot" style={{ background: f!.color }} />
            <span className="item-name">내벽</span>
            <span className="item-dims">
              {f!.width}×{f!.depth} · {p.rotation}°
            </span>
            <button className="btn small" onClick={() => select(p.id)}>
              선택
            </button>
            <button className="icon-btn danger" onClick={() => removePlaced(p.id)} title="삭제">
              ✕
            </button>
          </li>
        ))}
        {placedWalls.length === 0 && <li className="empty">배치된 내벽이 없습니다.</li>}
      </ul>
    </div>
  )
}
