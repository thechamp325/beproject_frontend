import React, { useCallback, useEffect, useState } from "react";

const Sales = (props) => {
    const [getTx,setTx] = useState([{
      id:"1",
      date:"22-02-2020",
      item:"shirt",
      productid:"1",
      quantity:"10",
      price:"100",
  },
  {
    id:"1",
    date:"22-02-2020",
    item:"shirt",
    productid:"1",
    quantity:"10",
    price:"100",
},
{
 id:"1",
 date:"22-02-2020",
 item:"shirt",
 productid:"1",
 quantity:"10",
 price:"100",
},
{
 id:"1",
 date:"22-02-2020",
 item:"shirt",
 productid:"1",
 quantity:"10",
 price:"100",
},
{
 id:"1",
 date:"22-02-2020",
 item:"shirt",
 productid:"1",
 quantity:"10",
 price:"100",
}]);

  
const renderTableHeader=()=> {
    let header =['ID','Date','item','productid','quantity','Price'];
    return header.map((key) => {
       return <th style={{paddingTop:"12px",paddingBottom:"12px",textAlign:"center",backgroundColor:"#4CAF50",color:"white"}} >{key}</th>
    })
 };
const renderTableData = () => {
    return getTx.map((m, index) => {
       const { id,date,item,productid,quantity,price } = m //destructuring
       return (
           
          <tr key={id} style={{border:"1px solid #ddd",padding:"8px"}}>
             <td>{id}</td>
             <td>{date}</td>
             <td>{item}</td>
             <td>{productid}</td>
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