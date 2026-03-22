# feedback-overlay

A visual annotation overlay for React + Vite apps. Drop it into any staging environment so clients can draw, arrow, box, and type directly on the page, then save a merged screenshot.

## Install

```bash
npm install github:Humberto-Zayas/feedback-overlay
```

## Usage

Import and render `FeedbackOverlay` somewhere near the root of your app (e.g. `App.jsx`):

```jsx
import { FeedbackOverlay } from 'feedback-overlay';

function App() {
  return (
    <>
      <FeedbackOverlay enabled={import.meta.env.DEV || import.meta.env.VITE_FEEDBACK_ENABLED === 'true'} />
      {/* rest of your app */}
    </>
  );
}
```

### Environment gating

| Environment | What to do | Result |
|---|---|---|
| Local dev | Nothing — `import.meta.env.DEV` is `true` automatically | Overlay shows |
| Staging (Railway, Vercel, etc.) | Set env var `VITE_FEEDBACK_ENABLED=true` in your service settings | Overlay shows |
| Production | Leave `VITE_FEEDBACK_ENABLED` unset | Overlay hidden |

> **Important:** Vite bakes env vars into the bundle at build time. Set `VITE_FEEDBACK_ENABLED=true` before running `npm run build` for your staging deployment, and leave it unset for your production build.

## Tools

| Tool | Description |
|---|---|
| Select | Click and move existing annotations |
| Draw | Freehand pen |
| Arrow | Click and drag to draw an arrow |
| Box | Click and drag to draw a rectangle |
| Circle | Click and drag to draw an ellipse |
| Text | Click anywhere to add editable text |
| Undo / Redo | Step through annotation history |
| Clear | Remove all annotations |
| Save | Merges your annotations onto a screenshot and downloads a PNG |

## Keyboard shortcuts

- `Cmd+K` / `Ctrl+K` — open feedback mode
- `Esc` — close feedback mode

## Peer dependencies

Your project must have `react` and `react-dom` installed (v17 or later).

## Development (this repo)

```bash
# Install root deps
npm install

# Run the demo
cd demo
npm install
npm run dev
```
