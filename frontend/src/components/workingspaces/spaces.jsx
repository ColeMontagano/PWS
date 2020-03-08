import React, {Component} from 'react'
// import {Button} from '@material-ui/core'
import SpaceList from './spaceList'
import axios from 'axios'

class Spaces extends Component {
    state = ({
        allSpaces : []
    })

    componentDidMount() {
        axios.get('http://localhost:8080/workingspace').then(allItems => this.setState({allSpaces : allItems.data}))
    }



    render(){
        return (
            <div>
                <SpaceList allSpaces={this.state.allSpaces}/>
            </div>
        )
    }
}

export default Spaces