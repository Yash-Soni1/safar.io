"use client"

import React, { useCallback, useEffect, useState, useContext } from "react"
import { DirectionsRenderer, GoogleMap, MarkerF, OverlayView, OverlayViewF } from "@react-google-maps/api"
import { SourceContext } from "@/context/SourceContext"
import { DestinationContext } from "@/context/DestinationContext"

function GoogleMapsSection() {
  const containerStyle = {
    width: "100%",
    height: "600px",
  }

  const [map, setMap] = useState(null)
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 })
  const [directions, setDirections] = useState(null)
  const [loadingDirections, setLoadingDirections] = useState(false)

  const { source } = useContext(SourceContext)
  const { destination } = useContext(DestinationContext)

  useEffect(() => {
    if (source?.lat && source?.lng && map) {
      setCenter({ lat: source.lat, lng: source.lng })
      map.panTo({ lat: source.lat, lng: source.lng })
    }
  }, [source, map])

  useEffect(() => {
    if (destination?.lat && destination?.lng && map) {
      map.panTo({ lat: destination.lat, lng: destination.lng })
    }

    if (source?.lat && source?.lng && destination?.lat && destination?.lng) {
      fetchDirections()
    }
  }, [destination, source, map])

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  const fetchDirections = () => {
    if (!source || !destination) return
    setLoadingDirections(true)

    const directionsService = new window.google.maps.DirectionsService()

    directionsService.route(
      {
        origin: { lat: source.lat, lng: source.lng },
        destination: { lat: destination.lat, lng: destination.lng },
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        setLoadingDirections(false)
        if (status === "OK" && result) {
          setDirections(result)
        } else {
          console.error("Error fetching directions:", status)
          setDirections(null)
        }
      }
    )
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* ✅ Source Marker */}
      {source?.lat && source?.lng && (
        <MarkerF
          position={{ lat: source.lat, lng: source.lng }}
          icon={
            typeof window !== "undefined" && window.google
              ? {
                  url: "/assets/destination.png",
                  scaledSize: new window.google.maps.Size(50, 40),
                }
              : undefined
          }
        >
          <OverlayViewF
            position={{ lat: source.lat, lng: source.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="bg-white px-3 py-1 rounded-lg shadow-lg border border-gray-300 relative">
              <p className="text-black font-bold text-xs whitespace-nowrap">
                {source.label}
              </p>
            </div>
          </OverlayViewF>
        </MarkerF>
      )}

      {/* ✅ Destination Marker */}
      {destination?.lat && destination?.lng && (
        <MarkerF
          position={{ lat: destination.lat, lng: destination.lng }}
          icon={
            typeof window !== "undefined" && window.google
              ? {
                  url: "/assets/destination.png",
                  scaledSize: new window.google.maps.Size(50, 40),
                }
              : undefined
          }
        >
          <OverlayViewF
            position={{ lat: destination.lat, lng: destination.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="bg-black/80 px-3 py-1 rounded-lg shadow-lg border border-white relative">
              <p className="text-white font-semibold text-xs whitespace-nowrap">
                {destination.label}
              </p>
            </div>
          </OverlayViewF>
        </MarkerF>
      )}

      {/* ✅ Show directions only when available */}
      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            suppressMarkers: true,
            polylineOptions: { strokeColor: "#000000", strokeWeight: 3.5 },
          }}
        />
      )}

      {/* Optional: show a temporary overlay while fetching directions */}
      {loadingDirections && (
        <OverlayViewF
          position={center}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className="bg-white px-3 py-1 rounded-lg shadow-md border border-gray-300">
            <p className="text-black text-xs">Fetching route…</p>
          </div>
        </OverlayViewF>
      )}
    </GoogleMap>
  )
}

export default GoogleMapsSection
