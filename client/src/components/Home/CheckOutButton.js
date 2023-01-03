import React from 'react'
import './EventsBuyButton.css'
import ruc from "./../../icons/bpr.svg";
import rc from "./../../icons/bprs.svg";
import { useState } from 'react';


export default function  CheckOut() {
    const [arrowImage, setarrowImage] = useState(ruc);

  return (
    <div className='body'>
     <div>
      <div className='back' style={{backgroundColor:'#FC97D9'}}>
      </div>
      <div 
      className='face' 
      onMouseEnter={() => {
        setarrowImage(rc);
      }}
        onMouseLeave={() => {
        setarrowImage(ruc); 
    }}
        style={{backgroundColor:'#D4F34A'}} >
        CHECK OUT
        <img src={arrowImage} alt='arrow' />
      </div>
      
    </div>
   </div>
  )
}

