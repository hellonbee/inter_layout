import { useEffect, useState } from 'react'

interface Props {
  label: string
  value: number
  min?: number
  max?: number
  onCommit: (v: number) => void
}

// blur/Enter 시점에 반영되는 숫자 입력 (cm)
export function NumField({ label, value, min = 1, max = 100000, onCommit }: Props) {
  const [text, setText] = useState(String(value))

  useEffect(() => {
    setText(String(value))
  }, [value])

  const commit = () => {
    const n = Number(text)
    if (!Number.isFinite(n)) {
      setText(String(value))
      return
    }
    const clamped = Math.round(Math.min(Math.max(n, min), max))
    setText(String(clamped))
    if (clamped !== value) onCommit(clamped)
  }

  return (
    <label className="field">
      <span>{label}</span>
      <input
        type="number"
        inputMode="numeric"
        value={text}
        min={min}
        max={max}
        onChange={(e) => setText(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') (e.target as HTMLInputElement).blur()
        }}
      />
    </label>
  )
}
