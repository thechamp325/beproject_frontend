import React, { useCallback, useEffect, useState } from "react";

const ProductTiles = (props) => {

    return(
        <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                    <img className="card-img-top" src={props.productinfo.productimages[0]} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">{props.productinfo.heading}</h4>
                        <p className="card-text">{props.productinfo.detailinfo}</p>
                    </div>
                    <div className="card-footer">
                        <a href={`${props.productinfo.buylink}/${props.productinfo.id}`} className="btn btn-primary">BUY</a>
                    </div>
                    </div>
                </div>
    );
}
export default ProductTiles;