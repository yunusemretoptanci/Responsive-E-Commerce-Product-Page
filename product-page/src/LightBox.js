import React, { useEffect } from "react";
import closeIcon from "./images/icon-close.svg";
import leftIcon from "./images/icon-previous.svg";
import rightIcon from "./images/icon-next.svg";
import ImagesContainer from "./ImagesContainer";
import "./LightBox.css";
import { useStateValue } from "./StateProvide";
import { useMediaQuery } from 'react-responsive';
function LightBox() {
    const [{}, dispatch] = useStateValue();
    const [{currentPhoto,light }] = useStateValue();
    const isDesktop = useMediaQuery({ query: `(min-width: 760px)` });
    
    useEffect(()=>{
      !isDesktop&&closeLight();

    },[isDesktop])
    const closeLight=()=>{
        dispatch({
          type:"CLOSE_LIGHT"
        })
      };

    const nextImage = () => {
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


  return <div className="light-box-container">

  <div className="light-box">
  <img onClick={closeLight} className="close-img" src={closeIcon}></img>

  <div className="images-light-area">
  <div onClick={previousImage} className="left-icon-div">
  <img className="icon" src={leftIcon}></img>
  </div>
  
  <ImagesContainer />
  <div onClick={nextImage} className="right-icon-div">
  <img className="icon" src={rightIcon}></img>
  </div>
  
  </div>
  </div>
      
  </div>;
}

export default LightBox;
