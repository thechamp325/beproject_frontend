import React, { useCallback, useEffect, useState } from "react";

const PaymentComponent = (props) => {

    return(
        <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src={props.productinfo} alt=""/>
                  
                    </div>
                </div>
    );
}
export default PaymentComponent;