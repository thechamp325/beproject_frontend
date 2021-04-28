import React, { useCallback, useEffect, useState } from "react";
import InventoryNavbar from './InventoryNavbar';
import AddVendorForm from './AddVendorForm';
import PlaceOrder from './PlaceOrder';
const Inventory = (props) => {
    return(
        <div>
            <div>
                <InventoryNavbar />
            </div>
            
            <div className = "col-12 col-md-8">
            <AddVendorForm />
            </div>
          
        </div>
    );
}
export default Inventory;