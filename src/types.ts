// 모든 치수 단위: cm

export interface Room {
  width: number // 실내 가로 (x)
  depth: number // 실내 세로 (y)
  height: number // 천장 높이
  wallThickness: number
}

export type WallSide = 'top' | 'bottom' | 'left' | 'right'

export interface Door {
  id: string
  wall: WallSide
  offset: number // 벽 시작점(좌측 또는 상단)부터 문 시작까지 거리
  width: number
}

export interface Furniture {
  id: string
  name: string
  width: number
  depth: number
  height: number
  color: string
}

export interface PlacedItem {
  id: string
  furnitureId: string
  x: number // 실내 좌표계 중심 위치
  y: number
  rotation: number // 도(deg)
}

export interface Plan {
  room: Room
  doors: Door[]
  furniture: Furniture[]
  placed: PlacedItem[]
}
