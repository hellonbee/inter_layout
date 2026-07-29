import { Group, Line, Rect, Text } from 'react-konva'
import type { Room } from '../types'

const WALL_COLOR = '#475569'
const FLOOR_COLOR = '#f8fafc'
const GRID_COLOR = '#e2e8f0'

export function RoomShape({ room }: { room: Room }) {
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
