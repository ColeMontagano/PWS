import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'


class Mapbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lng: 6,
            lat: 34,
            zoom: 5
        }

        this.getLocation = this.getLocation.bind(this)

    }
    componentDidMount() {
        this.getLocation()
        this.loadMap()
    }

    loadMap = () => {
        console.log("running load map")
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
        }
        )
    }

    getLocation = () => {
        console.log("getting location")
        const options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        }
        
        const success = (pos) => {
            console.log("success")
            var crd = pos.coords;
            console.log(this.state.lat)
            this.setState({
                lng: crd.longitude,
                lat: crd.latitude,
            })
          
            console.log('Your current position is:');
            console.log(`Latitude : ${this.state.lat}`);
            console.log(`Longitude: ${this.state.lng}`);
            console.log(`More or less ${crd.accuracy} meters.`);
          }
          
          const error = (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
       navigator.geolocation.getCurrentPosition(success, error, options)
    }



    render() {
        

        return (
            <div className="mapboxContainer">
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}

export default Mapbox