import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {Redirect} from 'react-router'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            mortgageAmt: 0,
            rent: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange (evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }

    // handleReset = () => {
    //     this.setState({
    //         mortgageAmt: 0,
    //         rent: 0,
    //         name: "",
    //         address: "",
    //         city: "",
    //         state: "",
    //         zip: 0,
    //         redirect: false
    //     })
    // }

    handleAddHouse = () =>{
        let newHouse = {
            name : this.state.name,
            address : this.state.address,
            city : this.state.city,
            state : this.state.state,
            zip : this.state.xip
        }
        axios.post('/api/house', newHouse).then(res=>{
            this.setState({
                redirect : true
            })
            // this.handleReset()
        })
    }

    render() {
        // const {redirect} = this.state
        // if (redirect){
        //     return<Redirect to='/'/>;
        // }
        return (
            // View contianer
            <div>
                {/* Main content - Column with 3 containers */}
                <div>
                    {/* Top Bar */}
                    <div>
                        <h1> Add New Listing </h1>
                        <Link to='/' >
                            <button> Cancel </button>
                        </Link>
                    </div>
                    {/* Middle content - Column with three divisions */}
                    <div>
                        <div>
                        <p> Monthly Mortgage Amount </p>
                        <input value={this.state.mortgageAmt}
                                     name = "mortgageAmt"
                                     onChange={this.handleInputChange}/>
                        </div>
                        <div>
                        <p> Desired Monthly Rent</p>
                        <input value={this.state.rent}
                                     name = "rent"
                                     onChange={this.handleInputChange}/>
                        </div>
                    </div>

                    </div>
                    {/* Nav buttons */}
                    <div> 
                        <button>Previous Step</button>
                        <button onClick = {this.handleAddHouse}> Complete </button>

                    </div>
                </div>
        )
    }
}