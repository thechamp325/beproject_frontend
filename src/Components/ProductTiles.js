import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ProductTiles = (props) => {

    return(
        <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                <img className="card-img-top" src={props.productinfo.productImages} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">{props.productinfo.productName}</h4>
                        <p className="card-text">{JSON.stringify(props.productinfo.productInfo)}</p>
                    </div>
                    <div className="card-footer">
                    <Link to={{
                    pathname: '/buy',
                    state: props
                    }} className="btn btn-primary" > BUY </Link>
                        {/* <a href={`${props.productinfo.buylink}`} className="btn btn-primary">BUY</a> */}
                    </div>
                    </div>
                </div>
    );
}
export default ProductTiles;