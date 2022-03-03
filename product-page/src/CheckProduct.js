import React from "react";
import product1Thumb from "./images/image-product-1-thumbnail.jpg";
import iconDelete from "./images/icon-delete.svg";
import { useStateValue } from "./StateProvide";
import "./CheckProduct.css"
function CheckProduct({id,amount,price,}) {
    const [{}, dispatch] = useStateValue();

    const removeToBasket = () => {
     dispatch({
       type: "REMOVE_CART",
       id:id,
     });
     
   }; 

  return  <div className="filled-cart-content">
  <img className="filled-image" src={product1Thumb}></img>
  <div className="filled-cart-details">
  <p className="filled-details">Fall Limited Edition Sneakers</p>
  <div className="filled-price">
  
  <p>$125.00 x <span>{amount}</span></p>
   <h4>${price}</h4>
  </div>
  
  </div>
  <img onClick={removeToBasket} src={iconDelete} ></img>
  </div>
  ;
}

export default CheckProduct;
