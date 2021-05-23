import React, { useState } from 'react';
// import InventoryNavbar from './InventoryNavbar';

const Bookkeeplist = (props) => {
    const [getItems,setItems]=useState([
        {
            name:"atharva",
            contact:"9863521475",
            credit:1000,
            paid:100,
            remaining:900
            
        },
        {
            name:"rahul",
            contact:"9685321475",
            credit:1000,
            paid:100,
            remaining:900

        }
    ])

    
    // const [prodname,setprodname] = useState();
    // const [id,setid] = useState();
    const [getItem,setItem] = useState([]);
    const [getCustomerName, setCustomerName] = useState('');
    // const [getProductId, setProductId] = useState('');

    // const handleChangeprod = (event) => {
    // setprodname(event.target.value)
    // }

    // const handleChangeid = (event) => {
    // setid(event.target.value)
    // }
    const handlechangecheck=(event,name)=>{
        //  console.log(name);
        const newList = getItem.concat({ name :name});
        setItem(newList);
        // setProductId('');
        setCustomerName('');
    }
    const handleAdd =(e) => {
        e.preventDefault();   
        
        
    
      }
    // const handleSubmit = (event) => {
        
    //     }
    return(
        <div>
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
                        <th scope="col">Remaining Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {getItems.map((items,index)=>{
                        index=index+1;
                        
                        return (
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{items.name}</td>
                                <td>{items.contact}</td>
                                <td>{items.credit}</td>
                                <td>{items.paid}</td>
                                <td>{items.remaining}</td>
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