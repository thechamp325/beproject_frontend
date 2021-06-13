import React, { Component } from 'react'
import '../Resources/css/navbar.css'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

 const OnlineShopNavbar = (props) => {
  const history = useHistory();

        return (
           <div>
              <div class="topnav">

                    <a onClick={() => history.push({
                     pathname: '/Home',
                     state: props.data
                  })}>Home</a>

                  <a onClick={() => history.push({
                     pathname: '/Cart',
                     state: props.data
                  })}>Cart</a>
                  <a href = "localhost:8080">Search Shops</a>

                  {/* <a onClick={() =>{
                     console.log("doing something");
                     const win = window.open("localhost:8080", "_blank");
                     win.focus();
                  }}>Search Shops</a> */}
               
                    {/* <Link to="/inventory">Inventory</Link>
                    <Link to="/finance">Finance</Link>
                    <Link to="/generateBill">GenerateBill</Link>
                    <Link to="/bookkeeping">Bookkeeping</Link> */}



                    
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
export default OnlineShopNavbar;