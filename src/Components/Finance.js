import React, { useCallback, useEffect, useState } from "react";
import Sales from './Finance/Sales';
import Purchases from './Finance/Purchases';
import PrimarySearchAppBar from './PrimarySearchAppBar';

const Finance = (props) => {
   return(
       <div>
           <PrimarySearchAppBar />
           <br/>
           <div class="d-flex flex-row">
           <div className= "col-12 col-md-6">
               <Purchases/>
            </div>
            <br></br>     
            <div className= "col-12 col-md-6">
                <Sales/>
            </div>      
       </div>

</div>
           
   );
}
export default Finance;