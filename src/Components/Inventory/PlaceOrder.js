import React, { useState } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'


 const PlaceOrder = (props) => {

    const [getVendors, setVendors] = useState([{
        ProductID:'1',
        name:"Mobile",
        Vendors:[
            {
                name:"Ganesh",
                mobile:"1234567890",
                quantity:"100",
                price:"2000"
            },
            {
                name:"Patil",
                mobile:"1234567890",
                quantity:"100",
                price:"2200"
            }
        ]
    },
    {
        ProductID:'2',
        name:"Shirt",
        Vendors:[
            {
                name:"Ganesh",
                mobile:"1234567890",
                quantity:"100",
                price:"2000"
            },
            {
                name:"Patil",
                mobile:"1234567890",
                quantity:"100",
                price:"2200"
            }
        ]
    }
    ]);
    const [getProduct,setProduct] = useState([{
        id:1,
        name:"shirt",
    },
    {
        id:2,
        name:"mobile"
    }
]);
    const [getSearchProduct,setSearchProduct] = useState();


    const handleChangeProduct = (event) =>{
        setSearchProduct(event.target.value);
        // setProduct('');
    }
    const handleChangeName = (event) =>{
        console.log(event.target.value);
        setVendors(event.target.value);
        
    }


     return(
        <div>
            <form>
                <div className="col-12 col-md-5">
                    <label for="MobileNo">Search Vendor for</label>
                        <select class="form-control" value={getSearchProduct} onChange={handleChangeProduct}>
                            {getProduct.map((product)=>{
                                return <option>{product.name}</option>
                            })}
                        </select>
                </div>
                <div className="col-12 col-md-8">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {getVendors[0].Vendors.map((vendor,index)=>{
                        index=index+1;
                        return (
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{vendor.name}</td>
                                <td>{vendor.quantity}</td>
                                <td>{vendor.price}</td>
                                <td>
                                    <input type="Number"/>
                                </td>
                                <td>
                                    <input type="checkbox" />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
                </div>

                
            </form>
         </div>
     )
 }
 export default PlaceOrder;