import React, { useCallback, useEffect, useState } from "react";
import Image1 from '../Resources/images/payments/gpay.jpeg';
import './checkout/Checkout.css';
import namo from '../media/namo.jpg';

const ShopkeeperProfile = (props) => {

    const [profileData,setprofileData] = useState({
        name:props.data.name,
        mobile:props.data.mobile
    });
   
    return(
        
    
        <div className='checkout-border row m-0 p-2'>
            {console.log("in shop profile")}
            {console.log(props)}
                        
                        <div className="col-3 p-2 " >
                            <img width="100%" src={namo}/>
                            <div className="d-flex justify-content-center align-items-center mb-lg-n3  p-2">
                              
                             
                            </div>   
                        </div>
                        
                        <div className="col-5 p-2">
                            <div className="head ">
                               <span>Name</span>
                            </div>
                            <div className="pri">
                                 <span >{profileData.name}</span> 
                            </div>
                            <div className="head ">
                               <span>Mobile</span>
                            </div>
                            <div className="pri">
                                 <span>{profileData.mobile}</span> 
                            </div>
                           
                        </div>
                        
                      
                    </div>
    )
}
export default ShopkeeperProfile;