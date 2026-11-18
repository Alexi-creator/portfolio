import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static export: `next build` outputs ready-to-serve static files into `out/`,
  // which can be served by any static server (nginx, S3, GitHub Pages...).
  output: "export",

  // Next's image optimizer needs a server, which isn't available for static
  // export, so we serve images as-is.
  images: {
    unoptimized: true,
  },

  // Trailing slash is friendlier for static hosting (each route -> index.html).
  trailingSlash: true,

  // Allow opening the dev server from other devices on the local network
  // (e.g. http://192.168.1.4:4000); Next blocks cross-origin dev resources by default.
  allowedDevOrigins: ["192.168.*.*"],
}

export default nextConfig
