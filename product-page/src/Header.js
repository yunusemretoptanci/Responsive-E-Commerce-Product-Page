import React, { useState } from "react";
import "./Header.css"
import avatar from "./images/image-avatar.png";
import cart from "./images/icon-cart.svg";
import logo from "./images/logo.svg"
import { useStateValue } from "./StateProvide";
import CheckProduct from "./CheckProduct";
import { useMediaQuery } from 'react-responsive';
function Header() {
  const[openCart,setOpenCart]=useState(false);
  const [{basket }] = useStateValue();
  const isDesktop = useMediaQuery({ query: `(min-width: 760px)` });

  return <div className="header">

  {!isDesktop&&<div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>
    <ul class="menu__box">
      <li><a class="menu__item" href="#">Collections</a></li>
<li><a class="menu__item" href="#">Men</a></li>
<li><a class="menu__item" href="#">Women</a></li>
<li><a class="menu__item" href="#">About</a></li>
<li><a class="menu__item" href="#">Contact</a></li>
    </ul>
  </div>}
  
  
   <div className="brand-category">
       <img src={logo}></img>
       <p>Collections</p>
       <p>Men</p>
       <p>Women</p>
       <p>About</p>
       <p>Contact</p>
   </div>
   <div className="profile">
   <div className="cart-container">

   <div className={basket.length>0 ? "items-number active" : "items-number"}><p>{basket.length}</p></div>
   <img onClick={()=>setOpenCart(openCart ? false : true)} src={cart} alt="cart"></img>
   </div>
   
    <img onClick={()=>setOpenCart(openCart ? false : true)} className="avatar-photo" src={avatar} alt="avatar"></img>
   </div> 

   <div className={openCart ? "cart-detail active" :"cart-detail"}>
     <div className="cart-title">
       <h4>Cart</h4>
     </div>

   {basket.length>0 ? 
    <div className="filled-container">

   {basket.map((item)=>(
    <CheckProduct 
      id={item.id}
      amount={item.amount}
      price={item.price}
    />
    
   ))}
<div className="check-button"><p>Checkout</p></div>

</div>

: <div className="empty-cart-content">
    <p>Your Cart is empty.</p>    
    </div>  

    }

   </div>

  </div>;
}

export default Header;
