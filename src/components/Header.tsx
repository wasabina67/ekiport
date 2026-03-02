export default function Header() {
  return (
    <header style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'transparent',
      padding: '12px 16px',
      textAlign: 'center',
    }}>
      <h1 style={{
        margin: 0,
        color: 'white',
        fontSize: '1.4rem',
        textShadow: '0 1px 3px rgba(0,0,0,0.8)',
      }}>EkiPort</h1>
    </header>
  )
}
