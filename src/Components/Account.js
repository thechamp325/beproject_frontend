import React, { useCallback,useEffect,useState } from 'react'
import Navbar from './Navbar'
// import Footer from './Footer'
import Home from'../Pages/Home'
import {Switch,Route} from 'react-router-dom'
import PrimarySearchAppBar from './PrimarySearchAppBar';

const Account = (props) => {
    const [getSearchVal,setSearchVal] = useState('');
    const searchfunc = () => {
        return(
            <div>
                <input type="text"  value={getSearchVal} placeholder="Search.." onChange={searchHandler}/>
            </div>
        )
    }
    const searchHandler = (val) => {
        setSearchVal(val);
        console.log(getSearchVal);
    }
    return(
        <div>
            <PrimarySearchAppBar  />
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