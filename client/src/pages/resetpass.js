

import { React, useState } from "react";
import { Button } from '@cred/neopop-web/lib/components';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import axios from '../axios';


function ResetPass() {
    const navigate=useNavigate();
    const [user, setUser] = useState({
        email: "",
    });
    const handleChange = (e) =>
        setUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    async function handleSubmit(e){
         e.preventDefault();
         let email=user.email.trim();
         await axios.post('/resetpasswordreq', { email}).then((res)=>{
            console.log(res.data.message)
            if(res.data.message==="YES"){
            toast("Request successfully generated. Please check mail")
            navigate("/resetpass")
            }
            else
            toast("Email ID does not exist. Recheck")
        })
        .catch(function (error) {
            //console.log(error.toJSON());
            toast(error.message);
            return;
          });
    }
  return (
    <div style={{ height: "100vh", background: "linear-gradient(to bottom, #1A074E 0%, #060213 100%)" }}>
    <form onSubmit={handleSubmit}>
        <h1 className="Pinfo">RESET YOUR PASSWORD REQUEST</h1>
        <div className="first_last_flex last_field_regg">
            <input className='wid_text_Field_100' type="email" name="email" required={true} placeholder="Email ID or Outlook ID with which you purchased pass *" onChange={handleChange} />
        </div>
        <div className="RESETPWD" type="submit"><Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
            colorConfig={{ backgroundColor: "#D4F34A", borderColor: "#000000", edgeColors: { right: "#FC97D9", bottom: "#FC97D9" } }}
        >
            <div style={{ color: "black" }}>GENERATE REQUEST</div>
        </Button></div>
    </form>
</div>
  );
}

export default ResetPass;
