import React from 'react';
import Vector from '../icons/Vector007.svg'
import Merch from '../components/Merch_Button';
import Vector1 from '../icons/Icon.svg'
import Vector2 from '../icons/arrow.svg'
import Checkout from '../components/Checkout';
import Vector3 from '../icons/udgam.svg';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import axios from '../axios'
import { useState } from 'react';
import Footer from '../components/Home/footer';
import { toast } from 'react-toastify';

function Registration() {
  const orderAmount = 199;
  const navigate = useNavigate();
  const [resitered, setRegistered] = useState(false);
  const [paid, setPaid] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    outlook: "",
    rollNo: "",
    password: "",
    confirmPassword: "",
  });
  //console.log(user.firstName, user.lastName, user.email, user.outlook, user.rollNo, user.password, user.confirmPassword);

  const handleChange = (e) =>
    setUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }))

  async function handleSubmit(e) {
    var msg;
    e.preventDefault();
    try {
      
      if (user.password !== user.confirmPassword) {
      
        toast('Passwords do not match');
        return;
      }
      else {
        let firstName = user.firstName; let lastName = user.lastName; let email = user.email; let outlook = user.outlook; let rollNo = user.rollNo; let password = user.password; let confirmPassword = user.confirmPassword;
        // First check if he purchased pass
        await axios.post('/checkifpurchased', { email }).then(
          (res) => {
            msg = res.data.message;
          }).catch(function (error) {
            //console.log(error.toJSON());
            toast(error.message);
            return;
          });
        // If he has purchased pass, we send him mail again
        if (msg=="YES"){
          toast("You had already purchased the UDGAM Pass. However we will still mail you.");
          await mailpass(user.email);
        }
        // If he hasn't purchased, then
        if (msg == "NO") {
          //Open Razorpay
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onerror = () => {
            toast('Razorpay SDK failed to load. Are you online?');
          };
          //Onload Razorpay
          script.onload = async () => {
            try {
              //Create order API called.
              const result = await axios.post('/create-order', {
                amount: orderAmount,
              }).catch(function (error) {
                //console.log(error.toJSON());
                toast(error.message);
              });
              const { amount, id: order_id, currency } = result.data;
              const {
                data: { key: razorpayKey },
              } = await axios.get('/get-razorpay-key');
              const options = {
                key: razorpayKey,
                amount: amount.toString(),
                currency: currency,
                name: user.firstName + " "+ user.lastName,
                description: 'UDGAM 2023 transaction',
                order_id: order_id,
                handler: async function (response) {
                  const result = await axios.post('/pay-order', {
                    amount: amount,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                  });
                  // Now Payment is completed
                  setPaid(true);
                  await axios.post('/registersave', { firstName, lastName, email, outlook, rollNo, password, confirmPassword }).then(
                    (res) => {
                      const success = res.status === 201;
                      if (success) {
                        setRegistered(true);
                      }
                    }).catch(function (error) {
                      //console.log(error.toJSON());
                      toast(error.message)
                    });
                },
                prefill: {
                  name: user.firstName + " "+ user.lastName,
                  email: user.email,
                  contact: '+919xxxxxxxxx',
                },
                notes: {
                  address: 'example address',
                },
                theme: {
                  color: '#2D1373',
                },
              };
              const paymentObject = new window.Razorpay(options);
              paymentObject.open();
            } catch (err) {
              toast(err);
            }
          };
          document.body.appendChild(script);
        }
      }

    }
    catch (error) {
      toast(error);
    }
  }

  if (resitered && paid) {
    mailpass(user.email);
    navigate('/registration/success');
  }
  // else{
  //   navigate('/registration/failure');
  // }
  async function mailpass(email){
    await axios.post('/mailpass', { email })
      .catch(function (error) {
        //console.log(error.toJSON());
        toast(error.message);
        return;
      });
  }
  return (
    <body style={{ height: "150vh" }}>
      <Navbar />
      <div>
        <form className='register_entire_page' onSubmit={handleSubmit}>
          <div className="register_dabba">
            <div className='register-progressbar'>
              <div className='c1_reg'>
                PERSONAL DETAILS
              </div>
              <div className='c2_reg'>
                PAYMENT
              </div>


            </div>
            <div className="registerform" >
              <h1 className="Pinfo">PERSONAL INFORMATION</h1>
              <p className="H21 info_reg_txt">
                * Indicates required field
              </p>
              <div className='registerform_div'>
                <div className="first_last_flex">
                  <input className='wid_text_Field_100' type="text" name="firstName" required={true} placeholder="First name..."
                    onChange={handleChange} />
                  <input className='wid_text_Field_100' type="text" name="lastName" placeholder="Last name..." onChange={handleChange} />
                </div>
                <br /><br />
                <div className="first_last_flex">

                  <input className='wid_text_Field_100' type="email" id='email' name="email" required={true} placeholder="Type your Email..." onChange={handleChange} />
                </div>
                <br></br>
                <p className="H21 info_reg_txt">Only for IIT Guwahati Students</p>
                <div className="first_last_flex">
                  <input className='wid_text_Field_100' type="email" name="outlook" id='outlookid' placeholder="Outlook mail id..." onChange={handleChange} />
                  <input className='wid_text_Field_100' type="text" name="rollNo" id='rollno' placeholder="Roll no..." onChange={handleChange} />
                </div>
                <br></br>
                <p className="H21 info_reg_txt">Password shoud have at least 8 characters</p>
                <div className="first_last_flex last_field_regg">
                  <input className='wid_text_Field_100' type="password" name="password" required={true}  placeholder="Create Password" onChange={handleChange} />
                  <input className='wid_text_Field_100' type="password" name="confirmPassword" required={true} placeholder="Confirm Password" onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>
          <div className="pass_Card_register">
            {/* the submission design of the form has not decided yet , once it is complete i will continue from it */}

            <p className='delta1'>Accepted Payments</p>
            <div className="vector">
              <img className=" img1" src={Vector} alt="img1" />
              <img className="img1 img2" src={Vector} alt="img2" />
              <img className="img1 img3" src={Vector} alt="img3" />
              <img className="img1 img4" src={Vector} alt="img4" />

            </div>
            <br />
            <div className="card_of_pass_register">
              <img className='cardphoto' src={require("../icons/udgamPassBG.png")} alt="CardBG"></img>
              <img className="udgam7" src={Vector3} />

              <p className="alpha">Udgam pass</p>
              <p className="beta">Total Price -</p>
              <p className="beta beta1">Udgam Pass -</p>
              <p className="beta beta2">Merchkit Addon -</p>
              <p className="beta beta3">Events List - Internfair, Pmx, Fun events  </p>
              <p className="beta beta4">Exclusive Perks - Voiceflow thing, Discount</p>

              <p className="beta beta4 beta5"><br />Coupons</p>

              <p className="gamma">₹199</p>
              <p className="gamma1">₹199</p>
              <p className="gamma1 gamma2">₹199</p>
              <div className="Checkout" type="submit"><Checkout title="CHECK OUT →" /></div>
            </div>

            {/* <div className="vector">
          <img className=" img1" src={Vector} alt="img1" />
          <img className="img1 img2" src={Vector} alt="img2" />
          <img className="img1 img3" src={Vector} alt="img3" />
          <img className="img1 img4" src={Vector} alt="img4" />

        </div>
        <div className='Merch'><Merch icon={Vector1} title=" Merch kit addon" /></div> */}

          </div>
        </form>
      </div>
      <Footer />
    </body>
  )

}

export default Registration;
