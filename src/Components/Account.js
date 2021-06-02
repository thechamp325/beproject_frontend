import React, { Component } from 'react'
import '../Resources/css/farmTiles.css'
import ShopTile from './ShopTile'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Switch,Route} from 'react-router-dom'
import PrimarySearchAppBar from './PrimarySearchAppBar';
import AddShop from './AddShop'
import ShopkeeperProfile from './ShopkeeperProfile';
class Account extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts:[{
                farmid:1
             }],
             error:"",
             gotData:"1",
             aadharid:this.props.aadharid
        }
    }

    loadLocalData=()=>
    {
        try{
            const serializedState=localStorage.getItem("MyFarmState")
            if(serializedState===null)
                return undefined
            return serializedState  
        }
        catch(e){
            console.log(e)
            return undefined
        }
    };

     getShops=()=>
    {
        console.log("made request with aadharid" + this.state.aadharid)
         //axios.get('https://jsonplaceholder.typicode.com/users',{params:{aadharid:this.state.aadharid}})
        axios.get('http://localhost:5000/shopkeeperData/getinfoShopProfile/all')
        .then(response => {  
        this.setState({posts:response.data,
                        gotData:"1"}) 
        }
        ) 
        .catch(
            
            error=>{ 
                this.setState({error:"No Farms Found"})
                console.log(error) }
            )

    };

    componentDidMount()
    {
        if(this.state.aadharid!==undefined)
        this.getShops();
        console.log("mounted")
        let Currstate
        //try to load from local storage
        Currstate=this.loadLocalData()
        //save state to local storage
        if(Currstate===undefined)
        {
            try{
                const serializedState=JSON.stringify(this.state)
                localStorage.setItem('MyFarmState',serializedState)
                console.log("saved this state")
            }
            catch(e)
            {
                console.log(e)
            }
        }
        else{
            let latestState=JSON.parse(Currstate)
            console.log(latestState)
            console.log("this state was retrieved")
            if(this.state.aadharid===undefined)
            this.setState(latestState)
        }
    }
     
    


    render() {
        if(this.state.gotData==="0")
        this.getShops()
        const{posts}=this.state
        // console.log(this.state)
        
        //console.log(JSON.stringify(this.state))
        return (
           
            <div> 

                <div>
                    <PrimarySearchAppBar/>
                </div>
                <br></br>
                <div>
                    <ShopkeeperProfile/>
                </div>

            <div className="mt">
                <Link to={{pathname:"/addshop"}} className="btn bg-blue-ui white read">ADD NEW SHOP</Link> 
                 <br/><br/>
                 </div>  
                
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                
                                {
                                     posts.length ?
                                            posts.map(post=>
                                            <div className="col-md-4" key={post.farmid}>
                                            <ShopTile shop={post}></ShopTile>
                                            </div>) 
                                    :null
                                }



                            </div>
                        </div>
                    </div>

                    { this.state.error ? <div>{this.state.error}</div>:null}    
                    
            </div>
        )
    }
}
export default Account ;