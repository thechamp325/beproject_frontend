import React, { useCallback,useEffect,useState } from 'react'
import Navbar from './Navbar'
// import Footer from './Footer'
import Home from'../Pages/Home'
import {Switch,Route} from 'react-router-dom'

const Account = (props) => {
    return(
        <div>
            <Navbar/>
            <div>
            <Switch>
                  {/* <Route  exact path={`${this.props.match.path}/`} component={Account}></Route> */}
                  <Route exact path={`${props.match.path}/home`} component={Home}></Route>
                  {/* <Route exact path={`${this.props.match.path}/mandi`} component={mandi}></Route> */}
            </Switch>  
            </div>
        </div>
    );
}
export default Account;