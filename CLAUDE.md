# CLAUDE.md

## Project Overview

An interactive map app displaying major stations and airports within Japan on a map.

## Tech Stack

- Map library: Leaflet, react-leaflet
- Clustering: Leaflet.markercluster

## UI Design

- Responsive design
- Supporting both mobile and desktop
- External library CSS (e.g. Leaflet) should be imported in `main.tsx`, not in individual components

## Spec-Driven Development

Specs are written in `.claude/specs/` as Markdown files.
Each spec describes a feature's requirements, design, and acceptance criteria.
Claude reads the spec and implements accordingly.

### Workflow

1. Write a spec in `.claude/specs/<feature-name>.md`
2. Ask Claude to implement it: "Read `.claude/specs/<feature-name>.md` and implement it"
3. Claude implements, then marks requirements as done

### Spec Structure

Use `.claude/specs/_template.md` as the starting point for new specs.

## Reference

- https://leafletjs.com/
- https://react-leaflet.js.org/
- https://github.com/Leaflet/Leaflet.markercluster
