# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on http://localhost:4000 (not 3000)
npm run build    # production build -> static export in out/
npm run start    # serve the production build
npm run lint     # biome check .
npm run format   # biome format --write .
```

There is no test suite (no test runner configured, no test files in the repo).

## Architecture

Single-page Next.js 16 (App Router) portfolio site, statically exported (`output: "export"` in [next.config.ts](next.config.ts)). No server runtime: `next build` emits `out/`, which CI rsyncs straight to a VPS behind nginx (see [deploy/README.md](deploy/README.md)). Image optimization is disabled accordingly (`images.unoptimized`).

**Content is data-driven.** [src/app/page.tsx](src/app/page.tsx) just composes section components (`Header`, `Hero`, `Work`, `Skills`, `Contact`) in order; all actual copy — profile info, stats, project case studies, skills — lives in [src/data/portfolio.ts](src/data/portfolio.ts) as typed exports (`PROFILE`, `STATS`, `PROJECTS`, `SKILLS`). To change site content, edit that file rather than the components.

**Structure:**
- `src/components/` — one folder per page section (`Header`, `Hero`, `Skills`, `Contact`, `work/`), each with `index.tsx` + a CSS Module.
- `src/ui/` — small reusable primitives shared across sections (`Container`, `Section`, `SectionLabel`, plus decorative `Fern`/`StarNZ`).
- `src/icons/` — one inline SVG icon component per file.
- `src/theme.ts` — Mantine `createTheme` config (accent color, fonts, heading sizes, component defaults); dark is the default color scheme, set in [src/app/layout.tsx](src/app/layout.tsx).

**Styling:** CSS Modules for layout/component-specific styles, Mantine components/theme for design tokens and dark/light scheme. Biome (not ESLint/Prettier) enforces formatting and lint rules: double quotes, no semicolons, 100-char lines, trailing commas, organize-imports on save. Path alias `@/*` maps to `src/*`.

**Analytics:** Google Analytics (`@next/third-parties`) is wired in the root layout but only loads in production and only when `NEXT_PUBLIC_GA_ID` is set, so local dev never sends real pageviews.

**Deployment:** push to `main` triggers `.github/workflows/deploy.yml`, which builds and rsyncs `out/` to the VPS; nginx serves the static files directly (config in [deploy/nginx.conf](deploy/nginx.conf)).
