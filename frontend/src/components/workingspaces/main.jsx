import React, {Component} from 'react'
import NewSpace from './newspace'
import Spaces from './spaces'
import {Typography, Button} from '@material-ui/core'

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
            <div className="workingSpaces">
     <Typography className="header" variant="h1">
          Hello From Working Space
     </Typography>

                
                {this.state.newSpaceOpen ? <NewSpace showNewSpace={() => showNewSpace()}/> : <Button onClick={showNewSpace}> New Space </Button>}
                <Spaces />

            </div>
        )
    }
}

export default WorkingSpaces