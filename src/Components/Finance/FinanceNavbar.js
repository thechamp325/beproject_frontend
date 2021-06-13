import React, { Component } from 'react'
import '../../Resources/css/navbar.css'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

 const FinanceNavbar = (props) => {
  const history = useHistory();

        return (
           <div>
              <div class="topnav">
              <a onClick={() => history.push({
                     pathname: '/account',
                     state: props.data
                  })}>Account</a>
                  <a onClick={() => history.push({
                     pathname: '/chart',
                     state: props.data
                  })}>Analysis</a>
                  <a onClick={() => history.push({
                     pathname: '/finance',
                     state: props.data
                  })}>TradeBook</a>
                  <a onClick={() => history.push({
                     pathname: '/addPurchases',
                     state: props.data
                  })}>Add Purchases</a>


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
export default FinanceNavbar;