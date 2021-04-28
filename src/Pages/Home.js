import React, { useCallback, useEffect, useState } from "react";
import NavTiles from '../Components/NavTiles';
import BlogpostComponent from '../Components/BlogpostComponent';
import PrimarySearchAppBar from '../Components/PrimarySearchAppBar';

const Home = (props) => {
    return(
        <div>
            <div><PrimarySearchAppBar /></div>
            <div>
                   <NavTiles/>
                    {/* <BlogpostComponent/> */}
                </div>
        </div>
    );
}
export default Home;