import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';


const Purchases = (props) => {
   
   const urlgetPurchases= "http://localhost:5000/finance/getPurchases";
    const [getTx,setTx] = useState([]);
useEffect(() => {     getPurchasesData();}, []);


const getPurchasesData = () => {
   axios.get(`${urlgetPurchases}`)
   .then((response) => {
      const allPurchasesData =  response.data;
      setTx(allPurchasesData);
   })
   .catch(error => console.log(`Error: ${error}`));
}

const renderTableHeader=()=> {
    let header =['ID','Date','item','productid','quantity','Price'];
    return header.map((key) => {
       return <th style={{paddingTop:"12px",paddingBottom:"12px",textAlign:"center",backgroundColor:"#4CAF50",color:"white"}} >{key}</th>
    })
 };
const renderTableData = () => {
    return getTx.map((m, index) => {
       const { _id,date,productName,productId,quantity,price } = m //destructuring
       return (
           
          <tr key={_id} style={{border:"1px solid #ddd",padding:"8px"}}>
               <td>{_id}</td>
             <td>{date}</td>
             <td>{productName}</td>
             <td>{productId}</td>
             <td>{quantity}</td>

             <td>{price}</td>

          </tr>
       )
    })
 };



    return(
        <div>
            <div>
            <h1 id='title' style={{textAlign:"center",fontSize:"25px"}} >Purchases</h1>
            </div>
            <div>
            <table id='students'style={{textAlign:"center",fontFamily:"Arial,Helvetica,sans-serif,sans-serif",borderCollapse:"collapse",border:"3px solid #ddd",width:"100%"}}>
               <tbody>
                  <tr>{renderTableHeader()}</tr>
                  {renderTableData()}
               </tbody>
            </table>
            </div>
        </div>
    );
}
export default Purchases;