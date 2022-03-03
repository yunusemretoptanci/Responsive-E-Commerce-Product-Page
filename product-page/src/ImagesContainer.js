import React, { useEffect, useState } from "react";
import product1Thumb from "./images/image-product-1-thumbnail.jpg";
import product2Thumb from "./images/image-product-2-thumbnail.jpg";
import product3Thumb from "./images/image-product-3-thumbnail.jpg";
import product4Thumb from "./images/image-product-4-thumbnail.jpg";
import product1 from "./images/image-product-1.jpg";
import product2 from "./images/image-product-2.jpg";
import product3 from "./images/image-product-3.jpg";
import product4 from "./images/image-product-4.jpg";
import leftIcon from "./images/icon-previous.svg";
import rightIcon from "./images/icon-next.svg";
import { useStateValue } from "./StateProvide";
import { useMediaQuery } from 'react-responsive';
import "./ImagesContainer.css";
function ImagesContainer() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const [{basket,light,currentPhoto }] = useStateValue();
    const [{}, dispatch] = useStateValue();

    const[mainImage,setMainImage]=useState(product1)
    const[style1,setStyle1]=useState(true)
    const[style2,setStyle2]=useState(false)
    const[style3,setStyle3]=useState(false)
    const[style4,setStyle4]=useState(false)

    useEffect(()=>{
      console.log(currentPhoto.length)
      if(currentPhoto.length==1){
        firstClick()
      }else if(currentPhoto.length==2){
        secondClick()
      }else if(currentPhoto.length==3){
        thirdClick()
      }else if(currentPhoto.length==4){
        fourthClick()
      }
    },[currentPhoto]);

   
    const openLight=()=>{
      !isMobile&&dispatch({
          type:"OPEN_LIGHT"
        })
      };
  
      const closeLight=()=>{
        dispatch({
          type:"CLOSE_LIGHT"
        })
      };

      const nextImage = () => {
        console.log("yogurt");
        if(currentPhoto.length<4){
            dispatch({
                type: "NEXT_IMAGE",
              });
        }
      };
    
    const previousImage = () => {
        if(currentPhoto.length>0){
            dispatch({
                type: "PREVIOUS_IMAGE",
              });  
        }
      };

      const firstClick=()=>{
        setMainImage(product1);
        setStyle1(true)
        setStyle2(false)
        setStyle3(false)
        setStyle4(false)
      }

      const secondClick=()=>{
        setMainImage(product2);
        setStyle1(false)
        setStyle2(true)
        setStyle3(false)
        setStyle4(false)
      }

      const thirdClick=()=>{
        setMainImage(product3);
        setStyle1(false)
        setStyle2(false)
        setStyle3(true)
        setStyle4(false)
      }
      const fourthClick=()=>{
        setMainImage(product4);
        setStyle1(false)
        setStyle2(false)
        setStyle3(false)
        setStyle4(true)
      }
      

  return <div className="images-area">
  <div className="main-img">

  <div onClick={previousImage} className="left-div">
  <img  className="icon" src={leftIcon}></img>
  </div>
 

  <img onClick={light ? closeLight :openLight} className="main-img" src={mainImage}></img>
  <div onClick={nextImage} className="right-div">
  <img className="icon" src={rightIcon}></img>
  </div>
  
  </div>
  <div className="thumb-images">
  <img onClick={firstClick} className="thumb" style={style1?{opacity:'50%'}:{opacity:'100%'}} src={product1Thumb}></img>
  <img onClick={secondClick} className="thumb" style={style2?{opacity:'50%'}:{opacity:'100%'}} src={product2Thumb}></img>
  <img onClick={thirdClick} className="thumb" style={style3?{opacity:'50%'}:{opacity:'100%'}} src={product3Thumb}></img>
  <img onClick={fourthClick} className="thumb" style={style4?{opacity:'50%'}:{opacity:'100%'}} src={product4Thumb}></img>
  </div>
  
  
  </div>;
}

export default ImagesContainer;
