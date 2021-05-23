import React from 'react';
import { Switch,Route } from 'react-router-dom';
import SignIn from '../Components/SignIn';
import SignupForm from '../Components/SignupForm';
import Account from '../Components/Account';
import Home from './Home';
import OnlineShop from './OnlineShop';
import Buy from '../Components/BUY/buy';
import Checkout from '../Components/checkout/Checkout';
import Inventory from '../Components/Inventory/Inventory';
import Finance from '../Components/Finance/Finance';
import SigninCustomer from '../Components/signinCustomer';
import SignupCustomer from '../Components/SignupCustomer';
import Chart from '../Components/Finance/charts';
import GenerateBill from '../Components/GenerateBill/GenerateBill';
import OrderManagement from '../Components/Inventory/OrderManagement';
import ProdList from '../Components/Inventory/ProdList';
import ProdChart from '../Components/Inventory/productChart';
import ViewGroup from '../Components/Inventory/ViewGroup';
import AddPurchases from '../Components/Finance/AddPurchases';
import Bookkeeping from '../Components/bookkeeping';
import Bookkeeplist from '../Components/bookkeeplist';







const Login = () => {
    return(
        <div>
            <Switch>
                <Route exact path ="/" component = {SignIn}></Route>
                <Route exact path ="/chart" component = {Chart}></Route>
                <Route exact path ="/productchart" component = {ProdChart}></Route>
                <Route exact path ="/bookkeeping" component = {Bookkeeping}></Route>
                <Route exact path ="/bookkeepinglist" component = {Bookkeeplist}></Route>
                <Route exact path ="/signincustomer" component = {SigninCustomer}></Route>
                <Route exact path ="/signupcustomer" component = {SignupCustomer}></Route>
                <Route  path="/signup" component={SignupForm}></Route>
                <Route  path="/account" component={Account}></Route>
                <Route  path="/buy" component={Buy}></Route>
                <Route  path="/checkout" component={Checkout}></Route>
                <Route  path="/home" component={Home}></Route>
                <Route  path="/inventory" component={Inventory}></Route>
                <Route  path="/finance" component={Finance}></Route>
                <Route  path="/generateBill" component={GenerateBill}></Route>
                <Route  path="/onlineShop" component={OnlineShop}></Route>
                <Route  path="/ordermanagement" component={OrderManagement}></Route>
                <Route  path="/prodlist" component={ProdList}></Route>
                <Route  path="/viewgroup" component={ViewGroup}></Route>
                <Route  path="/addPurchases" component={AddPurchases}></Route>


            </Switch>
        </div>
    )
}
export default Login;