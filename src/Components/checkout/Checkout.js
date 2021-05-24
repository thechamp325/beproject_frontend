import React,{ReactDOM} from 'react';
import './Checkout.css';
import Checkout_prod from './checkout_prod.js';
import loc from '../../media/location.png';
import Checkout_price from './checkout_price';
import veg from '../../media/image.jpg';
import Popup from 'reactjs-popup';
import OnlineShopNavbar from '../../Pages/OnlineShopNavbar';

class Checkout extends React.Component
{
    address="Address sfnlnfe efonefnef eofnef laedhflj aerdfgj ablihang lairhg";
    constructor(props)
    {
        super(props);
        this.state={
            increment:1,
            price:this.props.location.state.cost,
            address:'',
            newadress:this.address
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
     
     update=(val1)=>
     {
        // this.setState({increment:val1});
        this.setState({price:val1});
     }
     handleChange(event){
         this.setState({address:event.target.value})
     }
     handleSubmit(event){
        this.setState({newadress:this.state.address})
     }
    render()
    {
        
        return (
            <div>
                <div>
                    <OnlineShopNavbar/>
                </div>
            <div className='row m-0 p-3' >
                <div className='col-md-8'> 
                    <div className='justify-content-between align-items-center checkout-border row m-0 p-2'>
                        <div className="col-2" >
                            <span className='checkout_font'  > My Cart</span>
                        </div>
                        <div  className="d-flex col-10 align-items-center"> 
                            <div>
                                <img className='image' src={loc}  />
                                <span className=' checkout_font' >Delivery Address </span>
                            </div>
                            <div className='address ml-2'>
                                <span >{this.state.newadress} </span>
                            </div> 
                            {/* <div  >
                                <button class="btn">Change</button>
                            </div>     */}
                            <Popup trigger={<button class="btn"> Change</button>} position="right center">
                                <div>
                                    <form >
                                        <div class="form-row ">
                                            <div class="form-group">
                                                <label>
                                                    <input type="text" class="form-control" placeholder="address"   onChange={(e) => {
                                                this.handleChange(e) }} />
                                                </label>
                                            </div>
                                            <div class="form-group">
                                                <input  class="btn btn-primary" onClick={this.handleSubmit} value="ADD" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </Popup>
                        </div>
                    </div>
                    {/* {this.fields.map((a)=>( */}
                        
                        <Checkout_prod val={this.props.location.state} val3={this.update} />
        
                    {/* ))} */}
                </div>
                        <Checkout_price  val5={this.state}/>
                        
            </div>
            </div>
            
        );
    }
}
export default Checkout;