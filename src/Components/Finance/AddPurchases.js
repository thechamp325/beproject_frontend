import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import '../../Resources/vendor/bootstrap/css/bootstrap.min.css'
import '../../Resources/css/homebackgrd.css'
import FinanceNavbar from './FinanceNavbar'


const  AddPurchases= (props) => {
    const [getItems,setItems] = useState([]);
    const [getProductName, setProductName] = useState('');
    const [getProductId, setProductId] = useState('');
    const [getQuantity, setQuantity] = useState('');
    const [getPrice, setPrice] = useState('');
    const [getTxid, setTxid] = useState('');

    const [getFinalPrice, setFinalPrice] = useState('0');
    


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
  const handleChangeTxid = (event) => {
    setTxid(event.target.value);      
    
  }
  const handleAdd =(e) => {
    e.preventDefault();
    const newList = getItems.concat({date:"2021-04-26", txid: getTxid,productName :getProductName,productId: getProductId, quantity:getQuantity , price:getPrice});
 
    setItems(newList);
    setProductId('');
    setProductName('');
    setQuantity('');
    setPrice('');
    setTxid('');

    setFinalPrice(Number(getPrice)*Number(getQuantity) + Number(getFinalPrice));

  }

  const gpayhandler = (e) => {
    console.log("gpay clicked");
  }

  const renderTableHeader=()=> {
    let header =['ProductID','TxID','Name','Quantity','Price'];
    return header.map((key) => {
       return <th style={{paddingTop:"12px",paddingBottom:"12px",textAlign:"center",backgroundColor:"#4CAF50",color:"white"}} >{key}</th>
    })
 };
const renderTableData = () => {
    return getItems.map((m, index) => {
       const { productId,txid,productName,quantity,price } = m //destructuring
       return (
           
          <tr key={productId} style={{border:"1px solid #ddd",padding:"8px"}}>
             <td>{productId}</td>
             <td>{txid}</td>
             <td>{productName}</td>
             <td>{quantity}</td>
             <td>{price}</td>
          </tr>
       )
    })
 };


 const submitHandler =(e) =>{ 
  console.log(getItems);

  e.preventDefault() ;
  const data = {
      uds: getItems
  };
  const submitdata = {
      data: data
  };
  console.log(data);
  setItems([]);

  axios.post('http://localhost:5000/finance/postBillPurchases',submitdata)
  .then(response => {
       console.log(response)
       setItems([]);
      
      })
  .catch(error => { console.log(error)})
    }



    return(
      <div>

        <FinanceNavbar data = {props.location.state} />
        <br/>
        
        <div className= "center">

        <h4 style={{float:'center'}}>ADD BILL</h4>

      <div>
      <form class="form-inline" role="form">
        <input type="text" value={getProductId} placeholder="ProductID" className="form-control" onChange={handleChangeId} />
        <input type="text" value={getTxid} placeholder="Txid" className="form-control" onChange={handleChangeTxid} />

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
          Submit
        </button>
          <div className="card-footer">
            {/* <a href="generateBill/checkout" className="btn btn-primary">BUY</a> */}
          </div>
</div>
    </div>
    );
}
export default AddPurchases;