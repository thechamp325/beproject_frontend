import React, { useCallback, useEffect, useState } from "react";
import InventoryNavbar from './InventoryNavbar';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";import ViewGroup from './ViewGroup';

const ProdList = (props) =>{

    const [getProductData,setProductData] = useState([]);
const urlgetPurchases= "http://localhost:5000/inventory/allGroups/all";

useEffect(() => {     getPurchasesData();}, []);

const getPurchasesData = () => {
    axios.get(`${urlgetPurchases}`)
    .then((response) => {
       const allPurchasesData =  response.data;
       setProductData(allPurchasesData);
    })
    .catch(error => console.log(`Error: ${error}`));
 }

const [groupname,setgroupname] = useState();
const [prodname,setprodname] = useState();
const [id,setid] = useState();

const history = useHistory();

const handleClick = (e) =>{
    history.push({
        pathname: '/viewgroup',
        search: '?query=abc',
        state: { detail: 'some_value' }
    });
}

const handleChangegroup = (event) => {
   setgroupname(event.target.value)
}

const handleChangeprod = (event) => {
setprodname(event.target.value)
}

const handleChangeid = (event) => {
setid(event.target.value)
}
const handleSubmit = (e) => {
    const item = {
        name: prodname,
        id: id
    }
    const uds = [{
        name: groupname,
        items:[item]
    }]
    const data = {
        uds:uds
    }
    console.log(data);

    e.preventDefault() ;
 
    const submitdata = {
        data: data
    };
    console.log(data);
   
  
    axios.post('http://localhost:5000/inventory/addGroups',submitdata)
    .then(response => {
         console.log(response)
         setgroupname('');
         setprodname('');
         setid('');        
        })
    .catch(error => { console.log(error)})
    }
  

    return(
        <div>
            <InventoryNavbar data = {props.location.state}/>
            <div>
            <div className="col-12 col-md-8">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Count</th>
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
                                <td>{productdata.count}</td>
                                {/* <td>{productdata.expiry}</td> */}
                                <td>
                                <Link to={{
      pathname: '/viewgroup',
      search: '?query=abc',
      state: { groupname: productdata.name }
    }}> View Group </Link>
                                {/* <button class="btn btn-primary" type="button" onClick={handleClick(productdata.name)}>View Group</button> */}
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