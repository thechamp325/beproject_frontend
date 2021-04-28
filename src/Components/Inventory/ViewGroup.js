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
                                    <input type="checkbox"  />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
                </div>
                <div>
                <button type="button" class="btn btn-primary">Edit Items</button>
                <button type="button" class="btn btn-primary">Add Items</button>
                </div>

        </div>
    )
}
export default ViewGroup;