import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { stations } from '../data/stations'
import { airports } from '../data/airports'
import { createIcon } from '../utils/createIcon'

const stationIcon = createIcon('#4ecdc4', '🚉')
const airportIcon = createIcon('#f4845f', '✈️')

export default function Map() {
  return (
    <MapContainer
      center={[36.5, 137.5]}
      zoom={6}
      style={{ width: '100vw', height: '100vh' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {stations.map((s) => (
        <Marker key={s.id} position={[s.lat, s.lng]} icon={stationIcon}>
          <Popup>
            <strong>{s.name}</strong><br />{s.detail}
          </Popup>
        </Marker>
      ))}
      {airports.map((a) => (
        <Marker key={a.id} position={[a.lat, a.lng]} icon={airportIcon}>
          <Popup>
            <strong>{a.name}</strong><br />{a.detail}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
