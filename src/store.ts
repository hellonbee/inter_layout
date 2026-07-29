import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Door, Furniture, Plan, PlacedItem, Room } from './types'

let seq = Date.now() % 100000
export const uid = () => `${(seq++).toString(36)}${Math.random().toString(36).slice(2, 6)}`

export const DEFAULT_PLAN: Plan = {
  room: { width: 450, depth: 300, height: 250, wallThickness: 10 },
  doors: [{ id: 'door-1', wall: 'bottom', offset: 40, width: 90 }],
  furniture: [
    { id: 'f-table', name: '테이블', width: 120, depth: 60, height: 75, color: '#c8916b' },
    { id: 'f-chair', name: '의자', width: 45, depth: 45, height: 90, color: '#7d9c86' },
  ],
  placed: [],
}

// 회전된 가구의 AABB 절반 크기
export function rotatedHalf(w: number, d: number, rotation: number) {
  const rad = (rotation * Math.PI) / 180
  const c = Math.abs(Math.cos(rad))
  const s = Math.abs(Math.sin(rad))
  return { hx: (w * c + d * s) / 2, hy: (w * s + d * c) / 2 }
}

export function clampToRoom(room: Room, f: Furniture, item: Pick<PlacedItem, 'x' | 'y' | 'rotation'>) {
  const { hx, hy } = rotatedHalf(f.width, f.depth, item.rotation)
  const x = Math.min(Math.max(item.x, Math.min(hx, room.width / 2)), Math.max(room.width - hx, room.width / 2))
  const y = Math.min(Math.max(item.y, Math.min(hy, room.depth / 2)), Math.max(room.depth - hy, room.depth / 2))
  return { x: Math.round(x), y: Math.round(y) }
}

interface StoreState extends Plan {
  selectedId: string | null
  viewMode: '2d' | '3d'
  setViewMode: (m: '2d' | '3d') => void
  select: (id: string | null) => void
  setRoom: (patch: Partial<Room>) => void
  addDoor: (door: Omit<Door, 'id'>) => void
  updateDoor: (id: string, patch: Partial<Omit<Door, 'id'>>) => void
  removeDoor: (id: string) => void
  addFurniture: (f: Omit<Furniture, 'id'>) => void
  removeFurniture: (id: string) => void
  placeFurniture: (furnitureId: string) => void
  placeFurnitureAt: (furnitureId: string, x: number, y: number) => void
  addWall: (length: number, thickness: number) => void
  movePlaced: (id: string, x: number, y: number) => void
  rotatePlaced: (id: string, delta: number) => void
  duplicatePlaced: (id: string) => void
  removePlaced: (id: string) => void
  loadPlan: (plan: Plan) => void
  resetPlan: () => void
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      ...structuredClone(DEFAULT_PLAN),
      selectedId: null,
      viewMode: '2d',

      setViewMode: (m) => set({ viewMode: m }),
      select: (id) => set({ selectedId: id }),

      setRoom: (patch) =>
        set((s) => {
          const room = { ...s.room, ...patch }
          // 방 크기 변경 시 기존 가구를 새 경계 안으로 이동
          const placed = s.placed.map((p) => {
            const f = s.furniture.find((f) => f.id === p.furnitureId)
            return f ? { ...p, ...clampToRoom(room, f, p) } : p
          })
          return { room, placed }
        }),

      addDoor: (door) => set((s) => ({ doors: [...s.doors, { ...door, id: uid() }] })),
      updateDoor: (id, patch) =>
        set((s) => ({ doors: s.doors.map((d) => (d.id === id ? { ...d, ...patch } : d)) })),
      removeDoor: (id) => set((s) => ({ doors: s.doors.filter((d) => d.id !== id) })),

      addFurniture: (f) => set((s) => ({ furniture: [...s.furniture, { ...f, id: uid() }] })),
      removeFurniture: (id) =>
        set((s) => ({
          furniture: s.furniture.filter((f) => f.id !== id),
          placed: s.placed.filter((p) => p.furnitureId !== id),
        })),

      placeFurniture: (furnitureId) => {
        const s = get()
        const f = s.furniture.find((f) => f.id === furnitureId)
        if (!f) return
        const base = { x: s.room.width / 2, y: s.room.depth / 2, rotation: 0 }
        // 겹침을 피해 살짝씩 어긋나게 배치
        const n = s.placed.length % 5
        const item: PlacedItem = {
          id: uid(),
          furnitureId,
          rotation: 0,
          ...clampToRoom(s.room, f, { ...base, x: base.x + n * 15, y: base.y + n * 15 }),
        }
        set({ placed: [...s.placed, item], selectedId: item.id, viewMode: '2d' })
      },

      placeFurnitureAt: (furnitureId, x, y) => {
        const s = get()
        const f = s.furniture.find((f) => f.id === furnitureId)
        if (!f) return
        const item: PlacedItem = {
          id: uid(),
          furnitureId,
          rotation: 0,
          ...clampToRoom(s.room, f, { x, y, rotation: 0 }),
        }
        set({ placed: [...s.placed, item], selectedId: item.id })
      },

      addWall: (length, thickness) => {
        const s = get()
        const wallDef = {
          id: uid(),
          name: '내벽',
          width: length,
          depth: thickness,
          height: s.room.height,
          color: '#475569',
          kind: 'wall' as const,
        }
        const item: PlacedItem = {
          id: uid(),
          furnitureId: wallDef.id,
          rotation: 0,
          ...clampToRoom(s.room, wallDef, { x: s.room.width / 2, y: s.room.depth / 2, rotation: 0 }),
        }
        set({
          furniture: [...s.furniture, wallDef],
          placed: [...s.placed, item],
          selectedId: item.id,
          viewMode: '2d',
        })
      },

      movePlaced: (id, x, y) =>
        set((s) => ({
          placed: s.placed.map((p) => {
            if (p.id !== id) return p
            const f = s.furniture.find((f) => f.id === p.furnitureId)
            return f ? { ...p, ...clampToRoom(s.room, f, { x, y, rotation: p.rotation }) } : p
          }),
        })),

      rotatePlaced: (id, delta) =>
        set((s) => ({
          placed: s.placed.map((p) => {
            if (p.id !== id) return p
            const rotation = (((p.rotation + delta) % 360) + 360) % 360
            const f = s.furniture.find((f) => f.id === p.furnitureId)
            return f ? { ...p, rotation, ...clampToRoom(s.room, f, { ...p, rotation }) } : p
          }),
        })),

      duplicatePlaced: (id) => {
        const s = get()
        const src = s.placed.find((p) => p.id === id)
        const f = src && s.furniture.find((f) => f.id === src.furnitureId)
        if (!src || !f) return
        const copy: PlacedItem = {
          ...src,
          id: uid(),
          ...clampToRoom(s.room, f, { ...src, x: src.x + 30, y: src.y + 30 }),
        }
        set({ placed: [...s.placed, copy], selectedId: copy.id })
      },

      removePlaced: (id) =>
        set((s) => {
          const removed = s.placed.find((p) => p.id === id)
          const placed = s.placed.filter((p) => p.id !== id)
          // 내벽은 배치가 없어지면 정의도 함께 삭제 (목록에 유령으로 남지 않게)
          const def = removed && s.furniture.find((f) => f.id === removed.furnitureId)
          const furniture =
            def?.kind === 'wall' && !placed.some((p) => p.furnitureId === def.id)
              ? s.furniture.filter((f) => f.id !== def.id)
              : s.furniture
          return { placed, furniture, selectedId: s.selectedId === id ? null : s.selectedId }
        }),

      loadPlan: (plan) => set({ ...structuredClone(plan), selectedId: null }),
      resetPlan: () => set({ ...structuredClone(DEFAULT_PLAN), selectedId: null }),
    }),
    {
      name: 'inter-layout-plan',
      partialize: (s) => ({ room: s.room, doors: s.doors, furniture: s.furniture, placed: s.placed }),
    },
  ),
)

export const selectPlan = (s: Plan): Plan => ({
  room: s.room,
  doors: s.doors,
  furniture: s.furniture,
  placed: s.placed,
})
