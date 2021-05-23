import React, { useState } from 'react';
import InventoryNavbar from './InventoryNavbar';

const ViewGroup = (props) => {
    const [getItems,setItems]=useState([
        {
            name:"tshirt",
            id:"1",
            quantity:100,
            price:1000
            
        },
        {
            name:"trousers",
            id:"2",
            quantity:200,
            price:1000

        }
    ])

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
    const handleSubmit = (event) => {
        
        }
    return(
        <div>
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
                                <td>{items.name}</td>
                                <td>{items.quantity}</td>
                                <td>{items.price}</td>
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
                    <div class="form-group-1 col-md-3">
                        <label>
                        <input type="text" class="form-control" placeholder="Product" name="prod" value={prodname} onChange={(e) => {
                        handleChangeprod(e) }} />
                        </label>
                    </div>
                
                    <div class="form-group-1 col-md-3">
                        <label>
                        <input type="text" class="form-control" placeholder="ProductId" name="id" value={id} onChange={(e) => {
                         handleChangeid(e) }} />
                        </label>
                    </div>
                    
                    <div class="form-group-1 col-md-3">
                        <input type="submit"class="btn btn-primary" value="AddItems" />
                    </div>
              </div>
        </form>
        </div>

        </div>
    )
}
export default ViewGroup;