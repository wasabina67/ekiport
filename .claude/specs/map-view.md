# Map View

## Overview
Display an interactive full-screen map of Japan.

## Requirements
1. [ ] Map occupies the full viewport (100vw × 100vh), no margins or padding

### Requirement 1
- Use `react-leaflet` `<MapContainer>` with `style={{ width: '100vw', height: '100vh' }}`
- Remove all default body/html margins so the map bleeds to the edges
- Map component: `src/components/Map.tsx`
- Tile layer: OpenStreetMap (`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`) with attribution `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`
- Initial center: `[36.5, 137.5]`, zoom: `6`
