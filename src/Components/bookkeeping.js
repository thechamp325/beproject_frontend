

import React, { useCallback, useEffect, useState } from "react";
import './add_inventory/add_inventory.css';
import BookkeepingNavbar from './BookkeepingNavbar';
import axios from 'axios';
const Bookkeeping = (props) => {

  const [state,setState] = useState();
  const [CustomerName, setCustomerName] = useState('');
    const [Contact, setContact] = useState('');
    const [CreditAmount, setCreditAmount] = useState('');
    const [AmountPaid, setAmountPaid] = useState('');
    const [RemainingAmount, setRemainingAmount] = useState('');
    const [PaymentDate, setPaymentDate] = useState();
    const [Email, setEmail] = useState();
    const [Aadharid, setAadharid] = useState();


  


 const handleChange = (evt) => {
   const obj =state;
  //  obj.field = evt.target.value;
   setState(obj);
  //  console.log(field+ " =" +state[field])

 };

 const handleChangeCustomerName = (evt) => {
  setCustomerName(evt.target.value);

};
const handleChangeEmail = (evt) => {
  setEmail(evt.target.value);

};const handleChangeAadhar = (evt) => {
  setAadharid(evt.target.value);

};
const handleChangeContact = (evt) => {
 setContact(evt.target.value);

};
const handleChangeCreditAmount = (evt) => {
  setCreditAmount(evt.target.value);
  setRemainingAmount(CreditAmount);


};

const handleChangeAmountPaid = (evt) => {
  setAmountPaid(evt.target.value);
  setRemainingAmount(CreditAmount-AmountPaid);


};

const handleChangePaymentDate = (evt) => {
 setPaymentDate(evt.target.value);

};

 const handleSubmit = (event) =>{
  // TO DO check validations


  const data = {
      uds:[ {
        CustomerName:CustomerName,
        Mobile:Contact,
        CreditAmount:CreditAmount,
        AmountPaid:AmountPaid,
        RemainingAmount:CreditAmount-AmountPaid,
        PaymentDate:PaymentDate,
        email:Email,
        aadharid:Aadharid,
        shopid:'1'

      }
    ]
  };
  const submitdata = {
      data: data
  };
  // console.log(data);
  setCustomerName('');
  setAmountPaid('');
  setContact('');
  setCreditAmount('');
  setRemainingAmount('');
  setPaymentDate('');
  setAadharid('');
  setEmail('');
console.log(submitdata);
  //.. 
  axios.post('http://localhost:5000/bookkeeping/postinfo',submitdata)
  .then(response => {
       console.log(response)
      
      })
  .catch(error => { console.log(error)})


// call API
  //  const result = {
  //    p_name : state.ProductName,

  //  }
  //  event.preventDefault();
 };


   
   return (
     
     <div>
       <div>
         <BookkeepingNavbar data ={props.location.state} />
       </div>
       <div class={"pl-3"} style={{fontSize:"50px"}}>
           Bookkeeping
       </div>
     <form class="form-class-1"  onSubmit={handleSubmit}>
       <div class="form-row-1"> 
         <div class="form-group-1 col-md-6">
           <label   >
             <div class="form-group-1">Customer Name:</div>
             <input  type="text" class="form-control-1 "  placeholder="Enter Customer Name" name="Pname" value={CustomerName} onChange={handleChangeCustomerName} />
           </label>
         </div>

         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Contact Number:</div>
             <input type="text" maxlength="10" class="form-control-1"  placeholder="Enter Contact Number " name="Pcode" value={Contact} onChange={handleChangeContact} />
           </label>
         </div>
       </div>
       
       <div class="form-row-1">
         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Credit Amount:</div>
             <input type="text" class="form-control-1"  placeholder="Enter Credit Amount" name="quant" value={CreditAmount} onChange={handleChangeCreditAmount} />
           </label>
         </div>
       
       
         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Amount Paid:</div>
             <input type="text" class="form-control-1"  placeholder="Amount Paid" name="Price" value={AmountPaid} onChange={handleChangeAmountPaid} />
           </label>
         </div>
       </div>

       <div class="form-row-1">
         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Remaining Amount:</div>
             <input type="text" class="form-control-1"  placeholder="Total Price" name="Totalprice" value={CreditAmount-AmountPaid}  />
           </label>
         </div>

         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Aadhar ID:</div>
             <input type="text" class="form-control-1"  placeholder="Enter Aadhar Id" name="Aadharid" value={Aadharid} onChange={handleChangeAadhar} />
           </label>
         </div>
       </div>
       <div class="form-row-1">
         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Email ID:</div>
             <input type="email" class="form-control-1"  placeholder="Enter Email Id" name="EmailId" value={Email} onChange={handleChangeEmail} />
             </label>
         </div>

         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Payment Date:</div>
             <input type="Date" class="form-control-1"  placeholder="Date" name="PaymentDate" value={PaymentDate} onChange={handleChangePaymentDate} />
           </label>
         </div>
       </div>
         <div>
            <div  style={{paddingLeft:"450px"}}>
                <buttton type="button" class="btn btn-primary" onClick={handleSubmit} >Add</buttton>
                <a href='/bookkeepinglist' class="btn btn-primary  ml-5">Credit Book</a>
           </div>
         </div>
     </form>  
        
     </div>
     
   );
 }
export default Bookkeeping;


