import React, { useCallback, useEffect, useState } from "react";
import Sales from './Sales';
import Purchases from './Purchases';
import PrimarySearchAppBar from '../PrimarySearchAppBar';
import FinanceNavbar from './FinanceNavbar';


const Finance = (props) => {
   return(
       <div>
           <FinanceNavbar data ={props.location.state} />
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