import React,{ useCallback, useEffect, useState } from 'react'
import {Link,Redirect} from 'react-router-dom'
import { useHistory } from "react-router-dom";

import '../Resources/vendor/bootstrap/css/bootstrap.min.css'
import '../Resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../Resources/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import '../Resources/vendor/animate/animate.css'
import '../Resources/vendor/css-hamburgers/hamburgers.min.css'
import '../Resources/vendor/animsition/css/animsition.min.css'
import '../Resources/vendor/select2/select2.min.css'
import '../Resources/vendor/daterangepicker/daterangepicker.css'
import '../Resources/css/util.css'
import '../Resources/css/main.css'
import axios from 'axios';

const SignIn = () => {
    const [getAadhar,setAadhar] = useState();
    const [getPassword,setPassword] = useState();
    const [getData,setData] = useState([]);

    const [getAuth,setAuth] = useState(false)
    const history = useHistory();



    const aadharHandler = (event) =>{
        setAadhar(event.target.value);
    }
    const passwordHandler = (event) =>{
        setPassword(event.target.value);
    }
    const submitHandler = async (e) =>{
        const obj = {
            aadhar: getAadhar,
            password: getPassword
        };
        console.log(obj);
        await axios.post('http://localhost:5000/shopkeeperData/login',obj)
        .then(response => {
            //  setData(response.data[0]);
            //  console.log(getData);

             setAadhar('');
             setPassword('');
             if(response.data[0].aadharid == Number(getAadhar))
             {
                 console.log("logged in");
                 console.log(response.data[0]);
                 history.push({
                     pathname: '/account',
                     state: response.data[0]
                 });
             }
            })
        .catch(error => { console.log(error)});
        setAuth(true);
        // history.push({
        //                  pathname: '/account',
        //                  state: Number(getAadhar)
        //              });
        console.log("logged in");
        
       
       
       
    
    }
    const verifyLogin = () => {
        if(getAuth===true){
            console.log(getAuth);
            return <Link to={{
                pathname: '/account',
                state: { aadharid: getAadhar}
            }}/>
        }
    }
    return(
       
        <div>
        <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                <form className="login100-form validate-form" >
                    <span className="login100-form-title p-b-33">
                        Shopkeeper SignIn
                    </span>


                   <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                        <input className="input100" type="text" name="aadhar" onChange={aadharHandler} value={getAadhar} placeholder="AdhaarID"></input>
                        <span className="focus-input100-1"></span>
                        <span className="focus-input100-2"></span>
                    </div><br/>

                   <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                        <input className="input100" type="password" name="password"  onChange={passwordHandler} value={getPassword} placeholder="Password"></input>
                        <span className="focus-input100-1"></span>
                        <span className="focus-input100-2"></span>
                    </div>

                    <div className="container-login100-form-btn m-t-20">
                        <button type="button" className="btn btn-primary" onClick={submitHandler}>
                            Sign In
                        </button>
                    </div>

                    <div className="container-login100-form-btn m-t-20">
                        <Link to='/signup'> New Here? Let's Sign Up </Link>
                        &emsp;&emsp;
                        <Link to='/signinCustomer'> Sign In as Cutomer Instead</Link>
                    </div>

                    <div className="text-center">
                    </div>
                </form>
            </div>
        </div>
    </div></div>
        );
}
export default SignIn;