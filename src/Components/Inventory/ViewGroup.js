import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import InventoryNavbar from './InventoryNavbar';

const ViewGroup = (props) => {
    const urlgetGroupItems= "http://localhost:5000/inventory/getGroupItems/"+props.location.state.groupname;

    const [getItems,setItems]=useState([]);
    useEffect(() => {     getGroupItems();}, []);

    const getGroupItems = () => {
        axios.get(`${urlgetGroupItems}`)
        .then((response) => {
           const allItems =  response.data;
           setItems(allItems);
           console.log(getItems);
        })
        .catch(error => console.log(`Error: ${error}`));
     }

    const GroupName= props.location.state.groupname;

    const [getaddItems,setaddItems] = useState();
    const [prodname,setprodname] = useState();
    const [id,setid] = useState();
    const [getItem,setItem] = useState([]);
    const [getProductName, setProductName] = useState('');
    // const [getProductId, setProductId] = useState('');

    const handleChangeprod = (event) => {
    setprodname(event.target.value) 
    }

    const handleChangeid = (event) => {
    setid(event.target.value)
    }
    const handlechangecheck=(event,name)=>{
        //  console.log(name);
        const newList = getItem.concat({ name :name});
        setItem(newList);
        // setProductId('');
        setProductName('');
    }
    const handleAdd =(e) => {
        e.preventDefault();   
        
        
    
      }
    
const handleSubmit = (e) => {
    const item = {
        name: prodname,
        id: id
    }
    const uds = {
        name: GroupName,
        items: item
    }
    // const data = {
    //     uds:uds
    // }
    console.log(uds);

    e.preventDefault() ;
    
    const submitdata = {
        data: uds
    };
    console.log(uds);
    
    
    axios.post('http://localhost:5000/inventory/addItemstoGroups',submitdata)
    .then(response => {
            console.log(response)
            setprodname('');
            setid('');        
        })
    .catch(error => { console.log(error)})
    }
    return(
        <div>
            {console.log(GroupName)}
            <div>
                <InventoryNavbar/>
            </div>
            <div className="col-12 col-md-8">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    {getItems.map((items,index)=>{
                        index=index+1;
                        
                        return (
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{items[0].productName}</td>
                                <td>{items[0].quantity}</td>
                                <td>{items[0].price}</td>
                                <td>
                                    <input type="checkbox" onChange={(e) => {handlechangecheck(e,items.name) }} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
                </div>
                <div class="ml-3">
                <button type="button" class="btn btn-primary" onClick={handleAdd}>Edit Items</button>
                </div>
                <div class="m-3">
                <div class="pt-3 pb-3" style={{fontSize:"20px"}}> ADD ITEMS</div>
            
            <form onSubmit={handleSubmit}>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label>
                        <input type="text" class="form-control" placeholder="Product" name="prod" value={prodname} onChange={(e) => {
                        handleChangeprod(e) }} />
                        </label>
                    </div>
                
                    <div class="form-group col-md-3">
                        <label>
                        <input type="text" class="form-control" placeholder="ProductId" name="id" value={id} onChange={(e) => {
                         handleChangeid(e) }} />
                        </label>
                    </div>
                    
                    <div class="form-group col-md-3">
                        <input type="submit"class="btn btn-primary" value="AddItems" />
                    </div>
              </div>
        </form>
        </div>

        </div>
    )
}
export default ViewGroup;