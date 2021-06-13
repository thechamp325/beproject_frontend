import React, { useCallback, useEffect, useState } from "react";
import '../Resources/vendor/bootstrap/css/bootstrap.min.css'
import '../Resources/css/homebackgrd.css'
import axios from 'axios';
import $ from 'jquery';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import ProductTiles from './ProductTiles';
const NavTiles = (props) =>  {

    
            const state = {
                images:["https://rukminim1.flixcart.com/flap/1688/280/image/a8077e4ac3102b29.jpg",
                "https://rukminim1.flixcart.com/flap/1688/280/image/137df36c14328b51.jpg",
                "https://rukminim1.flixcart.com/flap/1688/280/image/d7ff5f8919410749.jpg",
                "https://rukminim1.flixcart.com/flap/1688/280/image/0050b375a517af3d.jpg"
                ]
            };
            const [ProductData,setProductData] = useState([]);
                    // {
                    //     productimages:[
                    //         "https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50",
                    //     ],
                    //     heading:"Washing Machine Offer",
                    //     productid:1,
                    //     detailinfo:`Buy Washing Machines at exciting prices
                    //     and exciting discount.
                    //     Check out other electronic products.`,
                    //     buylink:"/buy"
                    // },
                    // {
                    //     productimages:[
                    //         "https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50",
                    //     ],
                    //     heading:"Washing Machine Offer",
                    //     productid:2,
                    //     detailinfo:`Buy Washing Machines at exciting prices
                    //     and exciting discount.
                    //     Check out other electronic products.`,
                    //     buylink:"/buy"
                    // },
                    // {
                    //     productimages:[
                    //         "https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50",
                    //     ],
                    //     heading:"Washing Machine Offer",
                    //     productid:3,
                    //     detailinfo:`Buy Washing Machines at exciting prices
                    //     and exciting discount.
                    //     Check out other electronic products.`,
                    //     buylink:"/buy"
                    // },
                    // {
                    //     productimages:[
                    //         "https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50",
                    //     ],
                    //     heading:"Washing Machine Offer",
                    //     productid:4,
                    //     detailinfo:`Buy Washing Machines at exciting prices
                    //     and exciting discount.
                    //     Check out other electronic products.`,
                    //     buylink:"/buy"
                    // },
                    // {
                    //     productimages:[
                    //         "https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50",
                    //     ],
                    //     heading:"Washing Machine Offer",
                    //     productid:5,
                    //     detailinfo:`Buy Washing Machines at exciting prices
                    //     and exciting discount.
                    //     Check out other electronic products.`,
                    //     buylink:"/buy"
                    // },
                    // {
                    //     productimages:[
                    //         "https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50",
                    //     ],
                    //     heading:"Washing Machine Offer",
                    //     productid:6,
                    //     detailinfo:`Buy Washing Machines at exciting prices
                    //     and exciting discount.
                    //     Check out other electronic products.`,
                    //     buylink:"/buy"
                    // },
                    // {
                    //     productimages:[
                    //         "https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50",
                    //     ],
                    //     heading:"Washing Machine Offer",
                    //     productid:7,
                    //     detailinfo:`Buy Washing Machines at exciting prices
                    //     and exciting discount.
                    //     Check out other electronic products.`,
                    //     buylink:"/buy"
                    // },
                    // {
                    //     productimages:[
                    //         "https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50",
                    //     ],
                    //     heading:"Refrigerators",
                    //     productid:8,
                    //     detailinfo:`Buy Washing Machines at exciting prices
                    //     and exciting discount.
                    //     Check out other electronic products.`,
                    //     buylink:"/buy"
                    // }


            const urlgetProducts= "http://localhost:5000/shopkeeperData/getProductToOnlineShop/all";

useEffect(() => {     getProductsData();}, []);

const getProductsData = () => {
    axios.get(`${urlgetProducts}`)
    .then((response) => {
        console.log(response.data);
       const allProductsData =  response.data;
    //    setProductData([ {
    //         productImages:"https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50",
    //         heading:"Refrigerators",
    //         productid:8,
    //         productInfo: {
    //             size: "L",
    //             neck: "round necked",
    //             info: "This is a nice product. It fits well and easy to waash"
    //         }
    //         ,
    //         buylink:"/buy"
    //     }]);
    setProductData(allProductsData);
    })
    .catch(error => console.log(`Error: ${error}`));
 }
          
   const scroll = (direction) => {
        let far = $( '.image-container' ).width()/2*direction;
        let pos = $('.image-container').scrollLeft() + far;
        $('.image-container').animate( { scrollLeft: pos }, 1000)
      }
    // changeImage(dir) {
    //     var img = document.getElementById("imgClickAndChange");
    //     img.src = imgs[imgs.indexOf(img.src) + (dir || 1)] || imgs[dir ? imgs.length - 1 : 0];
    // }
        return (
            <div>
                <div >
                {/* <header className="jumbotron my-4 homebackgrd" >
                <h1 className="display-3" style={{color:"white"}}>Krishi Kalyan</h1>
                
                <p className="lead" style={{color:"white"}} >Find Help in Agriculture | Get Crop Recommendations</p>
                </header> */}
                {/* <div id="slideshow">
                    <img alt="slideshow" src="https://rukminim1.flixcart.com/flap/1688/280/image/a8077e4ac3102b29.jpg?q=50" id="imgClickAndChange" onclick="changeImage()" />
                </div> */}

                    {/* <div className="main">
                        <h1 className="title">Scrolling Image Slider</h1>
                        <div className="wrapper">
                            <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
                            <div className="image-container">
                                <div className="image"><img src={this.state.images[0]}/></div>
                                <div className="image"><img src={this.state.images[1]}/></div>
                            </div>
                            <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
                        </div>
                    </div> */}
                    <AliceCarousel autoPlay 
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                    autoPlay={true}
                    fadeOutAnimation={true}
                    mouseTrackingEnabled={true}
                    disableAutoPlayOnAction={true}>
                        <img src={state.images[0]} className="sliderimg"/>
                        <img src={state.images[1]} className="sliderimg"/>
                        <img src={state.images[2]} className="sliderimg"/>
                        <img src={state.images[3]} className="sliderimg"/>
                    </AliceCarousel>
                
                    <div className="row text-center">
                    {ProductData.map((ProductData)=>{
                        return <ProductTiles data={props.data} productinfo={ProductData} />
                    })}
                        
                    </div>
                

                </div>
 
            </div>
        )
    }
export default NavTiles;