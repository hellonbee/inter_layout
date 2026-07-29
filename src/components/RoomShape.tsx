import { Fragment } from 'react'
import { Arc, Group, Line, Rect, Text } from 'react-konva'
import type { Door, Room } from '../types'

const WALL_COLOR = '#475569'
const FLOOR_COLOR = '#f8fafc'
const GRID_COLOR = '#e2e8f0'
const DOOR_COLOR = '#f59e0b'

// 문의 벽 위 사각형 영역 (실내 좌표계, 벽은 음수/바깥 영역)
function doorRect(room: Room, door: Door) {
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
function doorArc(room: Room, door: Door) {
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

export function RoomShape({ room, doors }: { room: Room; doors: Door[] }) {
  const t = room.wallThickness
  const gridLines: JSX.Element[] = []
  for (let x = 50; x < room.width; x += 50) {
    gridLines.push(
      <Line key={`gx${x}`} points={[x, 0, x, room.depth]} stroke={GRID_COLOR} strokeWidth={1} listening={false} />,
    )
  }
  for (let y = 50; y < room.depth; y += 50) {
    gridLines.push(
      <Line key={`gy${y}`} points={[0, y, room.width, y]} stroke={GRID_COLOR} strokeWidth={1} listening={false} />,
    )
  }

  return (
    <Group>
      {/* 벽 (외곽) */}
      <Rect x={-t} y={-t} width={room.width + 2 * t} height={room.depth + 2 * t} fill={WALL_COLOR} listening={false} />
      {/* 바닥 */}
      <Rect x={0} y={0} width={room.width} height={room.depth} fill={FLOOR_COLOR} listening={false} />
      {gridLines}
      {/* 문 */}
      {doors.map((d) => {
        const r = doorRect(room, d)
        const a = doorArc(room, d)
        return (
          <Fragment key={d.id}>
            <Rect x={r.x} y={r.y} width={r.w} height={r.h} fill={FLOOR_COLOR} listening={false} />
            <Rect
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              stroke={DOOR_COLOR}
              strokeWidth={2}
              listening={false}
            />
            <Arc
              x={a.x}
              y={a.y}
              innerRadius={0}
              outerRadius={d.width}
              angle={90}
              rotation={a.rotation}
              fill="rgba(245, 158, 11, 0.12)"
              stroke={DOOR_COLOR}
              strokeWidth={1}
              dash={[4, 4]}
              listening={false}
            />
          </Fragment>
        )
      })}
      {/* 치수 표시 */}
      <Text
        text={`${room.width} cm`}
        x={0}
        y={room.depth + t + 8}
        width={room.width}
        align="center"
        fontSize={14}
        fill="#64748b"
        listening={false}
      />
      <Text
        text={`${room.depth} cm`}
        x={-t - 22}
        y={room.depth / 2}
        rotation={-90}
        fontSize={14}
        fill="#64748b"
        listening={false}
      />
    </Group>
  )
}
