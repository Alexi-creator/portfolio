import type { CSSProperties } from "react"
import styles from "./Fern.module.css"

/* Silver fern (NZ) — generated procedurally. One central stem (rachis) with paired
   leaflets (pinnae): longer at the base, shorter toward the tip; each leaflet is a
   separate filled path, so there's a gap between neighbours. */
const FERN = (() => {
  const baseX = 50
  const baseY = 120
  const tipY = 9 // rachis runs bottom -> top
  const span = baseY - tipY
  const N: number = 11 // leaflet pairs
  const deg = (d: number) => (d * Math.PI) / 180

  const leaflets: string[] = []
  const addBlade = (side: number) => {
    // side: +1 right, -1 left
    for (let k = 0; k < N; k++) {
      const t = N === 1 ? 0 : k / (N - 1) // 0 at base, 1 near tip
      const y = baseY - (0.05 + 0.9 * t) * span
      const L = 40 * (1 - 0.66 * t) // length shrinks upward
      const up = deg(32 + 26 * t) // steeper toward the tip
      const bx = baseX
      const by = y
      const dx = Math.cos(up) * side
      const dy = -Math.sin(up)
      const tx = bx + L * dx
      const ty = by + L * dy - L * 0.1 // slight upward curl
      const mx = bx + (tx - bx) * 0.42
      const my = by + (ty - by) * 0.42
      let px = -(ty - by) // perpendicular
      let py = tx - bx
      const pl = Math.hypot(px, py)
      px /= pl
      py /= pl
      const w = L * 0.28
      const c1x = mx + px * w
      const c1y = my + py * w
      const c2x = mx - px * w
      const c2y = my - py * w
      const f = (n: number) => Number(n.toFixed(2))
      leaflets.push(
        `M${f(bx)} ${f(by)} Q${f(c1x)} ${f(c1y)} ${f(tx)} ${f(ty)} Q${f(c2x)} ${f(c2y)} ${f(bx)} ${f(by)} Z`,
      )
    }
  }
  addBlade(1)
  addBlade(-1)
  // terminal leaflet pointing straight up so the tip isn't blunt
  leaflets.push(
    `M50 ${baseY - 0.93 * span} Q53.4 ${tipY + 7} 50 ${tipY - 1} Q46.6 ${tipY + 7} 50 ${baseY - 0.93 * span} Z`,
  )

  return { stem: `M${baseX} ${baseY} L${baseX} ${tipY - 1}`, leaflets }
})()

interface FernProps {
  size?: number
  style?: CSSProperties
}

export function Fern({ size = 26, style }: FernProps) {
  return (
    <span className={styles.fernMark} style={style} aria-hidden="true">
      <svg
        viewBox="0 0 100 124"
        height={size}
        width={(size * 100) / 124}
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d={FERN.stem}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {FERN.leaflets.map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    </span>
  )
}
