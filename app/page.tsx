'use client'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef } from 'react'

export default function Home() {
  const mapContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ''

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [126.9780, 37.5665],
      zoom: 11,
    })

    return () => map.remove()
  }, [])

  return <div ref={mapContainer} style={{ width: '100vw', height: '100vh' }} />
}
