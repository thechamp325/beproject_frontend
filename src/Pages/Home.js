import React, { useCallback, useEffect, useState } from "react";
import NavTiles from '../Components/NavTiles';
import BlogpostComponent from '../Components/BlogpostComponent';
import OnlineShopNavbar from './OnlineShopNavbar';

const Home = (props) => {
    return(
        <div>
            <div><OnlineShopNavbar /></div>
            <div>
                   <NavTiles/>
                    {/* <BlogpostComponent/> */}
                </div>
        </div>
    );
}
export default Home;