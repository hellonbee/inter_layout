import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'
import type { Plan } from './types'

export function encodePlanToHash(plan: Plan): string {
  return `#p=${compressToEncodedURIComponent(JSON.stringify(plan))}`
}

export function decodePlanFromHash(hash: string): Plan | null {
  const m = hash.match(/[#&]p=([^&]+)/)
  if (!m) return null
  try {
    const json = decompressFromEncodedURIComponent(m[1])
    if (!json) return null
    const plan = JSON.parse(json) as Plan
    if (!plan.room || !Array.isArray(plan.furniture) || !Array.isArray(plan.placed)) return null
    plan.doors = Array.isArray(plan.doors) ? plan.doors : []
    return plan
  } catch {
    return null
  }
}
