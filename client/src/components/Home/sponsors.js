import React, { useState } from 'react'
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
      <button className='topbut' ><a href="/sponsors" >View All Sponsors <img src="" />
      </a>
      </button>
    </div>
   <a href="/sponsors"> <img src={sponsorhome}></img></a>
</div>
  )
}

export default Sponsor
