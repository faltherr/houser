import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom';
// import Routes from '../../route'


export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }

    }

    // getHouses
    // deleteHouses


    render() {
        const houses = this.state.houses.map((house, index) => {
            return (
                <div key={house.index}> {house} </div>
            )
        })
        return (
            // View Container
            <div>
                {/* Main Content Container */}
                <div>
                    {/* Top sub heading continer 2 row items */}
                    <div>
                    <h1> Dashboard </h1>
                    <Link to='/wizard' >
                        <button> Add New Property </button>
                    </Link>
                    </div>
                    {/* List of homes in a column and label container*/}
                    <div> 
                        <div> <h4> Home Listings </h4> </div>
                        {/* List of properties */}
                        <div>
                            
                        </div>
                    </div>    
                </div>
                <div>
                    <House />
                </div>
            </div>
        )
    }
}