import React from 'react'
import './GetTicket_Spomsor.css'
import { Button } from '@cred/neopop-web/lib/components';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Toast3rd from '../toast';
  import sponsorhome from "../../PhotosPng/sponsorhome.png"
function Sponsor() {
  
  return (
    
<div className='sponsorhome' style={{ backgroundColor: "#0c0227" }}>
    <div className="top">
      <h1>SPONSORS</h1>
      <button className='topbut' ><a href="/sponsors" >View All Sponsors<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_27_4652)">
      <path d="M19 19.6367H5V5.63672H12V3.63672H5C3.89 3.63672 3 4.53672 3 5.63672V19.6367C3 20.7367 3.89 21.6367 5 21.6367H19C20.1 21.6367 21 20.7367 21 19.6367V12.6367H19V19.6367ZM14 3.63672V5.63672H17.59L7.76 15.4667L9.17 16.8767L19 7.04672V10.6367H21V3.63672H14Z" fill="#D4F34A"/>
      </g>
      <defs>
      <clipPath id="clip0_27_4652">
      <rect width="24" height="24" fill="white" transform="translate(0 0.636719)"/>
      </clipPath>
      </defs>
      </svg>
      </a>
      </button>
    </div>
   <a href="/sponsors"> <img src={sponsorhome}></img></a>
</div>
  )
}

export default Sponsor
