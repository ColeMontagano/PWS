import React, {Component} from 'react'
import NewSpace from './newspace'
import Spaces from './spaces'
import Mapbox from '../mapbox/mapbox'
import {Typography, Button, Container} from '@material-ui/core'

class WorkingSpaces extends Component {
    constructor(props){
        super(props)
        this.state = {
            newSpaceOpen : false
        }

    }


    render() {
        const showNewSpace = () => {
            this.setState({
                newSpaceOpen : !this.state.newSpaceOpen
            })
        }
        return(
                <Container>
                <Typography className="header" variant="h1">
                    Hello From Working Space
                </Typography>

                
                {this.state.newSpaceOpen ? <NewSpace showNewSpace={() => showNewSpace()}/> : <Button onClick={showNewSpace}> New Space </Button>}
                {/* <Spaces /> */}

                <div className="map-box">

                <Mapbox/>
                </div>
                </Container>
        )
    }
}

export default WorkingSpaces