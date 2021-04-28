import React, { useCallback, useEffect, useState } from "react";
import InventoryNavbar from './InventoryNavbar';

const ProdList = (props) =>{

    const [getProductData,setProductData] = useState([
        {
            name:"mobile",
            quantity:100,
            id:"1",
            expiry:"2021-02-02"
        },
        {
            name:"shirt",
            quantity:100,
            id:"2",
            expiry:"2021-02-02"
        }
]);

    return(
        <div>
            <InventoryNavbar/>
            <div>
            <div className="col-12 col-md-8">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        {/* <th scope="col">Expiry</th> */}
                        </tr>
                    </thead>
                    <tbody>
                    {getProductData.map((productdata,index)=>{
                        index=index+1;
                        return (
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{productdata.name}</td>
                                <td>{productdata.quantity}</td>
                                {/* <td>{productdata.expiry}</td> */}
                                <td>
                                <a href={`viewgroup`} class="btn btn-primary" role="button" aria-pressed="true">View Group</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}
export default ProdList;