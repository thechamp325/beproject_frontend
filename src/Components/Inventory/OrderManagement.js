import React, { useState } from 'react'
import '../../Resources/css/navbar.css'
import {Link} from 'react-router-dom';
import PlaceOrder from './PlaceOrder';
import InventoryNavbar from './InventoryNavbar';

const OrderManagement = (props) => {

    return(
        <div>
            <div>
                <InventoryNavbar />
            </div>
            <div className = "col-12 col-md-8">
                <PlaceOrder />
            </div>
        </div>
    )
}
export default OrderManagement;