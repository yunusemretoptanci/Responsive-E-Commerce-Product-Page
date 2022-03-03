import React, { useState } from "react";
import increase from "./images/icon-plus.svg";
import decrease from "./images/icon-minus.svg";
import cart from "./images/icon-cart.svg";
import { useStateValue } from "./StateProvide";
import { nanoid } from 'nanoid';
import "./Product.css";
import ImagesContainer from "./ImagesContainer";
function Product() {
  
    const[amount,setAmount]=useState(0);
    
    const [{}, dispatch] = useStateValue();
    
    const addToBasket = () => {
      dispatch({
        type: "ADD_CART",
        item: {
          id:nanoid(),
         amount:amount,
         price:amount*125,
        },
      });
      console.log(nanoid())
    };

   
  return <div className="product">
    <ImagesContainer />
    <div className="parent-detail">
    <div className="details-area">
        <p className="company-name">SNEAKER COMPANY</p>
        <h2 className="item-title">Fall Limited Edition Sneakers</h2>
        <p className="item-detail">These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
  <div className="parent-price">
  <div className="price-area">
            <h3>$125.00</h3>
            <div className="discount-box"><p>50%</p></div>
        </div>
        <p className="old-price">$250.00</p>
  </div>
        

        <div className="button-area">
        
            <div className="inc-dec-button">

            <div onClick={()=>amount>0 && setAmount(amount-1)} className="dec-div">
            <img className="decrease-button" src={decrease}></img>
            </div>
            
            <p className="item-amount">{amount}</p>

            <div onClick={()=>setAmount(amount+1)}  className="inc-div">
            <img className="increase-button" src={increase}></img>
            </div>
           
            </div>
            <div onClick={amount!=0&&addToBasket} className="add-cart-button">
            <img src={cart}></img>
            <p>Add to cart</p>
            </div>
        </div>
    </div>
    </div>
  </div>;
}

export default Product;
