import React, { useCallback, useEffect, useState } from "react";
import BookkeepingNavbar from './BookkeepingNavbar';
import axios from 'axios';


const Bookkeeplist = (props) => {
    // const [getItems,setItems]=useState('');
//shopid is param
    const urlCredit= "http://localhost:5000/bookkeeping/getinfo/1";

    const [Creditcust,setCreditcust]=useState([]);
    useEffect(() => {     getGroupItems();}, []);

    const getGroupItems = () => {
        axios.get(`${urlCredit}`)
        .then((response) => {
           const allItems =  response.data;
           setCreditcust(allItems);
        })
        .catch(error => console.log(`Error: ${error}`));
     }

    // const [prodname,setprodname] = useState();
    // const [id,setid] = useState();
    // const [getItem,setItem] = useState([]);
    // const [getCustomerName, setCustomerName] = useState('');
    // const [getProductId, setProductId] = useState('');

    // const handleChangeprod = (event) => {
    // setprodname(event.target.value)
    // }

    // const handleChangeid = (event) => {
    // setid(event.target.value)
    // }
    const handlechangecheck=(event,name)=>{
        //  console.log(name);
        const newList = Creditcust.concat({ name :name});
        setCreditcust(newList);
        // setProductId('');
        // setCustomerName('');
    }
    const handleAdd =(e) => {
        e.preventDefault();   
        
        
    
      }
    // const handleSubmit = (event) => {
        
    //     }
    return(
        <div>
            <div>
                <BookkeepingNavbar data ={props.location.state} />
            </div>
            <div class={"pl-5"} style={{fontSize:"50px"}}>
                Credit Book
            </div>
            <div>
                {/* <InventoryNavbar/> */}
            </div>
            <div className="m-3  col-md-8">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Credit Amount</th>
                        <th scope="col">Paid Amount</th>
                        <th scope="col">Last Payment Date</th>
                        <th scope="col">Remaining Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Creditcust.map((items,index)=>{
                        index=index+1;
                        
                        return (
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{items.CustomerName}</td>
                                <td>{items.Mobile}</td>
                                <td>{items.CreditAmount}</td>
                                <td>{items.AmountPaid}</td>
                                <td>{items.PaymentDate}</td>
                                <td>{items.RemainingAmount}</td>
                                <td>
                                    <input type="checkbox" onChange={(e) => {handlechangecheck(e,items.name) }} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
                </div>
                <div class="center m-3">
                <button type="button" class="btn btn-primary " onClick={handleAdd}>Remove Entries</button>
                </div>
                <div class="m-3">
                {/* <div class="pt-3 pb-3" style={{fontSize:"20px"}}> ADD ITEMS</div> */}
            
            
        </div>

        </div>
    )
}
export default Bookkeeplist;