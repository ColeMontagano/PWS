import React, {Component} from 'react'
import {Button} from '@material-ui/core'
import SpaceList from './spaceList'
import axios from 'axios'

class Spaces extends Component {
    state = ({
        allSpaces : []
    })

    componentWillMount() {
        axios.get('http://localhost:8080/workingspace').then(allItems => this.setState({allSpaces : allItems.data}))
    }

    // fetchAll = () => {
    //     axios.get('http://localhost:8080/workingspace').then(allItems => this.setState({allSpaces : allItems.data}))
    // }


    render(){
        return (
            <div>
                <Button >Fetch All Spaces</Button>

                <SpaceList allSpaces={this.state.allSpaces}/>
            </div>
        )
    }
}

export default Spaces