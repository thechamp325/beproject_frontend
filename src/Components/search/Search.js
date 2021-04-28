
import React ,{ReactDOM} from "react";
import './search.css';
class search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prod:"",
      code:"",
      tag:""
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
        <h1 class="heading">Search Product</h1>
        <form>
        <div class="form-row">
          <div class="form-group-1 col-md-6">
            <label>
              <input type="text" class="form-control" placeholder="Product" name="prod" value={this.state.prod} onChange={(e) => {
              this.handleChange(e, 'prod') }} />
            </label>
          </div>
        
        
        <div class="form-group-1 col-md-6">
        <label>
          <input type="text" class="form-control" placeholder="code" name="code" value={this.state.code} onChange={(e) => {
     this.handleChange(e, 'code') }} />
        </label>
        </div>

        <div class="form-group-1 col-md-6">
        <label>
          <input type="text" class="form-control" placeholder="Tag" name="Tag" value={this.state.tag} onChange={(e) => {
     this.handleChange(e, 'tag') }} />
        </label>
       </div>
        <div class="form-group-1 col-md-6">
        <input type="submit"class="btn btn-primary" value="search" />
        </div>
        </div>
        </form>
         </div>  
          
     
      
    );
  }
} 
 export default search;
 

