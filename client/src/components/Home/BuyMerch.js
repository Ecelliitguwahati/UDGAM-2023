import React from 'react'
import "./BuyMerch.css";
import { Button } from '@cred/neopop-web/lib/components';
import vauc from './../../icons/vauc.svg';
import vac from './../../icons/vac.svg';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Toast3rd from '../toast';
  import { useState } from 'react';
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
  }}>View All Merch <img src={img}/>
      </button>
    </div>
    <div class="backimg">
      
      <div class="but_merch">        
      <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
            colorConfig={{backgroundColor:"#F0E266",borderColor:"black",edgeColors:{right:"#736B1F",bottom:"#736B1F"}}}
             spacingConfig={{height:"70px"}}
            onClick={() => {
              toast("COMING SOON !!");
            }}
        >
            <div className="GetTkt" style={{color:"black"}}>BUY MERCH</div>
    </Button></div>
    </div>
    </div>
    
  )
}

export default BuyMerch
