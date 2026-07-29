import { useRef } from 'react'
import Konva from 'konva'
import { Arc, Group, Rect } from 'react-konva'
import { useStore } from '../store'
import type { Door, Room, WallSide } from '../types'

const DOOR_COLOR = '#f59e0b'
const FLOOR_COLOR = '#f8fafc'
const HIT_PAD = 18 // 터치용 히트 영역 확장 (cm)

// 문의 벽 위 사각형 영역 (실내 좌표계)
function doorRect(room: Room, door: Pick<Door, 'wall' | 'offset' | 'width'>) {
  const t = room.wallThickness
  switch (door.wall) {
    case 'top':
      return { x: door.offset, y: -t, w: door.width, h: t }
    case 'bottom':
      return { x: door.offset, y: room.depth, w: door.width, h: t }
    case 'left':
      return { x: -t, y: door.offset, w: t, h: door.width }
    case 'right':
      return { x: room.width, y: door.offset, w: t, h: door.width }
  }
}

// 여닫이 호: 경첩(문 시작점)에서 실내 쪽으로 90도
function doorArc(room: Room, door: Pick<Door, 'wall' | 'offset' | 'width'>) {
  switch (door.wall) {
    case 'top':
      return { x: door.offset, y: 0, rotation: 0 }
    case 'bottom':
      return { x: door.offset, y: room.depth, rotation: -90 }
    case 'left':
      return { x: 0, y: door.offset, rotation: 0 }
    case 'right':
      return { x: room.width, y: door.offset, rotation: 90 }
  }
}

// 도면 좌표 p에서 가장 가까운 벽과, 그 벽 위에서의 문 offset을 계산
function snapToWall(room: Room, doorWidth: number, p: { x: number; y: number }) {
  const cand: { wall: WallSide; dist: number; along: number }[] = [
    { wall: 'top', dist: Math.abs(p.y), along: p.x },
    { wall: 'bottom', dist: Math.abs(room.depth - p.y), along: p.x },
    { wall: 'left', dist: Math.abs(p.x), along: p.y },
    { wall: 'right', dist: Math.abs(room.width - p.x), along: p.y },
  ]
  const best = cand.sort((a, b) => a.dist - b.dist)[0]
  const wallLen = best.wall === 'top' || best.wall === 'bottom' ? room.width : room.depth
  const offset = Math.round(Math.min(Math.max(best.along - doorWidth / 2, 0), Math.max(0, wallLen - doorWidth)))
  return { wall: best.wall, offset }
}

export function DoorItem({ door, room }: { door: Door; room: Room }) {
  const updateDoor = useStore((s) => s.updateDoor)
  const groupRef = useRef<Konva.Group>(null)

  const r = doorRect(room, door)
  const a = doorArc(room, door)

  // 드래그 중 포인터 위치를 벽에 스냅해 스토어를 갱신하고, 그룹 오프셋은 0으로 고정
  const handleDrag = (e: Konva.KonvaEventObject<DragEvent>) => {
    const stage = e.target.getStage()
    if (!stage) return
    const p = stage.getPointerPosition()
    if (!p) return
    const world = { x: (p.x - stage.x()) / stage.scaleX(), y: (p.y - stage.y()) / stage.scaleY() }
    const snapped = snapToWall(room, door.width, world)
    e.target.position({ x: 0, y: 0 })
    if (snapped.wall !== door.wall || snapped.offset !== door.offset) {
      updateDoor(door.id, snapped)
    }
  }

  return (
    <Group ref={groupRef} draggable onDragMove={handleDrag} onDragEnd={handleDrag}>
      {/* 터치용 확장 히트 영역 */}
      <Rect
        x={r.x - HIT_PAD}
        y={r.y - HIT_PAD}
        width={r.w + HIT_PAD * 2}
        height={r.h + HIT_PAD * 2}
        fill="transparent"
      />
      <Rect x={r.x} y={r.y} width={r.w} height={r.h} fill={FLOOR_COLOR} listening={false} />
      <Rect x={r.x} y={r.y} width={r.w} height={r.h} stroke={DOOR_COLOR} strokeWidth={2} listening={false} />
      <Arc
        x={a.x}
        y={a.y}
        innerRadius={0}
        outerRadius={door.width}
        angle={90}
        rotation={a.rotation}
        fill="rgba(245, 158, 11, 0.12)"
        stroke={DOOR_COLOR}
        strokeWidth={1}
        dash={[4, 4]}
        listening={false}
      />
    </Group>
  )
}
