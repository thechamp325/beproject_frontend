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
const [groupname,setgroupname] = useState();
const [prodname,setprodname] = useState();
const [id,setid] = useState();


const handleChangegroup = (event) => {
   setgroupname(event.target.value)
}

const handleChangeprod = (event) => {
setprodname(event.target.value)
}

const handleChangeid = (event) => {
setid(event.target.value)
}
const handleSubmit = (event) => {
    
    }

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
            <div class="m-3">
                <div class="pt-3 pb-3" style={{fontSize:"20px"}}> ADD GROUP</div>
            
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
                        <label>
                        <input type="text" class="form-control" placeholder="GroupName" name="groupname" value={groupname} onChange={(e) => {
                         handleChangegroup(e) }} />
                        </label>
                    </div>

                    <div class="form-group col-md-3">
                        <input type="submit"class="btn btn-primary" value="AddGroup" />
                    </div>
              </div>
        </form>
        </div>
        </div>
    )
}
export default ProdList;