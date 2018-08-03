import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios'
// import {Redirect} from 'react-router'
import {connect} from 'react-redux'

import {addName,addAddress,addCity,addState,addZip} from '../../ducks/reducer'

class Step1 extends Component {
    render(){
        const {addName,addAddress,addCity,addState,addZip} = this.props;
    // handleInputChange (evt){
    //     this.setState({
    //         [evt.target.name]:evt.target.value
    //     })
    // }

    // handleReset = () => {
    //     this.setState({
    //         name: "",
    //         address: "",
    //         city: "",
    //         state: "",
    //         zip: 0,
    //         redirect: false
    //     })
    // }

    // handleAddHouse = () =>{
    //     let newHouse = {
    //         name : this.state.name,
    //         address : this.state.address,
    //         city : this.state.city,
    //         state : this.state.state,
    //         zip : this.state.xip
    //     }
    //     axios.post('/api/house', newHouse).then(res=>{
    //         this.setState({
    //             redirect : true
    //         })
    //         this.handleReset()
    //     })
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
                            <p>Property name</p>
                            <input value={this.props.name} onChange={(e) => addName(e.target.value)}/>
                        </div>
                    
                    <div>
                        <p>Address</p>
                        <input value={this.props.address} onChange={(e) => addAddress(e.target.value)}/>
                    </div>

                    {/* container for three input fields as a row */}
                    <div>
                        <div>
                        <p> City </p>
                        <input value={this.props.city} onChange={(e) => addCity(e.target.value)}/>
                        </div>

                         <div>
                        <p> State </p>
                        <input value={this.props.state} onChange={(e) => addState(e.target.value)} maxLength="2"/>
                        </div>

                        <div>
                        <p> Zip </p>
                        <input value={this.props.zip} onChange={(e) => addZip(e.target.value)}/>
                        </div>
                    </div>

                    </div>
                    {/* Next Button */}
                    <div> 
                    <Link to='/wizard/step2' >
                        <button> Next Step </button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps, {addName,addAddress,addCity,addState,addZip})(Step1)