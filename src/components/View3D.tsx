import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Edges, OrbitControls } from '@react-three/drei'
import { useStore } from '../store'
import type { Door, Room, WallSide } from '../types'

const WALL_COLOR = '#94a3b8'
const FLOOR_COLOR = '#e7e2d8'
const DOOR_COLOR = '#f59e0b'

interface Seg {
  a: number
  b: number
}

// 벽 길이 방향에서 문을 제외한 구간과 문 구간을 계산
function splitWall(start: number, end: number, doors: Seg[]): { solid: Seg[]; openings: Seg[] } {
  const openings = doors
    .map(({ a, b }) => ({ a: Math.max(a, start), b: Math.min(b, end) }))
    .filter(({ a, b }) => b > a)
    .sort((s1, s2) => s1.a - s2.a)
  const solid: Seg[] = []
  let cur = start
  for (const o of openings) {
    if (o.a > cur) solid.push({ a: cur, b: o.a })
    cur = Math.max(cur, o.b)
  }
  if (cur < end) solid.push({ a: cur, b: end })
  return { solid, openings }
}

function Wall({ room, side, doors }: { room: Room; side: WallSide; doors: Door[] }) {
  const { width: W, depth: D, height: H, wallThickness: t } = room
  const DH = Math.min(210, H) // 문 높이
  const horizontal = side === 'top' || side === 'bottom'
  // top/bottom 벽은 모서리를 덮도록 양끝을 t만큼 연장
  const start = horizontal ? -t : 0
  const end = horizontal ? W + t : D
  const segs = doors.map((d) => ({ a: d.offset, b: d.offset + d.width }))
  const { solid, openings } = useMemo(() => splitWall(start, end, segs), [room, doors]) // eslint-disable-line react-hooks/exhaustive-deps

  // 벽 길이 방향 좌표 s → 3D 위치
  const place = (a: number, b: number, y: number, h: number) => {
    const mid = (a + b) / 2
    const len = b - a
    if (horizontal) {
      const z = side === 'top' ? -D / 2 - t / 2 : D / 2 + t / 2
      return { position: [mid - W / 2, y + h / 2, z] as const, size: [len, h, t] as const }
    }
    const x = side === 'left' ? -W / 2 - t / 2 : W / 2 + t / 2
    return { position: [x, y + h / 2, mid - D / 2] as const, size: [t, h, len] as const }
  }

  return (
    <group>
      {solid.map((s, i) => {
        const { position, size } = place(s.a, s.b, 0, H)
        return (
          <mesh key={`s${i}`} position={position as unknown as [number, number, number]}>
            <boxGeometry args={size as unknown as [number, number, number]} />
            <meshStandardMaterial color={WALL_COLOR} transparent opacity={0.55} />
          </mesh>
        )
      })}
      {openings.map((o, i) => {
        const lintelH = H - DH
        const lintel = place(o.a, o.b, DH, lintelH)
        const { position: framePos, size: frameSize } = place(o.a, o.b, 0, DH)
        return (
          <group key={`o${i}`}>
            {lintelH > 0 && (
              <mesh position={lintel.position as unknown as [number, number, number]}>
                <boxGeometry args={lintel.size as unknown as [number, number, number]} />
                <meshStandardMaterial color={WALL_COLOR} transparent opacity={0.55} />
              </mesh>
            )}
            {/* 문 표시 (반투명 주황) */}
            <mesh position={framePos as unknown as [number, number, number]}>
              <boxGeometry args={frameSize as unknown as [number, number, number]} />
              <meshStandardMaterial color={DOOR_COLOR} transparent opacity={0.25} />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}

function Scene() {
  const room = useStore((s) => s.room)
  const doors = useStore((s) => s.doors)
  const placed = useStore((s) => s.placed)
  const furniture = useStore((s) => s.furniture)
  const selectedId = useStore((s) => s.selectedId)
  const select = useStore((s) => s.select)
  const { width: W, depth: D, wallThickness: t } = room

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[300, 500, 200]} intensity={1.1} />
      <directionalLight position={[-200, 300, -300]} intensity={0.3} />

      {/* 바닥 */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[W + 2 * t, 4, D + 2 * t]} />
        <meshStandardMaterial color={FLOOR_COLOR} />
      </mesh>

      {(['top', 'bottom', 'left', 'right'] as WallSide[]).map((side) => (
        <Wall key={side} room={room} side={side} doors={doors.filter((d) => d.wall === side)} />
      ))}

      {placed.map((item) => {
        const f = furniture.find((f) => f.id === item.furnitureId)
        if (!f) return null
        const selected = item.id === selectedId
        const isWall = f.kind === 'wall'
        const h = isWall ? room.height : f.height
        return (
          <mesh
            key={item.id}
            position={[item.x - W / 2, h / 2, item.y - D / 2]}
            rotation={[0, (-item.rotation * Math.PI) / 180, 0]}
            onClick={(e) => {
              e.stopPropagation()
              select(item.id)
            }}
          >
            <boxGeometry args={[f.width, h, f.depth]} />
            <meshStandardMaterial
              color={f.color}
              transparent={isWall}
              opacity={isWall ? 0.75 : 1}
              emissive={selected ? '#2563eb' : '#000000'}
              emissiveIntensity={selected ? 0.35 : 0}
            />
            <Edges color="rgba(0,0,0,0.4)" />
          </mesh>
        )
      })}
    </>
  )
}

export function View3D() {
  const room = useStore((s) => s.room)
  const dist = Math.max(room.width, room.depth)

  return (
    <div className="view3d">
      <Canvas
        camera={{ position: [dist * 0.7, dist * 0.8, dist * 0.9], fov: 50, near: 1, far: 20000 }}
        onPointerMissed={() => useStore.getState().select(null)}
      >
        <color attach="background" args={['#dbeafe']} />
        <Scene />
        <OrbitControls target={[0, room.height / 4, 0]} maxDistance={dist * 4} minDistance={50} />
      </Canvas>
      <div className="view3d-hint">드래그: 회전 · 휠/핀치: 줌 · 우클릭/두 손가락: 이동</div>
    </div>
  )
}
