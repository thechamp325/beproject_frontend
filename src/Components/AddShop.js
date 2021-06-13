import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios'
import PrimarySearchAppBar from './PrimarySearchAppBar'
const AddShop =(props)=> {

    
            // console.log("inaddfarrrmm")
            // console.log(props)

            // const [state,setState] = useState({
            //     // aadharid:this.props.aadharid,
            //     aadharid:'123456789012',
            //     Name:'',
            //     State:'',
            //     District:'',
            //     Taluka:'',
            //     Pincode:'',
            //     Location:'N/A',
            //     Shopid:'1'
            // })

            // const [state,setState] = useState();
  const [aadharid, setaadharid] = useState('');
    const [Name, setName] = useState('');
    const [StateName, setStateName] = useState('');
    const [District, setDistrict] = useState('');
    const [Taluka, setTaluka] = useState('');
    const [Pincode, setPincode] = useState();
    const [Location, setLocation] = useState('');
    const [Shopid, setShopid] = useState('1');
    // setaadharid(props.location.state.aadharid);
    
    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeState = (e) => {
        setStateName(e.target.value);
    };
    const handleChangeDistrict = (e) => {
        setDistrict(e.target.value);
    };
    const handleChangeTaluka = (e) => {
        setTaluka(e.target.value);
    };
    const handleChangePincode= (e) => {
        setPincode(e.target.value);
    };
    const handleChangeLocation = (e) => {
        setLocation(e.target.value);
    };

    const submitHandler =(e) =>{ 
        e.preventDefault() ;
        const data = {
            uds: [{
                aadharid:props.location.state.aadharid,
                Name:Name,
                State:StateName,
                District:District,
                Taluka:Taluka,
                Pincode:Pincode,
                Location:Location,
                shopid:Shopid
                
            }]
        };
        const submitdata = {
            data: data
        };
        setName('');
        setStateName('');
        setDistrict('');
        setTaluka('');
        setPincode('');
        setLocation('');
        console.log(data);
        axios.post('http://localhost:5000/shopkeeperData/postinfoShopProfile',submitdata)
        .then(response => { console.log(response)})
        .catch(error => { console.log(error)})
    }
    // changeHandler = (event) =>{   this.setState({[event.target.name]:event.target.value})    }


    
               
        // const {Name,State,District,Taluka,Pincode,Area,Location}=this.state
        console.log("inaddfarm")
        // console.log(this.state.aadharid)
        return (
            <div>
                <div>
                <PrimarySearchAppBar data = {props.location.state}/>
                </div>

                <form >
                <div className="form-group">
                <label className="col-md-4 control-label">Shop Name</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="Name" value={Name} onChange={handleChangeName} placeholder="Shop Name" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label className="col-md-4 control-label">State</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="State" value={StateName} onChange={handleChangeState} placeholder="State" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label className="col-md-4 control-label">District</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="District" value={District} onChange={handleChangeDistrict} placeholder="District" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label className="col-md-4 control-label">Taluka</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="Taluka" value={Taluka} onChange={handleChangeTaluka} placeholder="Taluka" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label className="col-md-4 control-label">Pin Code</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="Pincode" value={Pincode} onChange={handleChangePincode} placeholder="Pin Code" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>


                {/* <div className="form-group">
                <label className="col-md-4 control-label">Area(in acres)</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="Area" value={Area} onChange={this.changeHandler} placeholder="Area(in acres)" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div> */}


                <div className="form-group">
                <label className="col-md-4 control-label">Location</label>  
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input  name="Location" value={Location} onChange={handleChangeLocation} placeholder="Location" className="form-control"  type="text"></input>
                    </div>
                </div>
                </div>
                <button type="submit" class="btn btn-primary" onClick= {submitHandler}>submit</button>

                </form>
            </div>
        )
    
}
export default AddShop;