import React, {useState, useEffect} from 'react'
// import {Button} from '@material-ui/core'
import SpaceList from './spaceList'
import axios from 'axios'

function Spaces() {
    const [allSpaces, setSpaces] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8080/workingspace').then(allItems => setSpaces(allItems.data))
    }, [])
        return (
            <div>
                {/* <SpaceList allSpaces={allSpaces}/> */}
            </div>
        )
}

export default Spaces