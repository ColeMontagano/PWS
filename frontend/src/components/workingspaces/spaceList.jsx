import React from 'react'


const SpaceList = (props) => {

    console.log(props.allSpaces)

    return(props.allSpaces.map((spaces, i) => {
        return(
        <div key={i}>
            <h1>{spaces.name}</h1>
        </div>

        )
    })
    )
}

export default SpaceList