import { useStore } from '../../store'
import { NumField } from './NumField'

export function RoomPanel() {
  const room = useStore((s) => s.room)
  const setRoom = useStore((s) => s.setRoom)

  return (
    <div className="panel-body">
      <p className="hint">실내 기준 치수를 입력하세요. (단위: cm)</p>
      <div className="field-grid">
        <NumField label="가로" value={room.width} min={50} max={10000} onCommit={(v) => setRoom({ width: v })} />
        <NumField label="세로" value={room.depth} min={50} max={10000} onCommit={(v) => setRoom({ depth: v })} />
        <NumField label="높이" value={room.height} min={100} max={1000} onCommit={(v) => setRoom({ height: v })} />
        <NumField
          label="벽 두께"
          value={room.wallThickness}
          min={1}
          max={100}
          onCommit={(v) => setRoom({ wallThickness: v })}
        />
      </div>
    </div>
  )
}
