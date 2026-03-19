# feedback-overlay

A visual annotation overlay for React + Vite apps. Drop it into any staging environment so clients can draw, arrow, box, and type directly on the page, then save a merged screenshot.

## Install

```bash
npm install github:YOUR_USERNAME/feedback-overlay
```

## Usage

```jsx
import { FeedbackOverlay } from 'feedback-overlay';

<FeedbackOverlay enabled={true} />
```

Set `enabled={false}` (or tie it to an env variable) to hide it completely in production:

```jsx
<FeedbackOverlay enabled={import.meta.env.DEV} />
```

## Tools

Select · Draw · Arrow · Box · Circle · Text · Undo · Clear · Save Image

Press **Esc** to exit feedback mode.
