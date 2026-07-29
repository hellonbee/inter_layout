import { useState } from 'react'
import { RoomPanel } from './RoomPanel'
import { DoorPanel } from './DoorPanel'
import { FurniturePanel } from './FurniturePanel'

type Tab = 'room' | 'door' | 'furniture'

const TABS: { key: Tab; label: string }[] = [
  { key: 'room', label: '도면' },
  { key: 'door', label: '문' },
  { key: 'furniture', label: '가구' },
]

export function SidePanel() {
  const [tab, setTab] = useState<Tab>('furniture')
  const [open, setOpen] = useState(true)

  return (
    <aside className={`side-panel ${open ? 'open' : 'closed'}`}>
      <button className="sheet-handle" onClick={() => setOpen(!open)} aria-label="패널 열기/닫기">
        <span className="grip" />
        {open ? '내리기 ▾' : '패널 열기 ▴'}
      </button>
      <nav className="tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={tab === t.key ? 'active' : ''}
            onClick={() => {
              setTab(t.key)
              setOpen(true)
            }}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <div className="panel-scroll">
        {tab === 'room' && <RoomPanel />}
        {tab === 'door' && <DoorPanel />}
        {tab === 'furniture' && <FurniturePanel />}
      </div>
    </aside>
  )
}
