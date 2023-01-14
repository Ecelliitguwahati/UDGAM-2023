import Navbar from "../components/Navbar";
import "./contactus.css"
import { Button } from '@cred/neopop-web/lib/components';
import Footer from "../components/Home/footer";
import contactus from "./../icons/contactus.svg";
import { useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import axios from '../axios';
function Contactus() {
  const search = useLocation().search;
  console.log(process.env.REACT_APP_SECRETKEY)
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reason:"",
    message:""
  });
  useEffect(() => {

    const eventname = new URLSearchParams(search).get('reason');
    
  });
  const handleChange = (e) =>
  setContact(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  async function handleSubmit(e) {
    let firstName=contact.firstName; let lastName=contact.lastName; let email=contact.email; let reason=contact.reason; let message=contact.message;
    e.preventDefault();   
    if(contact.firstName && contact.lastName && contact.email && contact.reason && contact.message){
      await axios.post('/contact', { firstName, lastName, email, reason, message }).then(
        (res) => {
          navigate("/contactus");
          toast ("Your message is received");
          
        }).catch(function (error) {
          //console.log(error.toJSON());
          toast(error.message)
        });
    }
    else{
      toast("One or more fields are empty");
    }
  }
  return (
    <>
      
      {/* Anurag code */}
      <body className="contact_us">
      <Navbar />
        <div className="row euro as">
          <div className="col-lg-8 col-sm-12">
            <div className="container-fluid mt-3 boat">
              <div className="hello">CONTACT US </div>
              <div className="names" >
                <input type="text" name="firstName" className="first_name" placeholder="First name..."  onChange={handleChange} />
                <input type="text" name="lastName" className="last_name" placeholder="Last name..."  onChange={handleChange}/>
              </div>
              <p className="email_input">
                <input type="email" name="email" className="mail_input" onChange={handleChange} placeholder="Type your mail..." />
              </p>
              <form action="#" className="son">
                <label for="lang" name="reason" className="H21">Reason for Contacting</label>
                <select name="reason" id="lang" className="levi"  onChange={handleChange}>
                <option value="" disabled selected>Choose a reason</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Appreciation">Appreciation</option>
                  <option value="Suggestion">Suggestion</option>
                  <option value="Query">Query</option>
                  <option value="UDGAM Pass Specific">UDGAM Pass Specific</option>

                </select>

              </form>
              <div className="aot">
                <textarea type="text" name="message" className="Eren"  onChange={handleChange} placeholder="Any message for us?..." />
              </div>
              <br />
              <div className="submit_contactus as">
              <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
            colorConfig={{backgroundColor:"#D4F34A",borderColor:"#000000",edgeColors:{right:"#FC97D9",bottom:"#FC97D9"}}}
            onClick={(e) => {
              handleSubmit(e);
            }}
        >
            <div style={{color:"black"}}>SUBMIT</div>
    </Button>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="side_box">
            <img src={contactus} />
            </div>
          </div>
        </div>
<Footer/>
      </body>
    </>

  );
}

export default Contactus;
