import React, { useCallback, useEffect, useState } from "react";
import Product from './Products';
import PrimarySearchAppBar from '../PrimarySearchAppBar';
import '../../Resources/vendor/bootstrap/css/bootstrap.min.css'
import '../../Resources/css/homebackgrd.css'
import PaymentComponent from './PaymentComponent';
import GenerateBill_payment from './GenerateBill_payment.css';
import Image2 from "../../Resources/images/payments/bhim.jpg";
import Image3 from "../../Resources/images/payments/bhim.jpg";
import Image1 from "../../Resources/images/payments/gpay.jpeg";


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
    const newList = getItems.concat({ name :getProductName,id: getProductId, quantity:getQuantity , price:getPrice});
 
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
       const { id,name,quantity,price } = m //destructuring
       return (
           
          <tr key={id} style={{border:"1px solid #ddd",padding:"8px"}}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{quantity}</td>
             <td>{price}</td>
          </tr>
       )
    })
 };




    return(
      <div>

        <PrimarySearchAppBar />
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