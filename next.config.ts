import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Статический экспорт: `next build` сгенерирует готовую статику в папку `out/`,
  // которую можно раздавать любым статическим сервером (nginx, S3, GitHub Pages...).
  output: "export",

  // Для статики оптимизатор изображений Next недоступен (нужен сервер),
  // поэтому отдаём изображения как есть.
  images: {
    unoptimized: true,
  },

  // Слэш в конце URL — удобнее для статической раздачи (каждый маршрут -> index.html).
  trailingSlash: true,
}

export default nextConfig
