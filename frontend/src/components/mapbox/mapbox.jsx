import React, { useState, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

function Mapbox() {
const [mapDetails, setMapDetails] = useState({
    lng: 6,
    lat: 34,
    zoom: 10,
    value: null
})

// useEffect(() => {
//     axios.get('http://localhost:8080/getDataSet').then(data => console.log(data))
// })

    getLocation = () => {
        const options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        }
        
        const success = (pos) => {
            var crd = pos.coords;
            setMapDetails({
                ...mapDetails,
                lng: crd.longitude,
                lat: crd.latitude,
            })
            this.loadMap()
        }
        const error = (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        navigator.geolocation.getCurrentPosition(success, error, options)

    }

    onSelect = (value) => {
        setMapDetails({...mapDetails, value})
      }
    
    loadMap = () => {
        axios.get("http://localhost:8080/mapboxAPIKey").then(({ data }) => {
            mapboxgl.accessToken = data
        }).then(() => {
            let map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [mapDetails.lng, mapDetails.lat],
                zoom: mapDetails.zoom
            });
                    map.on('move', () => {
                        setMapDetails({
                            ...mapDetails,
                            lng: map.getCenter().lng.toFixed(4),
                            lat: map.getCenter().lat.toFixed(4),
                            zoom: map.getZoom().toFixed(2)
                        })


                        });
                        map.addControl(
                            new MapboxGeocoder({
                            accessToken: mapboxgl.accessToken,
                            mapboxgl: mapboxgl
                            })
                            );
        }
        )
    }
        

        return (
            <div>
            <div className="mapboxContainer">
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
            </div>
        )
}

export default Mapbox