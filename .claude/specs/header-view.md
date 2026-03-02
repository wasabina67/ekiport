# Header View

## Overview
Use transparent headers to ensure map visibility.
Target file is `./src/components/Header.tsx`.

## Requirements
1. [x] Component
2. [x] Styling

### Component

```tsx
<header>
  <h1>EkiPort</h1>
</header>
```

### Styling

- Background: transparent
- Position: absolute, overlaid on top of the map
- z-index: above map tiles
- Text color: white
- Text shadow: for legibility against map backgrounds
