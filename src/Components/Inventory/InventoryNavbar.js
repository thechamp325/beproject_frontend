import React, { Component } from 'react'
import '../../Resources/css/navbar.css'
import { useHistory } from "react-router-dom";

import {Link} from 'react-router-dom'
 const InventoryNavbar = (props) =>{
  const history = useHistory();

        return (
           <div>
              <div class="topnav">

              <a onClick={() => history.push({
                     pathname: '/account',
                     state: props.data
                  })}>Account</a>    

                <a onClick={() => history.push({
                     pathname: '/ordermanagement',
                     state: props.data
                  })}>Manage Orders</a>

                  <a onClick={() => history.push({
                     pathname: '/inventory',
                     state: props.data
                  })}>Inventory</a>  

                  <a onClick={() => history.push({
                     pathname: '/productchart',
                     state: props.data
                  })}>Product Analysis</a>  

                    {/* <Link to="/productchart">Product Analysis</Link> */}
                    <a onClick={() => history.push({
                     pathname: '/prodlist',
                     state: props.data
                  })}>Products</a>  
                    {/* <Link to="/prodlist">Products</Link> */}

                    {/* <Link to="/salstoes">Sales</Link>
                    <Link to="/purchases">Purchases</Link> */}



                    
  <div class="search-container">
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</div> 
           </div>
        )
}
export default InventoryNavbar;