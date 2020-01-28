import React, {Component} from 'react'
import NewSpace from './newspace'
import Spaces from './spaces'
import {Typography} from '@material-ui/core'

class WorkingSpaces extends Component {
    render() {
        return(
            <div className="workingSpaces">
     <Typography classname="header" variant="h1">
          Hello From Working Space
     </Typography>


                <NewSpace />
                <Spaces />

            </div>
        )
    }
}

export default WorkingSpaces