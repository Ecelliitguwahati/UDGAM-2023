import React from 'react'
import './EventsBuyButton.css'
// import ruc from "./../../icons/bpr.svg";
// import rc from "./../../icons/bprs.svg";
import { useState } from 'react';


export default function  SubmitContact() {
   // const [arrowImage, setarrowImage] = useState(ruc);

  return (
    <div className='body'>
    
     <div>
      <div className='back' style={{backgroundColor:'#FC97D9'}}>
      </div>
      <div 
      className='face'
        style={{backgroundColor:'#D4F34A'}} >
        SUBMIT
      </div>
      
    </div>
   </div>
  )
}

