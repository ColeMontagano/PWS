import React, {Component} from 'react'
import NewSpace from './newspace'
import {Jumbotron} from 'reactstrap'

class WorkingSpaces extends Component {
    render() {
        return(
            <div>
                <Jumbotron>
                    <h1>Hello From Working Space</h1>
                </Jumbotron>
                <NewSpace />
            </div>
        )
    }
}

export default WorkingSpaces