import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import Image1 from "../../Resources/images/payments/gpay.jpeg";

const Gpay = (props) =>{
    // const [Razorpay,setRazorpay] = useState();
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }



    const ClickHandler =async (e) =>{
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order
        const result = await axios.post("http://localhost:5000/customer/orderspay");
        console.log("result");
        console.log(result.data);

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_oryNDXfwsBZuq0", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Ganesh Patil.",
            description: "Test Transaction",
            image: { Image1 },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:5000/customer/ordersuccess", data);

                alert(result.data.msg);
            },
            prefill: {
                name: "Ganesh Patil",
                email: "ganeshpatil325.gp@gmail.com",
                contact: "7767832966",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return(
        <div>
             <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
             <button type="button" className="btn btn-primary" onClick={ClickHandler} >Pay</button>
        </div>

    )
}
export default Gpay;