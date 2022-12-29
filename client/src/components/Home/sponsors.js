import React, { useState } from 'react'
import './GetTicket_Spomsor.css'
import { Button } from '@cred/neopop-web/lib/components';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Toast3rd from '../toast';
  import sponsorhome from "../../PhotosPng/sponsorhome.png"
  import va from "./../../icons/va.svg"
  import meuc from './../../icons/meuc.svg'
import mec from './../../icons/mec.svg'

function Sponsor() {
  const [img, setimg] = useState(meuc);
  return (
    
<div className='sponsorhome' style={{ backgroundColor: "#0c0227" }}>
    <div className="top">
    <div className='t'>
      <h1>SPONSORS</h1>
      <a href='/sponsors'className="va"><p>View all <img src={va} /></p></a>
      </div>

      <button className='topbut' 
      onMouseEnter={()=>{
        setimg(mec);
    }}
    onMouseLeave={()=>{
        setimg(meuc);
    }}
    onClick={() => {
      window.open('/contactus', '_blank');
  }}
      ><a href="" >Become a sponsor <img src={img} />
      </a>
      </button>
    </div>
    <a href="/sponsors" className='sa'><img src={sponsorhome}></img></a>
</div>
  )
}

export default Sponsor
