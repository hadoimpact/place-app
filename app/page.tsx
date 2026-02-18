'use client'

import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Map
        initialViewState={{
          latitude: 37.5665,
          longitude: 126.9780,
          zoom: 11,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      />
    </main>
  )
}
