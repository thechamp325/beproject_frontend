

import React ,{ReactDOM} from "react";
 import './add_inventory.css';
class AddInv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductName: "",
      Productcode: "",
      Quantity: "",
      Price: "",
      TotalPrice: "",
      ExpiryDate: "",
      Manufacturing: "",
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
        
      <form class="form-class"  onSubmit={this.handleSubmit}>
        <div class="form-row"> 
          <div class="form-group col-md-6">
            <label   >
              <div class="form-group">Product Name:</div>
              <input  type="text" class="form-control "  placeholder="Enter Product Name" name="Pname" value={this.state.ProductName} onChange={(e) => {
              this.handleChange(e, 'ProductName') }} />
            </label>
          </div>

          <div class="form-group col-md-6">
            <label>
              <div class="form-group">Product code:</div>
              <input type="text" class="form-control"  placeholder="Enter Product Code" name="Pcode" value={this.state.Productcode} onChange={(e) => {
              this.handleChange(e, 'Productcode') }} />
            </label>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>
             <div class="form-group">Manufacturing Date:</div>
             <input type="Date" class="form-control"  placeholder="Enter Manufacturing Date" name="Manudate" value={this.state.Manufacturing} onChange={(e) => {
             this.handleChange(e, 'Manufacturing') }} />
            </label>
          </div>
          
          <div class="form-group col-md-6">
            <label>
              <div class="form-group">Expiry Date:</div>
              <input type="Date" class="form-control"  placeholder="Enter Expiry Date" name="expdate" value={this.state.ExpiryDate} onChange={(e) => {
              this.handleChange(e, 'ExpiryDate') }} />
            </label>
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>
              <div class="form-group">Quantity:</div>
              <input type="text" class="form-control"  placeholder="Enter Quantity" name="quant" value={this.state.Quantity} onChange={(e) => {
              this.handleChange(e, 'Quantity') }} />
            </label>
          </div>
        
        
          <div class="form-group col-md-6">
            <label>
              <div class="form-group">Price:</div>
              <input type="text" class="form-control"  placeholder="Enter Price" name="Price" value={this.state.Price} onChange={(e) => {
              this.handleChange(e, 'Price') }} />
            </label>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label>
              <div class="form-group">Total Price:</div>
              <input type="text" class="form-control"  placeholder="Total Price" name="Totalprice" value={this.state.Quantity*this.state.Price} onChange={(e) => {
              this.handleChange(e, 'TotalPrice') }} />
            </label>
          </div>
        </div> 
          <div class="center">
            <input type="submit"class="btn btn-primary" value="Add To Inventory" />
          </div>
      </form>      
      </div>
      
    );
  }
} 
 export default AddInv;
 

