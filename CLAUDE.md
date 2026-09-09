# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Minimal React + Vite scaffold (unmodified `create-vite` react template), used as a hooks tutorial/learning sandbox. Each top-level component is a standalone demo of one React hook — components are not wired together and share no state. No router, state management library, or test framework is set up.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint (see `.oxlintrc.json`; enables `react` and `oxc` plugins with `react/rules-of-hooks` as an error)

There is no test suite configured.

## Architecture

- `src/main.jsx` — entry point, mounts `<App />` into `#root` inside `StrictMode`.
- `src/App.jsx` — composes the standalone demo components (`Ref`, `Timer`, `Counter`, `Color`, `Ref2`, `Score`, `WithCallbackExample`) with no shared state or data flow between them.
- `src/specs.txt` — running log of the literal natural-language prompts used to generate each component. When asked to add a new hook demo, append the prompt used as a new entry here, following the existing style (component name/path, hook + state shape, render behavior, CSS co-location instruction, where to mount it in `App.jsx`).
- Component pattern: each demo is `Name.jsx` + co-located `Name.css`, both imported directly (no CSS modules, no inline styles), e.g. `Counter`/`Counter.css`, `Ref`/`Ref.css`. Not every demo has a CSS file (e.g. `Score`, `WithCallbackExample` currently don't).
- Current demos and the hook each one illustrates: `Counter` (`useState`), `Color` (`useState`), `Timer` (`useEffect`), `Ref`/`Ref2` (`useRef`), `Score` (`useReducer`), `WithCallbackExample` (`useCallback` + `React.memo`, showing a memoized child skip re-rendering when its sibling's counter changes).
- `Timer.jsx` has an intentionally uncleaned `setTimeout` inside its `useEffect` (no cleanup function, no dependency array) — this is a deliberate bug demonstrating a common effect-cleanup mistake, not an oversight to fix.
- `WithCallbackExample.jsx` uses `alert()` on every render/click to make re-renders observable. `Button` is a module-scope `React.memo`-wrapped component (stable identity across renders), and `handleClick1`/`handleClick2` are wrapped in `useCallback` with empty deps (using the functional `setCount(c => c + 1)` form), so `onClick` stays referentially stable and clicking one button only re-renders that button's `Button` instance, not both.
- `src/assets/` — static images imported directly into JSX.
- `public/icons.svg` — sprite sheet referenced via `<use href="/icons.svg#...">` for inline icons (documentation/social/github/discord/x/bluesky icons).
- Styling is plain CSS, one file per component, no CSS framework or CSS-in-JS.

As features are added, keep splitting `App.jsx` into components under `src/`, following the co-location pattern above, and record the generating prompt in `specs.txt`.
