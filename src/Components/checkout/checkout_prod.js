import React,{ReactDOM} from 'react';
import './Checkout.css';
import veg from '../../media/image.jpg';
class Checkout_prod extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            increment:1,
            cost:0,
            product_name:"hello"
          
           
        }
        this.handlesubmitneg=this.handlesubmitneg.bind(this);
        this.handlesubmitpos=this.handlesubmitpos.bind(this);
        
    }
    
    handlesubmitpos(evt) {
        if(this.state.increment>=1)
        {
            
           var val=this.state.increment+1;
            this.setState({increment:val});
           // console.log('inpos'+val);
            this.update(val);
        }
      
     
      }
      handlesubmitneg(evt) {
        if(this.state.increment>1)
        {
            var val=this.state.increment-1;
            this.setState({increment:val});
           // console.log('inneg'+val);
            this.update(val);
        }      
       }
       update(value){
        //console.log('update'+value);
           this.props.val3(value*this.props.val.cost);
       }
      
    render()
    {
        return (
            

                    
                    <div className='checkout-border row m-0 p-2'>

                        {console.log(this.props)}
                        <div className="col-3 p-2 " >
                            <img width="100%" src={this.props.val.productImages}/>
                            <div className="d-flex justify-content-center align-items-center mb-lg-n3  p-2">
                                <div>
                                    <button className="incr"  onClick={this.handlesubmitneg}>-</button>
                                </div>
                                <div className="val ">
                                    <input type="txt" value={this.state.increment}  className="tex" />
                                </div>
                                <div>
                                    <button className="incr" onClick={this.handlesubmitpos}>+</button>
                                </div>
                            </div>   
                        </div>
                        
                        <div className="col-5 p-2">
                            <div className="head ">
                               <span>{this.props.val.productName}</span>
                            </div>
                            <div className="pri">
                                 <span >₹{this.props.val.price}</span> 
                            </div>
                            <div className="button pl-2">
                                <button className="btn btn-primary" style={{fontSize:"10px"}}>REMOVE</button>
                            </div>
                        </div>
                        <div className=" pl-5 col-4 p-2"> 
                            <div className="head font_color ">
                               <span>Deliver by Sat Mar 13</span>
                            </div>
                            <span>7 Days Replacement Policy</span>
                        </div>
                      
                    </div>
                
            
        );
    }
}
export default Checkout_prod;