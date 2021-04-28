import React from 'react';
import { Switch,Route } from 'react-router-dom';
import SignIn from '../Components/SignIn';
import SignupForm from '../Components/SignupForm';
import Account from '../Components/Account';
import Home from './Home';
import OnlineShop from './OnlineShop';

import Inventory from '../Components/Inventory/Inventory';
import Finance from '../Components/Finance';

import GenerateBill from '../Components/GenerateBill/GenerateBill';
import OrderManagement from '../Components/Inventory/OrderManagement';
import ProdList from '../Components/Inventory/ProdList';
import ViewGroup from '../Components/Inventory/ViewGroup';







const Login = () => {
    return(
        <div>
            <Switch>
                <Route exact path ="/" component = {SignIn}></Route>
                <Route  path="/signup" component={SignupForm}></Route>
                <Route  path="/account" component={Account}></Route>
                <Route  path="/home" component={Home}></Route>
                <Route  path="/inventory" component={Inventory}></Route>
                <Route  path="/finance" component={Finance}></Route>
                <Route  path="/generateBill" component={GenerateBill}></Route>
                <Route  path="/onlineShop" component={OnlineShop}></Route>
                <Route  path="/ordermanagement" component={OrderManagement}></Route>
                <Route  path="/prodlist" component={ProdList}></Route>
                <Route  path="/viewgroup" component={ViewGroup}></Route>

            </Switch>
        </div>
    )
}
export default Login;