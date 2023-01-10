import React from 'react';
import Vector from '../icons/Vector007.svg'
import Vector3 from '../icons/udgam.svg';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import axios from '../axios';
import { useState, useEffect } from 'react';
import Footer from '../components/Home/footer';
import { toast } from 'react-toastify';
import CheckOut from '../components/Home/CheckOutButton';

function Registration() {
  const [orderAmount, setorderAmount] = useState(399);
  const navigate = useNavigate();
  const [resitered, setRegistered] = useState(false);
  const [paymentID, setpaymentID] = useState("");
  const [paid, setPaid] = useState(false);
  const [errortimes, setErrortimes] = useState(0);
  const [errortimesmail, setErrortimesmail] = useState(0);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    outlook: "",
    department: "",
    rollno: "",
    password: "",
    confirmPassword: "",
    promocode: ""
  });
  const promocodeset1 = "DECACORN"
  //console.log(user.firstName, user.lastName, user.email, user.outlook, user.rollno, user.password, user.confirmPassword);

  const handleChange = (e) => {
    setUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }))

    console.log(user.promocode)
  }

  // TRIGGERED WHEN PROMO CODE ENTERED
  useEffect(() => {
    // action on update of promo
    if (user.promocode === promocodeset1)
      setorderAmount(199)
    else
      setorderAmount(399)
  }, [user.promocode]);

  // TRIGEERED WHEN USER PAYS
  useEffect(() => {
    const registeruser = async () => {
      let firstName = user.firstName.trim(); let lastName = user.lastName.trim(); let email = user.email.trim(); let outlook = user.outlook.trim(); let contact = user.contact.trim(); let department = user.department.trim(); let rollno = user.rollno.trim(); let password = user.password.trim(); let confirmPassword = user.confirmPassword.trim();
      await axios.post('/registersave', { firstName, lastName, email, outlook, department, contact, rollno, password, confirmPassword }).then(
        (res) => {
          const success = res.status === 201;
          if (success) {
            setRegistered(true);
            return;
          }
        }).catch(async function (error) {
          setErrortimes(errortimes + 1);
          toast("Error occured, trying again !")
          await registeruser();
          if (errortimes >= 5) {
            toast(error.message);
            navigate({ pathname: '/registration/failure' });
          }
        });
    }
    if (paid)
      registeruser();
  }, [paid]);

  //TRIGGERED WHEN USER REGISTERS
  useEffect(() => {
    const mailpass = async (email) => {
      await axios.post('/mailpass', { email }).then(
        (res) => {
          const success = res.data.message === "YES";
          if (success) {
            navigate({
              pathname: '/registration/success',
              search: `?payId=${paymentID}&text=SUCCESS&name=${user.firstName + " " + user.lastName}&email=${user.email}`,
            });
            return;
          }
        })
        .catch(async function (error) {
          setErrortimesmail(errortimesmail + 1);
          toast("Failed, trying again")
          await mailpass();
          if (errortimesmail >= 5) {
            toast("We are unable to send mails right now. Please contact us immediately");
            navigate({
              pathname: '/registration/success',
              search: `?payId=${paymentID}&text=SUCCESS&name=${user.firstName + " " + user.lastName}&email=${user.email}`,
            });
          }
        });


    }

    if (resitered)
      mailpass(user.email);
  }, [resitered]);

  async function handleSubmit(e) {
    var msg;
    e.preventDefault();
    try {

      if (user.password !== user.confirmPassword) {

        toast('Passwords do not match');
        return;
      }

      else {
        let firstName = user.firstName; let lastName = user.lastName; let email = user.email; let outlook = user.outlook; let contact = user.contact; let department = user.department; let rollno = user.rollno; let password = user.password; let confirmPassword = user.confirmPassword;
        //Check if outlook, rollno, department, there or nor
        if (outlook || rollno || department) {
          if (outlook && rollno && department) {

          }
          else {
            toast("One or more details are empty if you are IIT Guwahati student");
            return;
          }
        }
        // First check if he purchased pass
        document.getElementById("warningg").style.display = "block"
        await axios.post('/checkifpurchased', { email }).then(
          (res) => {

            msg = res.data.message;
            console.log(msg)
          }).catch(function (error) {
            console.log(error.toJSON());
            toast(error.message);
            navigate({ pathname: '/registration/failure' });
            return;
          });
        // If he has purchased pass, we send him mail again

        if (msg == "YES") {
          toast("You had already purchased the UDGAM Pass. However we will still mail you the credentials");
          setRegistered(true);

          return;
        }
        // If he hasn't purchased, then check if iitg credentials match
        if (outlook && rollno) {
          await axios.post('/checkoutlook', { outlook, rollno }).then(
            (res) => {
              console.log(msg)
              msg = res.data.message;
            }).catch(function (error) {
              console.log(error.toJSON());
              toast(error.message);
              navigate({ pathname: '/registration/failure' });
              return;
            });

          // IF they match return
          if (msg == "ROLLNOSAME") {
            toast("Roll no. already exists. Recheck")
            return;
          }
          if (msg == "OUTLOOKSAME") {
            toast("Outlook already exists. Recheck")
            return;
          }
        }

        //If they don't then start razorpay
        if (msg == "NO") {
          console.log("RAZOR START")
          //Open Razorpay
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onerror = () => {
            toast('Razorpay SDK failed to load. Are you online?');
            navigate({ pathname: '/registration/failure' });
          };
          //Onload Razorpay
          script.onload = async () => {
            try {
              //Create order API called.
              const result = await axios.post('/create-order', {
                amount: orderAmount + '00',
              }).catch(function (error) {
                //console.log(error.toJSON());
                toast(error.message);
                navigate({ pathname: '/registration/failure' });
                return;
              });
              const { amount, id: order_id, currency } = result.data;
              const {
                data: { key: razorpayKey },
              } = await axios.get('/get-razorpay-key');
              const options = {
                key: razorpayKey,
                amount: amount.toString(),
                currency: currency,
                name: user.firstName + " " + user.lastName,
                description: 'UDGAM 2023 transaction',
                order_id: order_id,
                handler: async function (response) {
                  setpaymentID(response.razorpay_payment_id);
                  // Now Payment is completed
                  document.getElementById("warningg").innerText = "Paid, please wait for pass!!"
                  setPaid(true);
                },
                prefill: {
                  name: user.firstName + " " + user.lastName,
                  email: user.email,
                  contact: user.contact,
                },
                notes: {
                  address: 'example address',
                },
                theme: {
                  color: '#2D1373',
                },
              };
              const paymentObject = await new window.Razorpay(options);
              await paymentObject.open();
            } catch (err) {
              toast(err);
              navigate({ pathname: '/registration/failure' });
              return;
            }
          };
          document.body.appendChild(script);
        }
      }

    }
    catch (error) {
      toast(error);
      navigate({ pathname: '/registration/failure' });
    }
  }




  return (
    <body style={{ height: "max-content" }}>
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
                  <input className='wid_text_Field_100' type="text" name="firstName" required={true} placeholder="First name... *"
                    onChange={handleChange} />
                  <input className='wid_text_Field_100' type="text" name="lastName" required={true} placeholder="Last name... *" onChange={handleChange} />
                </div>
                <br />
                <div className="first_last_flex">
                  <input className='wid_text_Field_100' type="number" name="contact" pattern="[0-9]{10}" required={true} placeholder="Contact number... *" onChange={handleChange} />
                  <input className='wid_text_Field_100' type="email" id='email' name="email" required={true} placeholder="Type your Email... *" onChange={handleChange} />
                </div>
                <br></br>
                <p className="H21 info_reg_txt">Only for IIT Guwahati Students (Important for Intern Fair)</p>
                <div className="first_last_flex">
                  <input className='wid_text_Field_100' type="email" name="outlook" id='outlookid' placeholder="Outlook mail id..." onChange={handleChange} />



                  <select className='wid_text_Field_100' id="department" name="department" placeholder="Department" onChange={handleChange}>
                    <option value="" disabled selected>Your branch...</option>
                    <option value="Biological and Bioscience Engineering">Biological and Bioscience Engineering</option>
                    <option value="Chemical Engineering">Chemical Engineering</option>
                    <option value="Chemical Science and Technology">Chemical Science and Technology</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Computer Science Engineering">Computer Science Engineering</option>
                    <option value="Data Science and AI">Data Science and AI</option>
                    <option value="Design">Design</option>
                    <option value="Electronics and Communications Engineering">Electronics and Communications Engineering</option>
                    <option value="Engineering Physics">Engineering Physics</option>
                    <option value="Energy Engineering">Energy Engineering</option>
                    <option value="Electronics and Electrical Engineering">Electronics and Electrical Engineering</option>
                    <option value="Mathematics and Computing">Mathematics and Computing</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                  </select>

                </div>
                <br />
                <div className="first_last_flex">
                  <input className='wid_text_Field_100' type="number" name="rollno" id='rollno' placeholder="Roll no..." onChange={handleChange} />
                </div>
                <br></br>
                <p className="H21 info_reg_txt">Password shoud have at least 8 characters</p>
                <div className="first_last_flex last_field_regg">
                  <input className='wid_text_Field_100' type="password" name="password" required={true} placeholder="Create Password... *" onChange={handleChange} />
                  <input className='wid_text_Field_100' type="password" name="confirmPassword" required={true} placeholder="Confirm Password... *" onChange={handleChange} />
                </div>
                <p className="H21 info_reg_txt">Discount Code (Use code DECACORN to get flat ₹200 discount)</p>
                <div className="first_last_flex last_field_regg">
                  <input className='wid_text_Field_100' type="text" name="promocode" required={false} placeholder="Enter Discount Code" onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>
          <div className="pass_Card_register">
            {/* the submission design of the form has not decided yet , once it is complete i will continue from it */}


            <div className="card_of_pass_register">
              <img className='cardphoto' src={require("../icons/udgamPassBG.png")} alt="CardBG"></img>
              <img className="udgam7" src={Vector3} />
              <p className="beta beta0">Use code DECACORN to get flat ₹200 off.</p>
              <p className="alpha">Udgam pass</p>
              <p className="beta">Total Price -</p>
              <p className="beta beta1">Udgam Pass -</p>
              <p className="beta beta2">Events List - Internfair, Lecture Series, Fun events </p>
              <p className="beta beta3">Exclusive Perks - 15 Grabon coupons worth INR 1000+, Course worth INR 4000, Voiceflow subscription worth INR 4000</p>
              {/* <p className="beta beta4"></p> */}

              {/* <p className="beta beta4 beta5"><br />Coupons</p> */}

              <p className="gamma">₹{orderAmount}</p>
              <p className="gamma1">₹{orderAmount}</p>
              {/* <p className="gamma1 gamma2"></p> */}
              <button style={{ backgroundColor: "black" }} className="Checkout" type="submit">
                {/* <Checkout title="CHECK OUT →" /> */}
                <CheckOut />
              </button>
              <p className="H21 info_reg_txt" id="warningg">
                Please wait, do not refresh
              </p>
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
