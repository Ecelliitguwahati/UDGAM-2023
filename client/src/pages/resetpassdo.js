


import { React, useState } from "react";
import { Button } from '@cred/neopop-web/lib/components';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

function ResetPassDo() { const navigate=useNavigate();
    const queryParameters = new URLSearchParams(window.location.search)
    const token = queryParameters.get("token").trim()
    const email = queryParameters.get("email").trim()
    const [user, setUser] = useState({
        newpwd: "",
        confirmPassword: "",
    });
    const handleChange = (e) =>
        setUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    async function handleSubmit(e){
        e.preventDefault();
        if(user.newpwd!==user.confirmPassword){
            toast("Passwords doesnt match");
            return;
        }
        let newpwd=user.newpwd.trim();
        await axios.post('/resetpassword', { email, newpwd, token }).then((res)=>{
            console.log(res.data.message)
            if(res.data.message=="YES"){
            toast("Password reset successful")
            navigate("/resetpass")
          }
            else
            toast("Password reset unsuccessful. Token may be invalid")
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
                <h1 className="Pinfo">RESET YOUR PASSWORD</h1>
                <div className="first_last_flex last_field_regg">
                    <input className='wid_text_Field_100' type="password" name="newpwd" required={true} placeholder="Create Password... *" onChange={handleChange} />
                    <input className='wid_text_Field_100' type="password" name="confirmPassword" required={true} placeholder="Confirm Password... *" onChange={handleChange} />
                </div>
                <div className="RESETPWD" type="submit"><Button
                    variant="primary"
                    kind="elevated"
                    size="big"
                    colorMode="light"
                    colorConfig={{ backgroundColor: "#D4F34A", borderColor: "#000000", edgeColors: { right: "#FC97D9", bottom: "#FC97D9" } }}
                >
                    <div style={{ color: "black" }}>RESET</div>
                </Button></div>
            </form>
        </div>
    );
}

export default ResetPassDo;
