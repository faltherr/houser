import React from 'react'

export default function House(props) {
    const house = props.house
    return (
        // Main property div container
        <div>
            {/* Left align div */}
            <div>
            Property Name: {house.name}
            <br />
            Address: {house.address}
            <br />
            City: {house.city}
            <br />
            State: {house.state}
            <br />
            Zip: {house.zip}
            </div>
            {/* Right align and tope div  for delete*/}
            <div>
                <button onClick ={() => {props.deleteFn(props.house.id)}}> X </button>
                <button onClick ={() => {props.edit(props.house.id)}}> Edit </button>
            </div>
        </div>
    )
}