import React, { useCallback, useEffect, useState } from "react";
import NavTiles from '../Components/NavTiles';
import BlogpostComponent from '../Components/BlogpostComponent';
import OnlineShopNavbar from './OnlineShopNavbar';
import { useHistory } from "react-router-dom";

const Home = (props) => {
    const history  = useHistory();

    return(
        <div>
            <div><OnlineShopNavbar data= {props.location.state} /></div>
            <div>
                   <NavTiles data= {props.location.state}/>
                    {/* <BlogpostComponent/> */}
                </div>
        </div>
    );
}
export default Home;