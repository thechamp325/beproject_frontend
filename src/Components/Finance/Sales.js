import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';

const Sales = (props) => {
   const urlgetSales= "http://localhost:5000/finance/getSales";
    const [getTx,setTx] = useState([]);
useEffect(() => {     getSalesData();}, []);



const getSalesData = () => {
   axios.get(`${urlgetSales}`)
   .then((response) => {
      const allSalesData =  response.data;
      setTx(allSalesData);
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
            <h1 id='title' style={{textAlign:"center",fontSize:"25px"}} >Sales</h1>
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
export default Sales;