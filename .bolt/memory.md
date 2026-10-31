# Project memory

## Product intent & audience

- Project is a Vite + React web app built and deployed from `/home/project`.
- Deployment target: a hosted build pipeline that runs `vite build`; no runtime server details known.

## Brand personality & voice

- Not yet established; no UI/UX context surfaced in this turn.

## Visual design & UX direction

- Stack: Vite + React; Tailwind CSS v4 via `@tailwindcss/vite` plugin (not PostCSS-based).
- React via `@vitejs/plugin-react`; config uses TypeScript (`vite.config.ts`) with ESM imports.
- No visual design, color, typography, or layout decisions inferred yet.

## Decisions, constraints & rationale

- Build failure root cause: `ERR_MODULE_NOT_FOUND` for `@tailwindcss/vite`, `@vitejs/plugin-react`, and `vite` — dependencies not installed at build time.
- Underlying conflict: `esbuild` pinned at `^0.25.0` in `package.json` devDependencies; Vite 8 requires `esbuild ^0.27 || ^0.28`.
- Fix applied: bumped `esbuild` devDependency to satisfy Vite 8 peer range, then install and build succeed.
- Constraint: keep `esbuild` version aligned with Vite's peer dependency requirements; avoid pinning it below Vite's supported range.
- Build pipeline emits experimental Node WASI warnings — non-blocking, can be ignored.
- Deployment environment path: `/home/project` (workspace root for build).

## Open questions & assumptions

- No `.bolt/prompt` present; no explicit user-provided constraints or brand guidance to follow.
- Tailwind v4 usage assumes the `@tailwindcss/vite` plugin approach is intentional (vs. switching to PostCSS), since it's in `vite.config.ts`.
- Exact `vite` and `esbuild` resolved versions not recorded; only the peer range (`^0.27 || ^0.28` for esbuild) is known.
- No information on runtime/deploy target beyond "retry your deployment"; future issues may need that context.
- UI/UX direction, component patterns, and accessibility requirements not yet defined.