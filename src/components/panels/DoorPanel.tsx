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

  const [wall, setWall] = useState<WallSide>('bottom')
  const [offset, setOffset] = useState(40)
  const [width, setWidth] = useState(90)

  const wallLen = (w: WallSide) => (w === 'top' || w === 'bottom' ? room.width : room.depth)

  const add = () => {
    const maxOffset = Math.max(0, wallLen(wall) - width)
    addDoor({ wall, offset: Math.min(offset, maxOffset), width: Math.min(width, wallLen(wall)) })
  }

  return (
    <div className="panel-body">
      <p className="hint">벽을 고르고 벽의 시작점(왼쪽/위쪽 모서리)부터의 위치와 문 폭을 입력하세요.</p>
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
    </div>
  )
}
