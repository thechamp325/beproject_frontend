import React, { Component } from 'react'
import '../../Resources/css/navbar.css'
import {Link} from 'react-router-dom'
 class FinanceNavbar extends Component {
    render() {
        return (
           <div>
              <div class="topnav">

                    <Link to="/home">Home</Link>
                    <Link to="/chart">Analysis</Link>
                    <Link to="/finance">TradeBook</Link>
                    <Link to="/addPurchases">Add Purchases</Link>


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
}
export default FinanceNavbar;