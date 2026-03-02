import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet.markercluster'
import { stations } from '../data/stations'
import { airports } from '../data/airports'
import { createIcon } from '../utils/createIcon'
import StatisticsCard from './StatisticsCard'
import type { Location } from '../types'

const stationIcon = createIcon('#4ecdc4', '🚉')
const airportIcon = createIcon('#f4845f', '✈️')

function ClusterGroup({ locations, icon, color, visible }: {
  locations: Location[]
  icon: L.DivIcon
  color: string
  visible: boolean
}) {
  const map = useMap()
  const clusterGroupRef = useRef<L.MarkerClusterGroup | null>(null)

  useEffect(() => {
    const clusterGroup = L.markerClusterGroup({
      iconCreateFunction: (cluster) => {
        const count = cluster.getChildCount()
        return L.divIcon({
          html: `<div style="background:${color};width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:14px;box-shadow:0 2px 6px rgba(0,0,0,0.3);">${count}</div>`,
          className: '',
          iconSize: L.point(40, 40),
          iconAnchor: L.point(20, 20),
        })
      },
    })

    locations.forEach((loc) => {
      const marker = L.marker([loc.lat, loc.lng], { icon })
      marker.bindPopup(`<strong>${loc.name}</strong><br>${loc.detail}`)
      clusterGroup.addLayer(marker)
    })

    clusterGroupRef.current = clusterGroup
    map.addLayer(clusterGroup)
    return () => {
      map.removeLayer(clusterGroup)
      clusterGroupRef.current = null
    }
  }, [map, locations, icon, color])

  useEffect(() => {
    const clusterGroup = clusterGroupRef.current
    if (!clusterGroup) return
    if (visible) {
      map.addLayer(clusterGroup)
    } else {
      map.removeLayer(clusterGroup)
    }
  }, [visible, map])

  return null
}

export default function Map() {
  const [stationsVisible, setStationsVisible] = useState(true)
  const [airportsVisible, setAirportsVisible] = useState(true)

  return (
    <>
      <MapContainer
        center={[36.5, 137.5]}
        zoom={6}
        style={{ width: '100vw', height: '100vh' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ClusterGroup locations={stations} icon={stationIcon} color="#4ecdc4" visible={stationsVisible} />
        <ClusterGroup locations={airports} icon={airportIcon} color="#f4845f" visible={airportsVisible} />
      </MapContainer>
      <StatisticsCard
        stationCount={stations.length}
        airportCount={airports.length}
        stationsVisible={stationsVisible}
        airportsVisible={airportsVisible}
        onToggleStations={() => setStationsVisible(v => !v)}
        onToggleAirports={() => setAirportsVisible(v => !v)}
      />
    </>
  )
}
