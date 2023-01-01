import React from 'react'
import "./BuyMerch.css";
// import { Button } from '@cred/neopop-web/lib/components';
import BuyM from "./BuyMerchButton";
import vauc from './../../icons/vauc.svg';
import vac from './../../icons/vac.svg';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Toast3rd from '../toast';


function BuyMerch() {
  const [img, setimg] = useState(vauc);
  return (
    <div className='merch' id='merch'  style={{backgroundColor:"#0c0227"}}>
       <div class="top buy-merch">
    <h1>BUY OUR MERCH</h1>
    <button className='topbut' 
    onMouseEnter={()=>{
      setimg(vac);
  }}
  onMouseLeave={()=>{
      setimg(vauc);
  }}><a href="/comingsoon">View All Merch <img src={img}/></a>
      </button>
    </div>
    <div class="backimg">
      
      <div class="but_merch"> 
       <BuyM/>    
      </div>
    </div>
    </div>
    
  )
}

export default BuyMerch
