import React, { useState } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from 'uuid';
 const AddVendorForm = (props) => {

    const [getfullState,setfullState] = useState([]);
    const [getName,setName] = useState();
    const [getEmail,setEmail] = useState();
    const [getMobile,setMobile] = useState();
    const [getAddress,setAddress] = useState();
    const [getCity,setCity] = useState();
    const [getState,setState] = useState();
    const [getZip,setZip] = useState();
    const [getID,setID] = useState();



    const submitHandler =(e) =>{ 
        e.preventDefault() ;
        // this.setState({sentData:'1'})
        axios.post('https://jsonplaceholder.typicode.com/posts',getfullState)
        .then(response => { console.log(response)})
        .catch(error => { console.log(error)})
    }

    const handleChangeName = (event) => {
        setName(event.target.value);     
      }
      const handleChangeEmail = (event) => {
        setEmail(event.target.value);      
      }
      const handleChangeMobile = (event) => {
        setMobile(event.target.value);   
      }
      const handleChangeAddress = (event) => {
        setAddress(event.target.value);      
      }
      const handleChangeCity = (event) => {
        setCity(event.target.value);   
      }
      const handleChangeState = (event) => {
        setState(event.target.value);      
      }
      const handleChangeZip = (event) => {
        setZip(event.target.value);   
      }
 
      const handleAdd =(e) => {
        e.preventDefault();
        setID(uuidv4());
        console.log("id " + getID);
        const newList = getfullState.concat({ name:getName ,email:getEmail,mobile:getMobile,address:getAddress,city:getCity,state:getState,zip:getZip ,ID:getID});
        
        setfullState(newList);
        setName('');
        setEmail('');
        setMobile('');
        setAddress('');
        setCity('');
        setState('');
        setZip('');
    
      }

    // addVendorHAndler = (event) =>{   }    

    // render() {

    //     const mystyle = {
            
    //         padding: "10px",
    //         fontFamily: "Arial",
    //         width:"15pc",
            
    //       };
   

         
        return (
            <div>
 <form onSubmit={submitHandler}>
  <div class="form-row">
  <div class="form-group col-md-5">
  <label for="MobileNo">Name</label>
      <input type="text" class="form-control" value={getName} onChange={handleChangeName} placeholder="Name"/>
    </div>
    <div class="form-group col-md-4">
    <label for="MobileNo">Email</label>
      <input type="email" class="form-control"  value={getEmail} onChange={handleChangeEmail} placeholder="Email"/>
    </div>
    <div class="form-group col-md-3">
      <label for="MobileNo">Mobile No.</label>
      <input type="tel" class="form-control" value={getMobile} onChange={handleChangeMobile} placeholder="Mobile"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" value={getAddress} onChange={handleChangeAddress} placeholder="1234 Main St"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" onChange={handleChangeCity} value={getCity}/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select class="form-control" value={getState}onChange={handleChangeState}>
        <option selected>Maharshtra</option>
        <option>Gujrat</option>
        <option>Goa</option>
        <option>Rajasthan</option>
        <option>Karnataka</option>
        <option>Andhra Pradesh</option>
        <option>Orissa</option>
        <option>Madhya Pradesh</option>
        <option>Kerala</option>
        <option>Tamil Nadu</option>

      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" onChange={handleChangeZip} value={getZip}/>
    </div>
  </div>
  
  <div class="form-group">
    <input type="text"  class="form-control" placeholder="Add product groups" />
  </div>


  <button type="submit" class="btn btn-primary" onClick={handleAdd}>Add Vendor</button>
</form>
            </div>

               
        )
    }

export default AddVendorForm;
