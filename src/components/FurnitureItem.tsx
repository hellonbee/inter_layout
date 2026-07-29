import { useEffect, useRef } from 'react'
import Konva from 'konva'
import { Group, Rect, Text, Transformer } from 'react-konva'
import { clampToRoom, useStore } from '../store'
import type { Furniture, PlacedItem, Room } from '../types'

interface Props {
  item: PlacedItem
  furniture: Furniture
  room: Room
  selected: boolean
}

export function FurnitureItem({ item, furniture: f, room, selected }: Props) {
  const groupRef = useRef<Konva.Group>(null)
  const trRef = useRef<Konva.Transformer>(null)
  const select = useStore((s) => s.select)
  const movePlaced = useStore((s) => s.movePlaced)
  const rotatePlaced = useStore((s) => s.rotatePlaced)

  useEffect(() => {
    if (selected && trRef.current && groupRef.current) {
      trRef.current.nodes([groupRef.current])
      trRef.current.getLayer()?.batchDraw()
    }
  }, [selected])

  const fontSize = Math.max(10, Math.min(16, Math.min(f.width, f.depth) / 4))

  return (
    <>
      <Group
        ref={groupRef}
        x={item.x}
        y={item.y}
        rotation={item.rotation}
        offsetX={f.width / 2}
        offsetY={f.depth / 2}
        draggable
        onClick={() => select(item.id)}
        onTap={() => select(item.id)}
        onDragStart={() => select(item.id)}
        onDragMove={(e) => {
          const node = e.target
          const c = clampToRoom(room, f, { x: node.x(), y: node.y(), rotation: item.rotation })
          node.position(c)
        }}
        onDragEnd={(e) => movePlaced(item.id, e.target.x(), e.target.y())}
      >
        <Rect
          width={f.width}
          height={f.depth}
          fill={f.color}
          opacity={0.9}
          cornerRadius={Math.min(6, f.width / 8, f.depth / 8)}
          stroke={selected ? '#2563eb' : 'rgba(0,0,0,0.35)'}
          strokeWidth={selected ? 3 : 1}
          shadowColor="black"
          shadowBlur={selected ? 10 : 4}
          shadowOpacity={0.2}
        />
        <Text
          text={`${f.name}\n${f.width}×${f.depth}`}
          width={f.width}
          height={f.depth}
          align="center"
          verticalAlign="middle"
          fontSize={fontSize}
          fill="#1e293b"
          listening={false}
        />
      </Group>
      {selected && (
        <Transformer
          ref={trRef}
          resizeEnabled={false}
          rotateEnabled
          rotationSnaps={Array.from({ length: 24 }, (_, i) => i * 15)}
          rotationSnapTolerance={8}
          borderStroke="#2563eb"
          anchorStroke="#2563eb"
          anchorFill="#fff"
          onTransformEnd={() => {
            const node = groupRef.current
            if (!node) return
            const snapped = Math.round(node.rotation() / 15) * 15
            node.rotation(item.rotation) // 스토어 기준으로 되돌리고 delta 적용
            rotatePlaced(item.id, snapped - item.rotation)
          }}
        />
      )}
    </>
  )
}
