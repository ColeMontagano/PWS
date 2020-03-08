import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'


class Mapbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lng: 6,
            lat: 34,
            zoom: 10,
            value: null
        }

        this.getLocation = this.getLocation.bind(this)

    }
    componentDidMount() {
        this.getDataSet()
    }

    getDataSet = () => {
        axios.get('http://localhost:8080/getDataSet')
    }

    
    getLocation = () => {
        const options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        }
        
        const success = (pos) => {
            var crd = pos.coords;
            this.setState({
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
        this.setState({ value: value });
      }
    
    loadMap = () => {
        axios.get("http://localhost:8080/mapboxAPIKey").then(({ data }) => {
            mapboxgl.accessToken = data
        }).then(() => {
            let map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [this.state.lng, this.state.lat],
                zoom: this.state.zoom
            });
                    map.on('move', () => {
                        this.setState({
                        lng: map.getCenter().lng.toFixed(4),
                        lat: map.getCenter().lat.toFixed(4),
                        zoom: map.getZoom().toFixed(2)
                        });
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

    render() {
        

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
}

export default Mapbox