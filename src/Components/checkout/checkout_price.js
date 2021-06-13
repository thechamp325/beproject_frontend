import React,{ReactDOM} from 'react';
import './Checkout.css';
import gpay from "../../Resources/images/payments/gpay.jpeg";
import Gpay from "../GenerateBill/Gpay"
class Checkout_prod extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
           
          
           
        }
       
        
    }
    
   
    //    update(){
    //        this.setState({cost:this.props.val.cost})
    //        this.setState({product_name:this.props.val.product_name})
    //    }
      
    render()
    {
        return (
                    
            <div className='col-md-4'>
            <div className=' checkout-border row m-0 p-2'>
                <div>
                    <span className='checkout_font' >Price Details</span>
                </div>
            </div>
            <div className=' checkout-border  m-0 p-2'>
                <div className=" d-flex justify-content-between m-2">
                    <div className="price_det_font">Price</div>
                    <div  className="mr-3 price_det_font"><span>₹{this.props.val5.reduce(function (acc, obj) { return acc + obj.price; }, 0)}</span></div>
                </div>
                <div className=" d-flex justify-content-between m-2">
                    <div className="price_det_font">Discount</div>
                    <div  className="mr-3 price_det_font disc"><span>-₹{this.props.val5.reduce(function (acc, obj) { return acc + obj.offer; }, 0)}</span></div>
                </div>
                <div className=" d-flex justify-content-between m-2">
                    <div className="price_det_font">Delivery Charges</div>
                    <div  className="mr-3 price_det_font"><span>₹0</span></div>
                </div>
                <div className=" d-flex justify-content-between m-2  total_price">
                    <div className="mt-3" >Total Price</div>
                    <div  className="mr-3 mt-3">₹{this.props.val5.reduce(function (acc, obj) { return acc + obj.price; }, 0) - this.props.val5.reduce(function (acc, obj) { return acc + obj.offer; }, 0)}<span></span></div>
                </div>
            </div>
            <div >
            <div className=' checkout-border row m-0 p-2'>
                <div>
                    <span className='checkout_font' >Payment Methods</span>
                </div>
            </div>
                <div className=' checkout-border '>
                    <div  class="pt-2">
                        <div class="row pl-4">
                             <div class="pr-2" >
                              <input  type="radio" checked="checked" name="radio"/>
                            </div> 
                            <div> UPI</div> 
                        </div>
                        <div class="row pl-4" >
                             <div class="pr-2">
                              <input  type="radio" checked="checked" name="radio"/>
                            </div>
                            <div> NETBANKING</div>  
                        </div>
                        <div class="row pl-4" >
                             <div class="pr-2" >
                              <input  type="radio" checked="checked" name="radio"/>
                            </div> 
                            <div> CARDS</div> 
                        </div>
                        <div class="row pl-4" >
                             <div class="pr-2">
                              <input  type="radio" checked="checked" name="radio"/>
                            </div>
                            <div> PAY ON DELIVERY</div>  
                        </div>
                    </div>
                    <div style={{paddingLeft:"330px",paddingBottom:"20px"}}>
                        <Gpay/>
                        {/* <button className='btn btn-primary' >Place Order</button> */}
                    </div>
                </div>
                {/* <div class="checkout-border center"> 
                    <img  style={{width:"50%"}} src={gpay}></img>
                </div> */}
            </div>
        </div>
                
            
        );
    }
}
export default Checkout_prod;