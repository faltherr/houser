import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom';
import axios from 'axios'
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

    componentDidMount(){
        axios.get('/api/house').then( res =>{
            console.log(res.data)
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse = (id) => {
        axios.delete(`/api/house/${id}`).then(res => {
            console.log(res.data)
            console.log("Deleted item")
            this.componentDidMount()
        })
    }


    render() {
        const houses = this.state.houses.map((house, index) => {
            return ( 
                <House key={index} house ={house} deleteFn={this.deleteHouse}/>
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
                            {houses}
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}