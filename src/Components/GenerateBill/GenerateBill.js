import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import Product from './Products';
import PrimarySearchAppBar from '../PrimarySearchAppBar';
import '../../Resources/vendor/bootstrap/css/bootstrap.min.css'
import '../../Resources/css/homebackgrd.css'
import PaymentComponent from './PaymentComponent';
import GenerateBill_payment from './GenerateBill_payment.css';
import Image2 from "../../Resources/images/payments/bhim.jpg";
import Image3 from "../../Resources/images/payments/bhim.jpg";
import Image1 from "../../Resources/images/payments/gpay.jpeg";
import Gpay from './Gpay';

const GenerateBill = (props) => {
    const [getItems,setItems] = useState([]);
    const [getProductName, setProductName] = useState('');
    const [getProductId, setProductId] = useState('');
    const [getQuantity, setQuantity] = useState('');
    const [getPrice, setPrice] = useState('');
    const [getFinalPrice, setFinalPrice] = useState('0');
    const pay_images = [{imgsrc : Image1
    },
    { imgsrc:Image2
      
    }
  ]


  const handleChangeName = (event) => {
    setProductName(event.target.value);     
  }
  const handleChangeId = (event) => {
    setProductId(event.target.value);      
  }
  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);   
  }
  const handleChangePrice = (event) => {
    setPrice(event.target.value);      
  }
  const handleAdd =(e) => {
    e.preventDefault();
    const newList = getItems.concat({date:"2021-04-26", txid:"12",productName :getProductName,productId: getProductId, quantity:getQuantity , price:getPrice});
 
    setItems(newList);
    setProductId('');
    setProductName('');
    setQuantity('');
    setPrice('');
    setFinalPrice(Number(getPrice)*Number(getQuantity) + Number(getFinalPrice));

  }

  const gpayhandler = (e) => {
    console.log("gpay clicked");
  }

  const renderTableHeader=()=> {
    let header =['ID','Name','Quantity','Price'];
    return header.map((key) => {
       return <th style={{paddingTop:"12px",paddingBottom:"12px",textAlign:"center",backgroundColor:"#4CAF50",color:"white"}} >{key}</th>
    })
 };
const renderTableData = () => {
    return getItems.map((m, index) => {
       const { productId,productName,quantity,price } = m //destructuring
       return (
           
          <tr key={productId} style={{border:"1px solid #ddd",padding:"8px"}}>
             <td>{productId}</td>
             <td>{productName}</td>
             <td>{quantity}</td>
             <td>{price}</td>
          </tr>
       )
    })
 };


 const submitHandler = (e) => {
  e.preventDefault();

  const data = {
    uds: getItems
  };
  const submitdata = {
    data: data
  };

  axios.post('http://localhost:5000/finance/postBillSales', submitdata)
    .then(response => {
      console.log(response);

      // Check for custom message (like sold out)
      if (response.data?.message) {
        alert(response.data.message);
      } else {
        alert('Bill generated successfully!');
      }

      setItems([]);
      setFinalPrice(0);
    })
    .catch(error => {
      if (error.response?.status === 400) {
        const errorMsg = error.response.data?.message || 'Insufficient stock for one or more products.';
        alert(`Error: ${errorMsg}`);
      } else {
        alert('Something went wrong while processing the bill.');
      }
      console.error(error);
    });
}





    return(
      <div>

        <PrimarySearchAppBar data ={props.location.state} />
        <br/>

        <div className= "center">

        <h4 style={{float:'center'}}>Generate Bill</h4>

      <div>
      <form class="form-inline" role="form">
        <input type="text" value={getProductId} placeholder="ProductID" className="form-control" onChange={handleChangeId} />
        <input type="text" value={getProductName} placeholder="ProductName" className="form-control" onChange={handleChangeName} />
        <input type="text" value={getQuantity} placeholder="Quantity" className="form-control" onChange={handleChangeQuantity} />
        <input type="text" value={getPrice} placeholder="Price" className="form-control" onChange={handleChangePrice} />


        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
        </form>
      </div>
      <div>
            <table id='students'style={{textAlign:"center",fontFamily:"Arial,Helvetica,sans-serif,sans-serif",borderCollapse:"collapse",border:"3px solid #ddd",width:"100%"}}>
               <tbody>
                  <tr>{renderTableHeader()}</tr>
                  {renderTableData()}
               </tbody>
            </table>
         </div>
         <h4 style={{float:'right'}}>Final Price = {getFinalPrice} </h4>
         <button type="button" className="btn btn-primary" onClick={submitHandler}>
          Paid
        </button>
          <div className="card-footer">
            {/* <a href="generateBill/checkout" className="btn btn-primary">BUY</a> */}
          </div>
    
    {/* <div>
      <button><img src={`${pay_images[0]}`} alt="my image" onClick={gpayhandler} /></button>
    </div> */}
    {/* <div>
    <div className="row text-center">
                    {this.state.pay_images.map((payments)=>{
                      console.log(payments);
                        // return <PaymentComponent productinfo={payments} />
                        return <div>hello  </div>
                    })} 
    </div>
    </div> */}
    {/* <div>
    <button><img src={`${pay_images[0]}`} alt="my image" onClick={gpayhandler} /></button>
    </div> */}
    <br/>
    <button><img src={`${pay_images[0].imgsrc}`} alt="Forest" onClick={gpayhandler} style={{width: "50%"}}/></button>
</div>
    </div>
    );
}
export default GenerateBill;