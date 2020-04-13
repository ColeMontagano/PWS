
import React, { useState } from 'react';
import NewSpace from './newspace'
import Spaces from './spaces'
import Mapbox from '../mapbox/mapboxgl'
import {Typography, Button, Container} from '@material-ui/core'


function WorkingSpaces(props) {
    
    const [newSpaceOpen, showNewSpace] = useState(false)

        return(
                <Container>
                <Typography className="header" variant="h1">
                    Hello From Working Space
                </Typography>

                
                {newSpaceOpen ? <NewSpace showNewSpace={() => showNewSpace()}/> : <Button onClick={showNewSpace}> New Space </Button>}
                <Spaces />

                <div className="map-box">

                <Mapbox/>
                </div>
                </Container>
        )
    }

export default WorkingSpaces