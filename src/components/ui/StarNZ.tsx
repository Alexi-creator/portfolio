import styles from "./StarNZ.module.css"

// Звезда с флага Новой Зеландии.
export function StarNZ() {
  return (
    <svg className={styles.nzStar} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 1.6 L14.6 8.5 L21.9 8.7 L16.1 13.2 L18.1 20.3 L12 16.1 L5.9 20.3 L7.9 13.2 L2.1 8.7 L9.4 8.5 Z"
        fill="#0F5132"
        stroke="#ffffff"
        strokeWidth="1.1"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
