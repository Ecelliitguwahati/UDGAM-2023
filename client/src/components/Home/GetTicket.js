import React from 'react'
import './GetTicket_Spomsor.css'
// import { Button } from '@cred/neopop-web/lib/components';
import GetTicketB from './GetTicketButton';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Toast3rd from '../toast';
function GetTicket() {
  
  return (
<div className='getticket'>
    <h1>SEE YOU AT<br></br>UDGAM 2023</h1>
    <h3>Save the date and secure your seat at the summit.</h3>
    <div class="buttoncenter">
       <GetTicketB/>        
      </div>

</div>
  )
}

export default GetTicket
