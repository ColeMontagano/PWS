import React, {Component} from 'react'
import NewSpace from './newspace'
import Spaces from './spaces'
import Mapbox from '../mapbox/mapbox'
import {Typography, Button} from '@material-ui/core'

class WorkingSpaces extends Component {
    constructor(props){
        super(props)
        this.state = {
            newSpaceOpen : false
        }

    }
    componentDidMount() {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
        function success(pos) {
            var crd = pos.coords;
          
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
          }
          
          function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
       navigator.geolocation.getCurrentPosition(success, error, options)
    }
    
    success = (pos) => {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }


    render() {
        const showNewSpace = () => {
            this.setState({
                newSpaceOpen : !this.state.newSpaceOpen
            })
        }
        return(
            <div className="workingSpaces">
     <Typography className="header" variant="h1">
          Hello From Working Space
     </Typography>

                
                {this.state.newSpaceOpen ? <NewSpace showNewSpace={() => showNewSpace()}/> : <Button onClick={showNewSpace}> New Space </Button>}
                {/* <Spaces /> */}
                <Mapbox/>

            </div>
        )
    }
}

export default WorkingSpaces