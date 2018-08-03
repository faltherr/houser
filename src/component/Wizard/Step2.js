import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {Redirect} from 'react-router'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            img: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange (evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }

    handleReset = () => {
        this.setState({
            img: ""
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
                        <p> Image URL </p>
                        <input value={this.state.img}
                                     name = "img"
                                     onChange={this.handleInputChange}/>
                        </div>
                    </div>

                    </div>
                    {/* Nav buttons */}
                    <div> 
                        <button>Previous Step</button>
                        <button> Next Step </button>

                    </div>
                </div>
        )
    }
}