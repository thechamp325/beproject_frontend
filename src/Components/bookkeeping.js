

import React ,{ReactDOM} from "react";
import './add_inventory/add_inventory.css';
class Bookkeeping extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     CustomerName: "",
     Contact: "",
     CreditAmount: "",
     AmountPaid: "",
     RemainingAmount: "",
   }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(evt, field) {
   const obj ={};
   obj[field] = evt.target.value;
  this.setState(obj);

 }

 handleSubmit(event) {
  // TO DO check validations

  //.. 

// call API
   const result = {
     p_name : this.state.ProductName,

   }
   event.preventDefault();
 }

 render() {
   
   return (
     
     <div>
       <div class={"pl-3"} style={{fontSize:"50px"}}>
           Bookeeping
       </div>
     <form class="form-class"  onSubmit={this.handleSubmit}>
       <div class="form-row"> 
         <div class="form-group col-md-6">
           <label   >
             <div class="form-group">Customer Name:</div>
             <input  type="text" class="form-control "  placeholder="Enter Customer Name" name="Pname" value={this.state.CustomerName} onChange={(e) => {
             this.handleChange(e, 'CustomerName') }} />
           </label>
         </div>

         <div class="form-group col-md-6">
           <label>
             <div class="form-group">Contact Number:</div>
             <input type="text" class="form-control"  placeholder="Enter Contact Number " name="Pcode" value={this.state.Contact} onChange={(e) => {
             this.handleChange(e, 'Contact') }} />
           </label>
         </div>
       </div>
       
       <div class="form-row">
         <div class="form-group col-md-6">
           <label>
             <div class="form-group">Credit Amount:</div>
             <input type="text" class="form-control"  placeholder="Enter Credit Amount" name="quant" value={this.state.CreditAmount} onChange={(e) => {
             this.handleChange(e, 'CreditAmount') }} />
           </label>
         </div>
       
       
         <div class="form-group col-md-6">
           <label>
             <div class="form-group">Amount Paid:</div>
             <input type="text" class="form-control"  placeholder="Amount Paid" name="Price" value={this.state.AmountPaid} onChange={(e) => {
             this.handleChange(e, 'AmountPaid') }} />
           </label>
         </div>
       </div>

       <div class="form-row">
         <div class="form-group col-md-6">
           <label>
             <div class="form-group">Remaining Amount:</div>
             <input type="text" class="form-control"  placeholder="Total Price" name="Totalprice" value={this.state.CreditAmount-this.state.AmountPaid} onChange={(e) => {
             this.handleChange(e, 'RemainingAmount') }} />
           </label>
         </div>
       </div> 
         <div class="center">
           <input type="submit"class="btn btn-primary" value="Add" />
           <a href='/bookkeepinglist' class="btn btn-primary  ml-5">Credit Book</a>
         </div>
     </form>  
        
     </div>
     
   );
 }
} 
export default Bookkeeping;


