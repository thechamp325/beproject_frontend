import React, { Component } from 'react'
import '../Resources/css/navbar.css'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'
 const PrimarySearchAppBar = (props) => {
  const history = useHistory();
        return (
           <div>
                       {console.log("Navbar")}
                       {console.log(props.data)}


              <div class="topnav">


                    {/* <Link to="/home">Home</Link> */}
                    <a onClick={() => history.push({
                     pathname: '/account',
                     state: props.data
                  })}>Account</a>

                    {/* <Link to={{
                    pathname: '/account',
                    state: props.data
                    }} >Account</Link> */}

                  <a onClick={() => history.push({
                     pathname: '/inventory',
                     state: props.data
                  })}>Inventory</a>
                    {/* <Link to={{
                    pathname: '/inventory',
                    state: props.data
                    }} >Inventory</Link> */}
                    <a onClick={() => history.push({
                     pathname: '/finance',
                     state: props.data
                  })}>Finance</a>

                    {/* <Link to={{
                    pathname: '/finance',
                    state: props.data
                    }} >Finance</Link> */}
                    <a onClick={() => history.push({
                     pathname: '/generateBill',
                     state: props.data
                  })}>GenerateBill</a>
                    {/* <Link to={{
                    pathname: '/generateBill',
                    state: props.data
                    }} >GenerateBill</Link> */}
                    <a onClick={() => history.push({
                     pathname: '/bookkeeping',
                     state: props.data
                  })}>Bookkeeping</a>
                    {/* <Link to={{
                    pathname: '/bookkeeping',
                    state: props.data
                    }} >Bookkeeping</Link> */}
                    <a onClick={() => history.push({
                     pathname: '/onlineshop',
                     state: props.data
                  })}>OnlineShop</a>
                    {/* <Link to={{
                    pathname: '/onlineshop',
                    state: props.data
                    }} >OnlineShop</Link> */}



                    
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
export default PrimarySearchAppBar;