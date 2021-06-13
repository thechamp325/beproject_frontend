import React, { useCallback, useEffect, useState } from "react";
import '../Components/checkout/Checkout.css';
import Checkout_prod from '../Components/checkout/checkout_prod';
import loc from '../media/location.png';
import Checkout_price from '../Components/checkout/checkout_price';
import Popup from 'reactjs-popup';
import OnlineShopNavbar from '../Pages/OnlineShopNavbar';
import axios from 'axios';

const Cart = (props) => {
    const address="Address sfnlnfe efonefnef eofnef laedhflj aerdfgj ablihang lairhg";
    

        // const [state,setState]= useState({
        //     increment:1,
        //     price:fields.cost,
        //     address:'',
        //     newadress:address
        // });
    
    const urlCart= "http://localhost:5000/sustomer/getinfoCart";

    const [Cart,setCart]=useState([]);
    const urlgetCart= `http://localhost:5000/customer/getinfoCart/${props.location.state.aadharid}`;
    useEffect(() => {     getCartData();}, []);

    const getCartData = () => {
        axios.get(`${urlgetCart}`)
        .then((response) => {
           const allPurchasesData =  response.data[0].Cartitems;
           setCart(allPurchasesData);
        })
        .catch(error => console.log(`Error: ${error}`));
     }
    // const fields=[{cost:Cart.price,product_name:"Powerfull Washing Machine lg" };

    // useEffect(() => {     getGroupItems();}, []);

    // const getGroupItems = () => {
    //     axios.get(`${urlCart}`)
    //     .then((response) => {
    //        const allItems =  response.data;
    //        setCart(allItems);
    //     })
    //     .catch(error => console.log(`Error: ${error}`));
    //  };
    
     
     const update=(val1)=>
     {
        // this.setState({increment:val1});
        const obj = Cart;
        obj.price= val1;
        setCart(obj);
     };
    const handleChange = (event) =>{
        const obj = Cart;
        obj.address = event.target.value;
        setCart(obj);
     }
     const handleSubmit = (event) => {
         const obj = Cart;
         obj.newadress = event.target.value;
        setCart(obj);
     }
    //  const update=(val1)=>{
    //     // this.setState({increment:val1});
    //     const obj = state;
    //     obj.price=val1;
    //      setState(obj);
    //  }
    // const handleChange = (event) =>{
    //     const obj = state;
    //     obj.address=event.target.value;
    //      setState(obj);
    //  }
    //  const handleSubmit =(event) =>{
    //     const obj = state;
    //     obj.newaddress=state.address;
    //      setState(obj);
    //     setState({newadress:state.address})
//}
        
        return (
            <div>
              {console.log("in cart")}
              {console.log(props)}
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
                                <span >{Cart.newadress} </span>
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
                    { 
                        Cart.map(item=> {
                            return(
                                <div>
                                    <Checkout_prod val={item} val3={update} />
                                    </div>
                            )
                        })
                        
                    }
                </div>
                        <Checkout_price  val5={Cart}/>
                        
            </div>
            </div>
            
        );
    }
export default Cart;