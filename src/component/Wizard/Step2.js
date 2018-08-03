import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios'
// import {Redirect} from 'react-router'
import {addImg} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Step2 extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         img: ""
    //     }
    //     this.handleInputChange = this.handleInputChange.bind(this)
    // }

    // handleInputChange (evt){
    //     this.setState({
    //         [evt.target.name]:evt.target.value
    //     })
    // }

    // handleReset = () => {
    //     this.setState({
    //         img: ""
    //     })
    // }

    render() {
        const {addImg} = this.props
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
                        <input onChange={(e) => addImg(e.target.value)}/>
                        </div>
                    </div>

                    </div>
                    {/* Nav buttons */}
                    <div> 
                    <Link to='/wizard/step1' >
                        <button> Previous Step </button>
                    </Link>
                    <Link to='/wizard/step3' >
                        <button> Next Step </button>
                    </Link>
                    </div>
                </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        img: state.img
    }
}

export default connect(mapStateToProps, {addImg})(Step2)