import React, { Component } from 'react'
import '../Resources/css/navbar.css'
import {Link} from 'react-router-dom'
 class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <Link to="/account/home">Home</Link>
                    <Link to="/account/inventory">Inventory</Link>
                    {/* <input type="text" placeholder="Search.." style/> */}
                    {/* <Link to="/account/myfarm">My Farm</Link>
                     <Link to="/account/finance">My Finance</Link> 
                    <Link to="/account/schemes">Govt Schemes</Link>
                    <Link to="/account/simulator">Simulator</Link>
                    <Link to="/account/forecast">Weather Forecast</Link> */}
                    {/* <Link to="/"><button style={{fontSize:"17px",color:"#ffffff",align:"right"}}><i class="fa fa-sign-out"></i></button></Link> */}

                </div>
            </div>
        )
    }
}
export default Navbar;