
import React ,{ReactDOM} from "react";
import '../search/search.css';
import { VictoryChart,VictoryLine } from "victory";
import InventoryNavbar from './InventoryNavbar';
const data = [
    {name: '',id: 0, inp : [
        ]},
  {name: 'prod1',id: 1, inp : [
    { x: 1, y: 5 },
    { x: 2, y: 50 },
    { x: 3, y: 1 },
    { x: 4, y: 1 },
    { x: 5, y: 1 }]},
{name: 'prod2',id: 2, inp : [
    { x: 1, y: 15 },
    { x: 8, y: 25 },
    { x: 2, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }]},
{name: 'prod3',id: 3, inp : [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }]},
{name: 'prod4',id: 4, inp : [
    { x: 1, y: 50 },
    { x: 2, y: 25 },
    { x: 3, y: 20 },
    { x: 4, y: 10 },
    { x: 5, y: 5 }]}
];

class ProductChart extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        check:'',
        index:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
//     const obj ={};
//     obj[field] = evt.target.value;
//    this.setState(obj);
//    index=evt.target.value;;
    this.setState({check:evt.target.value});
  }

  handleSubmit(event) {
   // TO DO check validations
   this.setState({index:this.state.check});
   
   //.. 

 // call API
    // const result = {
    //   p_name : this.state.ProductName,

    // }
    event.preventDefault();
  }

  render() {
    const dataset=data;
    return (
      <div>
        <div>
                <InventoryNavbar />
            </div>
        <div class="m-3 ">
        <h1 class="heading pb-3 ">Search Product</h1>
        <div></div>
        <form onSubmit={this.handleSubmit}>
        <div class="form-row pt-3 pl-3">
          <div class="form-group col-md-6 -3">
            <label>
              <input type="text" class="form-control" placeholder="Productid" name="prod" value={this.state.check} onChange={(e) => {
              this.handleChange(e) }} />
            </label>
          </div>
            <div class="form-group col-md-6">
                <input type="submit"class="btn btn-primary" value="search"  />
            </div>
        </div>
        <div class=" col-md-6" >
            
            {dataset.map((data,i)=>{
                if(i==this.state.index)
                {
                    return(
                        <div>
                            <div class=" pl-1 pt-3 row" style={{fontSize:"20px"}}>
                                <div class="col-md-5" >Product Name: {data.name} </div>
                                <div class="col-md-5">Product Id: {data.id} </div>
                            </div>
                            <VictoryChart><VictoryLine data={data.inp} key={i}/></VictoryChart>
                        </div>
                         
                         );
                }
                    
            })}
            
        
        </div>
        </form>
         </div>  
         </div>
    );
  }
} 
 export default ProductChart;
 

