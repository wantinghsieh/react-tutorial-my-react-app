# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Minimal React + Vite scaffold (unmodified `create-vite` react template), used as a tutorial/learning sandbox. No router, state management, or test framework is set up.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint (see `.oxlintrc.json`; enables `react` and `oxc` plugins with `react/rules-of-hooks` as an error)

There is no test suite configured.

## Architecture

- `src/main.jsx` — entry point, mounts `<App />` into `#root` inside `StrictMode`.
- `src/App.jsx` — top-level component; composes other components (e.g. `Counter`) plus its own local UI/state.
- `src/Counter.jsx` — example of the split-out pattern: a component paired with its own co-located CSS file (`Counter.css`), each imported directly (no CSS modules).
- `src/assets/` — static images imported directly into JSX.
- `public/icons.svg` — sprite sheet referenced via `<use href="/icons.svg#...">` for inline icons (documentation/social/github/discord/x/bluesky icons).
- Styling is plain CSS, one file per component (`App.css`, `Counter.css`, `index.css`), no CSS framework or CSS-in-JS.

As features are added, keep splitting `App.jsx` into components under `src/`, following the `Counter.jsx`/`Counter.css` co-location pattern.
