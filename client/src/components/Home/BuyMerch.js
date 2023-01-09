import React from 'react'
import "./BuyMerch.css";
// import { Button } from '@cred/neopop-web/lib/components';
import BuyM from "./BuyMerchButton";
import vauc from './../../icons/vauc.svg';
import vac from './../../icons/vac.svg';
import hoodie from './../../icons/hoodie.png';
import whiteTshirt from './../../icons/whiteTshirt.png';
import blackTshirt from './../../icons/blackTshirt.png';
import blackTshirt2 from './../../icons/blackTshirt2.png';
import stylishlogo from './../../icons/stylishlogo.png';
import stylishlogo2 from './../../icons/stylishlogo2.png';
import badge from './../../icons/badge.png';
import tshirt2 from './../../icons/tshirt2.png';
import diary from './../../icons/diary.png';
import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
//   import Toast3rd from '../toast';


function BuyMerch() {
  const [img, setimg] = useState(vauc);
  return (
    <div className='merch' id='merch' style={{ backgroundColor: "#0c0227" }}>
      <div class="top topmerch buy-merch">
        <h1>BUY OUR MERCH</h1>
        <button className='topbut'
          onMouseEnter={() => {
            setimg(vac);
          }}
          onMouseLeave={() => {
            setimg(vauc);
          }}><a href="/comingsoon">View All Merch <img src={img} alt="altimg" /></a>
        </button>
      </div>
      {/* <div class="backimg">
        

        <div class="but_merch">
          <BuyM />
        </div>
      </div> */}
      <div className='merchImages'>
          <div className='columnOne'>
             <div className='imageOne'>
              
                <img src={hoodie} alt='altimg'/>
              
             </div>
             <div className='imageTwo' >
                <img src={whiteTshirt} alt='altimg'/>
             </div>

          </div>
          <div className='columnTwo'>
              <div className='imageThird'>
                 <div className='ThirdOne' >
                    <img src={blackTshirt} alt='altimg'/>
                 </div>
                 <div className='ThirdTwo' >
                    <img src={blackTshirt2} alt='altimg'/>
                 </div>
             </div>
             <div className='imageFour' >
                 <div className='FourOne' >
                   <img src={stylishlogo} alt='altimg'/>
                   <img src={stylishlogo2} alt='altimg'/>
                </div>
                 <div className='FourTwo' >
                 <img src={badge} alt='altimg'/>   
                </div>
             </div>

          </div>
          <div className='columnThree'>
              <div className='imageFive'>
              <img src={diary} alt='altimg'/>
              </div>
              <div className='imageSix' >
              <img src={tshirt2} alt='altimg'/>
              </div>
          </div>
          
      </div>
      <div class="but_merch">
          <BuyM />
        </div>
    </div>

  )
}

export default BuyMerch


