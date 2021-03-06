import React, { useCallback, useEffect, useState } from "react";
import './Checkout.css';
import Checkout_prod from './checkout_prod.js';
import loc from '../../media/location.png';
import Checkout_price from './checkout_price';
import veg from '../../media/image.jpg';
import Popup from 'reactjs-popup';
import OnlineShopNavbar from '../../Pages/OnlineShopNavbar';

const Checkout = (props) => {
   const address="Address sfnlnfe efonefnef eofnef laedhflj aerdfgj ablihang lairhg";
   
        const [state,setState]= useState(props.location.state);
    
        // setState(props.location.state)
     
    const update=(val1)=>
     {
        // this.setState({increment:val1});
        const obj = state;
        obj.price=val1;
         setState(obj);
     }
    const handleChange = (event) =>{
        const obj = state;
        obj.address=event.target.value;
         setState(obj);
     }
     const handleSubmit =(event) =>{
        const obj = state;
        obj.newaddress=state.address;
         setState(obj);
        setState({newadress:state.address})
     }
     
        return (
            <div>
                <div>
                    <OnlineShopNavbar data ={props.location.state} />
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
                                <span >{state.newadress} </span>
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
                                                    <input type="text" class="form-control" placeholder="address"   onChange={handleChange} />
                                                </label>
                                            </div>
                                            <div class="form-group">
                                                <input  class="btn btn-primary" onClick={handleSubmit} value="ADD" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </Popup>
                        </div>
                    </div>
                    {/* {this.fields.map((a)=>( */}
                        
                        <Checkout_prod val={props.location.state} val3={update} />
        
                    {/* ))} */}
                </div>
                        <Checkout_price  val5={state}/>
                        
            </div>
            </div>
            
        );
    }
export default Checkout;