import React,{ReactDOM} from 'react';
import './Checkout.css';

class Checkout_prod extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
           
          
           
        }
       
        
    }
    
   
       update(){
           this.setState({cost:this.props.val.cost})
           this.setState({product_name:this.props.val.product_name})
       }
      
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
                    <div  className="mr-3 price_det_font"><span>₹{this.props.val5.price}</span></div>
                </div>
                <div className=" d-flex justify-content-between m-2">
                    <div className="price_det_font">Discount</div>
                    <div  className="mr-3 price_det_font disc"><span>-₹400</span></div>
                </div>
                <div className=" d-flex justify-content-between m-2">
                    <div className="price_det_font">Delivery Charges</div>
                    <div  className="mr-3 price_det_font"><span>₹0</span></div>
                </div>
                <div className=" d-flex justify-content-between m-2  total_price">
                    <div className="mt-3" >Total Price</div>
                    <div  className="mr-3 mt-3">₹{this.props.val5.price-500}<span></span></div>
                </div>
            </div>
        </div>
                
            
        );
    }
}
export default Checkout_prod;