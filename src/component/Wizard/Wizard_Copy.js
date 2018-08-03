// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import axios from 'axios'
// import {Redirect} from 'react-router'

// // export default class Wizard extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "",
//             address: "",
//             city: "",
//             state: "",
//             zip: 0,
//             redirect: false
//         }
//         this.handleInputChange = this.handleInputChange.bind(this)
//     }

//     handleInputChange (evt){
//         this.setState({
//             [evt.target.name]:evt.target.value
//         })
//     }

//     handleReset = () => {
//         this.setState({
//             name: "",
//             address: "",
//             city: "",
//             state: "",
//             zip: 0,
//             redirect: false
//         })
//     }

//     handleAddHouse = () =>{
//         let newHouse = {
//             name : this.state.name,
//             address : this.state.address,
//             city : this.state.city,
//             state : this.state.state,
//             zip : this.state.xip
//         }
//         axios.post('/api/house', newHouse).then(res=>{
//             this.setState({
//                 redirect : true
//             })
//             this.handleReset()
//         })
//     }

//     render() {
//         const {redirect} = this.state
//         if (redirect){
//             return<Redirect to='/'/>;
//         }
//         return (
//             // View contianer
//             <div>
//                 {/* Main content - Column with 3 containers */}
//                 <div>
//                     {/* Top Bar */}
//                     <div>
//                         <h1> Add New Listing </h1>
//                         <Link to='/' >
//                             <button> Cancel </button>
//                         </Link>
//                     </div>
//                     {/* Middle content - Column with three divisions */}
//                     <div>
//                         <div>
//                             <p>Property name</p>
//                             <input value={this.state.name}
//                                     name="name"
//                                     onChange={this.handleInputChange}/>
//                         </div>
                    
//                     <div>
//                         <p>Address</p>
//                         <input value={this.state.address}
//                                 name="address"
//                                 onChange={this.handleInputChange}/>
//                     </div>

//                     {/* container for three input fields as a row */}
//                     <div>
//                         <div>
//                         <p> City </p>
//                         <input value={this.state.city}
//                                      name = "city"
//                                      onChange={this.handleInputChange}/>
//                         </div>

//                          <div>
//                         <p> State </p>
//                         <input value={this.state.state}
//                                       name ="state"
//                                       onChange={this.handleInputChange}
//                                       maxLength="2"/>
//                         </div>

//                         <div>
//                         <p> Zip </p>
//                         <input value={this.state.zip}
//                                      name = "zip"
//                                      onChange={this.handleInputChange}/>
//                         </div>
//                     </div>

//                     </div>
//                     {/* Complete button */}
//                     <div> 

//                         <button onClick = {this.handleAddHouse}> Complete </button>

//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }