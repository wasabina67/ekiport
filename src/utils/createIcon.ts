import L from 'leaflet'

export function createIcon(color: string, emoji: string) {
  const style = [
    `background:${color}`,
    'width:36px',
    'height:36px',
    'border-radius:50%',
    'display:flex',
    'align-items:center',
    'justify-content:center',
    'font-size:18px',
    'box-shadow:0 2px 4px rgba(0,0,0,0.3)',
  ].join(';')

  return L.divIcon({
    className: '',
    html: `<div style="${style}">${emoji}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -20], // offset popup above the icon
  })
}
