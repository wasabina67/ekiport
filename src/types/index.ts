export type Location = {
  id: string
  name: string
  lat: number
  lng: number
  detail: string
}

export type Station = Location & { cat: 'station' }

export type Airport = Location & { cat: 'airport' }
