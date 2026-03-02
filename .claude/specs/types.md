# Types

## Overview
Adding type definitions. Target file is `./src/types/index.ts`.

## Requirements
1. [x] Location
2. [x] Station
3. [x] Airport

### Requirement 1

```typescript
export type Location = {
  id: string
  name: string
  lat: number
  lng: number
  detail: string
}
```

- id: Unique identifier
- name: Name
- lat: Latitude
- lng: Longitude
- detail: Detail

### Requirement 2

```typescript
export type Station = Location & { cat: 'station' }
```

- detail: Main railway company
  - e.g. JR East

### Requirement 3

```typescript
export type Airport = Location & { cat: 'airport' }
```

- detail: IATA Code | Pref
  - e.g. HND | Tokyo
