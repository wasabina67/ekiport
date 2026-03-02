interface Props {
  stationCount: number
  airportCount: number
  stationsVisible: boolean
  airportsVisible: boolean
  onToggleStations: () => void
  onToggleAirports: () => void
}

export default function StatisticsCard({
  stationCount,
  airportCount,
  stationsVisible,
  airportsVisible,
  onToggleStations,
  onToggleAirports,
}: Props) {
  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      left: '10px',
      zIndex: 1000,
      background: 'rgba(255,255,255,0.9)',
      borderRadius: '8px',
      padding: '10px 14px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      fontSize: '14px',
      lineHeight: '1.8',
      userSelect: 'none',
    }}>
      <div
        onClick={onToggleStations}
        style={{ color: '#4ecdc4', opacity: stationsVisible ? 1 : 0.4, cursor: 'pointer', fontWeight: 'bold' }}
      >
        🚉 - {stationCount}
      </div>
      <div
        onClick={onToggleAirports}
        style={{ color: '#f4845f', opacity: airportsVisible ? 1 : 0.4, cursor: 'pointer', fontWeight: 'bold' }}
      >
        ✈️ - {airportCount}
      </div>
    </div>
  )
}
