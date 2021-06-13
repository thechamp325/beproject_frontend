
import React ,{ReactDOM} from "react";
import '../Components/add_inventory/add_inventory.css';
import PrimarySearchAppBar from '../Components/PrimarySearchAppBar';
class Onlineshop extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     ProductName: "",
     ProductId: "",
     Price: "",
     Quantity: "",
     TotalAmount: "",
     ExpiryDate:"",
     Image:""
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
       <div>
         <PrimarySearchAppBar data ={this.props.location.state} />
       </div>
       <div class={"pl-3"} style={{fontSize:"50px"}}>
           Online Shop
       </div>
     <form class="form-class-1"  onSubmit={this.handleSubmit}>
       <div class="form-row-1"> 
         <div class="form-group-1 col-md-6">
           <label   >
             <div class="form-group-1">Product Name:</div>
             <input  type="text" class="form-control-1 "  placeholder="Enter Product Name" name="Pname" value={this.state.ProductName} onChange={(e) => {
             this.handleChange(e, 'ProductName') }} />
           </label>
         </div>

         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Product Id:</div>
             <input type="text" class="form-control-1"  placeholder="Enter Product Id " name="Pcode" value={this.state.ProductId} onChange={(e) => {
             this.handleChange(e, 'ProductId') }} />
           </label>
         </div>
       </div>
       
       <div class="form-row-1">
         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Price:</div>
             <input type="text" class="form-control-1"  placeholder="Enter Price" name="quant" value={this.state.Price} onChange={(e) => {
             this.handleChange(e, 'Price') }} />
           </label>
         </div>
       
       
         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Quantity:</div>
             <input type="text" class="form-control-1"  placeholder="Enter Quantity" name="Price" value={this.state.Quantity} onChange={(e) => {
             this.handleChange(e, 'Quantity') }} />
           </label>
         </div>
       </div>

       <div class="form-row-1">
         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Total Price:</div>
             <input type="text" class="form-control-1"  placeholder="Total Price" name="Totalprice" value={this.state.Price*this.state.Quantity} onChange={(e) => {
             this.handleChange(e, 'TotalAmount') }} />
           </label>
         </div>

         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Expiry Date:</div>
             <input type="Date" class="form-control-1"  placeholder="Date" name="ExpiryDate" value={this.state.ExpiryDate} onChange={(e) => {
             this.handleChange(e, 'ExpiryDate') }} />
           </label>
         </div>
       </div>
       <div class="form-row-1">
         <div class="form-group-1 col-md-6">
           <label>
             <div class="form-group-1">Image URL:</div>
             <input type="url" class="form-control-1"  placeholder="https://" name="Image" value={this.state.Image} onChange={(e) => {
             this.handleChange(e, 'Image') }} />
           </label>
         </div>
       </div>
       <div>
            <div  style={{paddingLeft:"500px"}}>
                <input type="submit"class="btn btn-primary" value="Add" />
           </div>
         </div>
     </form>  
        
     </div>
     
   );
 }
} 
export default Onlineshop;


