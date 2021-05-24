import React, { Component } from 'react'
import axios from 'axios'
import PrimarySearchAppBar from './PrimarySearchAppBar'
class AddShop extends Component {

    constructor(props) {
        super(props)
            console.log("inaddfarrrmm")
            console.log(props)
            this.state = {
                // aadharid:this.props.aadharid,
                aadharid:'123456789012',
                Name:'',
                State:'',
                District:'',
                Taluka:'',
                Pincode:'',
                Area:'',
                Location:'N/A',
                FarmNum:1
            }
    }


    submitHandler =(e) =>{ 
        e.preventDefault() ;
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => { console.log(response)})
        .catch(error => { console.log(error)})
    }
    changeHandler = (event) =>{   this.setState({[event.target.name]:event.target.value})    }


    render() {
               
        const {Name,State,District,Taluka,Pincode,Area,Location}=this.state
        console.log("inaddfarm")
        console.log(this.state.aadharid)
        return (
            <div>
                <div>
                    <PrimarySearchAppBar/>
                </div>

                <form  onSubmit={this.submitHandler} >
                <div className="form-group">
                <label className="col-md-4 control-label">Shop Name</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="Name" value={Name} onChange={this.changeHandler} placeholder="Shop Name" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label className="col-md-4 control-label">State</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="State" value={State} onChange={this.changeHandler} placeholder="State" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label className="col-md-4 control-label">District</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="District" value={District} onChange={this.changeHandler} placeholder="District" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label className="col-md-4 control-label">Taluka</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="Taluka" value={Taluka} onChange={this.changeHandler} placeholder="Taluka" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label className="col-md-4 control-label">Pin Code</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="Pincode" value={Pincode} onChange={this.changeHandler} placeholder="Pin Code" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>


                <div className="form-group">
                <label className="col-md-4 control-label">Area(in acres)</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="Area" value={Area} onChange={this.changeHandler} placeholder="Area(in acres)" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>


                <div className="form-group">
                <label className="col-md-4 control-label">Location</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="Location" value={Location} onChange={this.changeHandler} placeholder="Location" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>
                <button type="submit">submit</button>

                </form>
            </div>
        )
    }
}
export default AddShop;