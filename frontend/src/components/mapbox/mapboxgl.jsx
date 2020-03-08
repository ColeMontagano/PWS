import React, {useState, useEffect} from 'react';
import MapGL from 'react-map-gl';
import axios from 'axios'

var MAPBOX_TOKEN = ''; // Set your mapbox token here

export default function Mapbox() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });
  const [loading, setLoading] = useState(true)

  useEffect(() => {
            axios.get("http://localhost:8080/mapboxAPIKey").then(({data}) => {
            MAPBOX_TOKEN = data
            setLoading(false)
        })
  }, [])

  if (loading === true) {
      return <div>Loading...</div>
  }

  return (
    <MapGL
      {...viewport}
      width="50vw"
      height="40vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
}
