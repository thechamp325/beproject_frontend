import React,{ReactDOM} from 'react';
import './Checkout.css';
import Checkout_prod from './checkout_prod.js';
import loc from '../../media/location.png';
import Checkout_price from './checkout_price';
import veg from '../../media/image.jpg';

class Checkout extends React.Component
{
    address="Address sfnlnfe efonefnef eofnef laedhflj aerdfgj ablihang lairhg";
    fields=[
       { cost:500,product_name:"first kansklfvnklafgfdibg alsbf sdbf ls dgnilrgf aesdgiogf awegb awegb ergfb bsjkdgbrsf n" },
    //    { cost:700,product_name:"second kansklfvnklafgfdibg alsbf sdbf ls dgnilrgf aesdgiogf awegb awegb ergfb bsjkdgbrsf n"  },
    //    { cost:800,product_name:"third kansklfvnklafgfdibg alsbf sdbf ls dgnilrgf aesdgiogf awegb awegb ergfb bsjkdgbrsf n" },
    //    { cost:900,product_name:"fourth kansklfvnklafgfdibg alsbf sdbf ls dgnilrgf aesdgiogf awegb awegb ergfb bsjkdgbrsf n" },
    //    { cost:1000,product_name:"fifth kansklfvnklafgfdibg alsbf sdbf ls dgnilrgf aesdgiogf awegb awegb ergfb bsjkdgbrsf n" },
    //    { cost:1100,product_name:"sixth kansklfvnklafgfdibg alsbf sdbf ls dgnilrgf aesdgiogf awegb awegb ergfb bsjkdgbrsf n" },
     ];
    constructor(props)
    {
        super(props);
        this.state={
            increment:1,
            price:this.fields[0].cost,
        }
    }
    
     
     update=(val1)=>
     {
        // this.setState({increment:val1});
        this.setState({price:val1});
     }
    render()
    {
        
        return (
            <div className='row m-0 p-3' >
                <div className='col-md-8'> 
                    <div className='justify-content-between align-items-center checkout-border row m-0 p-2'>
                        <div className="col-4" >
                            <span className='checkout_font'  > My Cart</span>
                        </div>
                        <div  className="d-flex col-8 align-items-center"> 
                            <div>
                                <img className='image' src={loc}  />
                                <span className=' checkout_font' >Delivery Address </span>
                            </div>
                            <div className='address ml-2'>
                                <span >{this.address} </span>
                            </div>     
                        </div>
                    </div>
                    {this.fields.map((a)=>(
                        
                        <Checkout_prod val={a} val3={this.update} />
        
                    ))}
                </div>
                        <Checkout_price  val5={this.state}/>
                        
            </div>
            
        );
    }
}
export default Checkout;