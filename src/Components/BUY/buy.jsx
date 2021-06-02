import React, { useCallback, useEffect, useState } from "react";
import './buy.css';
import axios from 'axios';
import OnlineShopNavbar from '../../Pages/OnlineShopNavbar';
// import veg from '../../media/image.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Buy = (props) => {
  // const fields={cost:props.location.state.productid,product_name:"Powerfull Washing Machine lg" };
  // constructor(props) {
  //   super(props);
    
  // }
  const ProductData= props.location.state;

  const SubmitHandlerAddtoCart = (props) => {

  const submitdata = {
      data: {
        name:"atharva127",
        items:ProductData
      }
      
  };
  axios.post('http://localhost:5000/customer/postinfoCart',submitdata)
  .then(response => {
       console.log(response)
      
      })
  .catch(error => { console.log(error)})

  }

  
  
  // const [groupname,setgroupname] = useState();
  // const [prodname,setprodname] = useState();
  // const [id,setid] = useState();

    return (
      <div>
        {console.log(props.location.state)}
        <div>
          <OnlineShopNavbar/>
        </div>
        <div class="row rowpadding ">

        <div  class="col-md-6" >
          <div className="d-flex justify-content-center align-items-center" style={{padding: '30px 25px'}}>
            <img className="product-image" src={ProductData.productImages}  />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div class="pr-3"><button className="btn btn-primary" onClick={SubmitHandlerAddtoCart}>Add To Cart</button></div>
              {/* <a href='/checkout' className="btn btn-primary a-button-primary ml-5">Buy</a> */}
              <Link class="btn btn-primary" to={{ pathname: "/checkout", state: ProductData }}>BUY</Link>
            </div>
        </div>
        <div  class="col-md-6">
            <span className="product-font">{ProductData.productName}</span> 
            <div className="d-flex align-items-center">
              <span style={{fontSize:'20px'}}>Price:</span> <span className="price ml-2">₹ {ProductData.price}</span>
            </div>
            <div>inclusive all taxes.</div>
            <div style={{marginTop:'20px'}}>
              <span className="details-font"> Features </span>
              <table class="table table-borderless">
                <tbody>
 
                  <tr>
                    <th scope="row">size</th>
                    <td>{ProductData.productInfo.size}</td>
                    
                  </tr>
                  <tr>
                    <th scope="row">model</th>
                    <td>iadnkn</td>
                  
                  </tr>
                  <tr>
                    <th scope="row">type</th>
                    <td>plastic</td>
                  
                  </tr>
                  <tr>
                    <th scope="row">Details</th>
                    <td>{ProductData.productInfo.info}</td>
                  
                  </tr>
                  
                </tbody>
              </table>
              <span className="details-font"> About This Item </span>
              <ul class="list-group ">
                <li class="list-group-item disabled">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
            
              </ul>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Buy;
