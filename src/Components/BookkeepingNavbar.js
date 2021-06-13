import React, { Component } from 'react'
import '../Resources/css/navbar.css'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

 const BookkeepingNavbar =(props) => {
  const history = useHistory();

        return (
           <div>
              <div class="topnav">

              <a onClick={() => history.push({
                     pathname: '/account',
                     state: props.data
                  })}>Account</a>
                  <a onClick={() => history.push({
                     pathname: '/bookkeeping',
                     state: props.data
                  })}>Bookkeeping</a>
                  <a onClick={() => history.push({
                     pathname: '/bookkeepinglist',
                     state: props.data
                  })}>Credit Book</a>
                   



                    
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
export default BookkeepingNavbar;