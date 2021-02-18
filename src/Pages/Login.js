import React from 'react';
import { Switch,Route } from 'react-router-dom';
import SignIn from '../Components/SignIn'
import SignupForm from '../Components/SignupForm'
import Account from '../Components/Account'
import Home from './Home'
import Inventory from '../Components/Inventory'




const Login = () => {
    return(
        <div>
            <Switch>
                <Route exact path ="/" component = {SignIn}></Route>
                <Route  path="/signup" component={SignupForm}></Route>
                <Route  path="/account" component={Account}></Route>
                <Route  path="/home" component={Home}></Route>
                <Route  path="/inventory" component={Inventory}></Route>

            </Switch>
        </div>
    )
}
export default Login;