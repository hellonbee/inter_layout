import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Konva from 'konva'
import { Layer, Stage } from 'react-konva'
import { useStore } from '../store'
import { stageRegistry } from '../stageRegistry'
import { DoorItem } from './DoorItem'
import { FurnitureItem } from './FurnitureItem'
import { RoomShape } from './RoomShape'
import { SelectionToolbar } from './SelectionToolbar'

interface View {
  scale: number
  x: number
  y: number
}

const MARGIN = 50 // px, 방 주위 여백 (치수 라벨 공간 포함)

export function PlanCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<Konva.Stage | null>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [view, setView] = useState<View>({ scale: 1, x: 0, y: 0 })

  const room = useStore((s) => s.room)
  const doors = useStore((s) => s.doors)
  const placed = useStore((s) => s.placed)
  const furniture = useStore((s) => s.furniture)
  const selectedId = useStore((s) => s.selectedId)
  const select = useStore((s) => s.select)

  // 컨테이너 크기 추적
  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight })
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)
    window.addEventListener('orientationchange', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
      window.removeEventListener('orientationchange', update)
    }
  }, [])

  // 화면에 맞춤
  const fitView = useCallback(() => {
    if (!size.w || !size.h) return
    const t = room.wallThickness
    const contentW = room.width + 2 * t
    const contentH = room.depth + 2 * t
    const scale = Math.max(
      0.01,
      Math.min((size.w - MARGIN * 2) / contentW, (size.h - MARGIN * 2) / contentH),
    )
    setView({
      scale,
      x: (size.w - contentW * scale) / 2 + t * scale,
      y: (size.h - contentH * scale) / 2 + t * scale,
    })
  }, [size, room.width, room.depth, room.wallThickness])

  useEffect(() => {
    fitView()
  }, [fitView])

  // 휠 줌 (포인터 기준)
  const onWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault()
    const stage = stageRef.current
    if (!stage) return
    const pointer = stage.getPointerPosition()
    if (!pointer) return
    const old = view
    const factor = Math.pow(1.06, -e.evt.deltaY / 50)
    const scale = Math.min(Math.max(old.scale * factor, 0.05), 20)
    setView({
      scale,
      x: pointer.x - ((pointer.x - old.x) / old.scale) * scale,
      y: pointer.y - ((pointer.y - old.y) / old.scale) * scale,
    })
  }

  // 핀치 줌
  const lastDist = useRef(0)
  const lastCenter = useRef<{ x: number; y: number } | null>(null)

  const onTouchMove = (e: Konva.KonvaEventObject<TouchEvent>) => {
    const [t1, t2] = [e.evt.touches[0], e.evt.touches[1]]
    if (!t1 || !t2) return
    e.evt.preventDefault()
    const stage = stageRef.current
    if (!stage) return
    if (stage.isDragging()) stage.stopDrag()

    const p1 = { x: t1.clientX, y: t1.clientY }
    const p2 = { x: t2.clientX, y: t2.clientY }
    const center = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 }
    const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)

    if (!lastDist.current || !lastCenter.current) {
      lastDist.current = dist
      lastCenter.current = center
      return
    }
    const old = view
    const scale = Math.min(Math.max(old.scale * (dist / lastDist.current), 0.05), 20)
    const rect = stage.container().getBoundingClientRect()
    const local = { x: center.x - rect.left, y: center.y - rect.top }
    setView({
      scale,
      x: local.x - ((local.x - old.x) / old.scale) * scale + (center.x - lastCenter.current.x),
      y: local.y - ((local.y - old.y) / old.scale) * scale + (center.y - lastCenter.current.y),
    })
    lastDist.current = dist
    lastCenter.current = center
  }

  const onTouchEnd = () => {
    lastDist.current = 0
    lastCenter.current = null
  }

  return (
    <div className="plan-canvas" ref={containerRef}>
      {size.w > 0 && size.h > 0 && (
      <Stage
        ref={(node) => {
          stageRef.current = node
          stageRegistry.current = node
        }}
        width={size.w}
        height={size.h}
        scaleX={view.scale}
        scaleY={view.scale}
        x={view.x}
        y={view.y}
        draggable
        onWheel={onWheel}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onDragEnd={(e) => {
          if (e.target === stageRef.current) setView((v) => ({ ...v, x: e.target.x(), y: e.target.y() }))
        }}
        onClick={(e) => {
          if (e.target === e.target.getStage()) select(null)
        }}
        onTap={(e) => {
          if (e.target === e.target.getStage()) select(null)
        }}
      >
        <Layer>
          <RoomShape room={room} />
          {doors.map((d) => (
            <DoorItem key={d.id} door={d} room={room} />
          ))}
          {placed.map((item) => {
            const f = furniture.find((f) => f.id === item.furnitureId)
            if (!f) return null
            return (
              <FurnitureItem
                key={item.id}
                item={item}
                furniture={f}
                room={room}
                selected={item.id === selectedId}
              />
            )
          })}
        </Layer>
      </Stage>
      )}
      <SelectionToolbar />
      <button className="fit-btn" onClick={fitView} title="화면에 맞춤">
        ⤢
      </button>
    </div>
  )
}
