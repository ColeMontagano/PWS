import React, {useState, useEffect} from 'react';
import MapGL from 'react-map-gl';
import axios from 'axios'

var MAPBOX_TOKEN = ''; // Set your mapbox token here

export default function Mapbox() {
  const [viewport, setViewport] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
            axios.get("http://localhost:8080/mapboxAPIKey").then(({data}) => {
            MAPBOX_TOKEN = data
            getLocation()
        })
  }, [])

  const getLocation = () => {
    const options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
    }
    
    const success = (pos) => {
        var crd = pos.coords;
        setViewport({
            latitude : crd.latitude,
            longitude : crd.longitude,
            zoom: 10,
            bearing: 0,
            pitch: 0})
        setLoading(false)
    }
    const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options)

}

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
