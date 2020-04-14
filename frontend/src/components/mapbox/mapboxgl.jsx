import React, {useState, useEffect} from 'react';
import MapGL, {GeolocateControl} from 'react-map-gl';
import axios from 'axios'

var MAPBOX_TOKEN = '';

export default function Mapbox() {
  const [viewport, setViewport] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
            axios.get("http://localhost:8080/mapboxAPIKey").then(({data}) => {
            MAPBOX_TOKEN = data
            setLoading(false)
        })
  }, [])

  const geolocateStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 10
  };

  if (loading === true) {
      return <div>Loading...</div>
  }

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="40vh"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
    <GeolocateControl
    positionOptions={{enableHighAccuracy: true}}
    trackUserLocation={true}
    showUserLocation={false}
    style={geolocateStyle}
  />
  </MapGL>
  );
}
