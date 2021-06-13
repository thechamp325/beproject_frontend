import React, { useCallback, useEffect, useState } from "react";
import '../Resources/css/farmTiles.css'
import ShopTile from './ShopTile'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Switch,Route} from 'react-router-dom'
import PrimarySearchAppBar from './PrimarySearchAppBar';
import AddShop from './AddShop'
import ShopkeeperProfile from './ShopkeeperProfile';
import { useHistory } from "react-router-dom";

const Account = (props)=> {

   
    
        const [shopProfile,setShopProfile] = useState([]);

        const Data = props.location.state;
        const aadharid =props.location.state.aadharid;
        useEffect(() => {     getShops();}, []);
        const history  = useHistory();



    


  

    const submitHandler=(e)=>{
        history.push({
            pathname: '/addshop',
            state: Data
        });
        // <Link to={{pathname:"/addshop",state: this.state.Data}} className="btn bg-blue-ui white read">ADD NEW SHOP</Link> 

    };

    const getShops=()=>
    {
        console.log("made request with aadharid" + aadharid)
         //axios.get('https://jsonplaceholder.typicode.com/users',{params:{aadharid:this.state.aadharid}})
        axios.get(`http://localhost:5000/shopkeeperData/getinfoShopProfile/${aadharid}`)
        .then(response => {  
            setShopProfile(response.data);
        }
        ).catch(
            
            error=>{ 
                setShopProfile({error:"No Shops Found"})
                console.log(error) }
            )

    };

   
     
    


        return (
           
            <div> 
                {console.log("in account")}
                {console.log(props.location.state)}

                <div>
                    {console.log("in Account")}
                    {console.log(Data)}
                    <PrimarySearchAppBar data = {Data}/>
                </div>
                <br></br>
                <div>
                    <ShopkeeperProfile data = {Data}/>
                </div>

            <div className="mt">
            <button type="button" className="btn btn-primary" onClick={submitHandler}>
                            ADD NEW SHOP
                        </button>
                 <br/><br/>
                 </div>  
                
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                
                                {
                                     shopProfile.length ?
                                     shopProfile.map(post=>
                                            <div className="col-md-4" key={post.farmid}>
                                            <ShopTile shop={post}></ShopTile>
                                            </div>) 
                                    :null
                                }



                            </div>
                        </div>
                    </div>

                    { shopProfile.error ? <div>{shopProfile.error}</div>:null}    
                    
            </div>
        )
}
export default Account ;