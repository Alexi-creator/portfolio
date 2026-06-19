// Decorative (sits next to text), so aria-hidden to avoid redundant announcement.
export function TelegramIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 4 3 11l5 2 2 6 3-4 4 3z" />
      <path d="M8 13l9-6" />
    </svg>
  )
}
