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

function RegistrationOffer() {
  const [orderAmount, setorderAmount] = useState(299);
  const navigate = useNavigate();
  const [resitered, setRegistered] = useState(false);
  const [resitered2, setRegistered2] = useState(false);
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
    
  });
  const [user2, setUser2] = useState({
    firstName2: "",
    lastName2: "",
    email2: "",
    contact2: "",
    outlook2: "",
    department2: "",
    rollno2: "",
    password2: "",
    confirmPassword2: "",
    
  });
  const handleChange = (e) => {
    setUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    setUser2(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    
  }

  // TRIGEERED WHEN USER PAYS
  useEffect(() => {
    const registeruser = async () => {
      let firstName = user.firstName.trim(); let lastName = user.lastName.trim(); let email = user.email.trim(); let outlook = user.outlook.trim(); let contact = user.contact.trim(); let department = user.department.trim(); let rollno = user.rollno.trim(); let password = user.password.trim(); let confirmPassword = user.confirmPassword.trim();
      let firstName2 = user2.firstName2.trim(); let lastName2 = user2.lastName2.trim(); let email2 = user2.email2.trim(); let outlook2 = user2.outlook2.trim(); let contact2 = user2.contact2.trim(); let department2 = user2.department2.trim(); let rollno2 = user2.rollno2.trim(); let password2 = user2.password2.trim(); let confirmPassword2 = user2.confirmPassword2.trim();
      console.log(user);console.log(user2)
      await axios.post('/registersave', { firstName, lastName, email, outlook, department, contact, rollno, password, confirmPassword },{
        headers: {
          'secretkey': process.env.REACT_APP_SECRETKEY
        }
      }).then(
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
        console.log("Registering 2")
        await axios.post('/registersave', { "firstName":firstName2, "lastName":lastName2, "email":email2, "outlook":outlook2, "department":department2, "contact":contact2, "rollno":rollno2, "password":password2, "confirmPassword":confirmPassword2 },{
          headers: {
            'secretkey': process.env.REACT_APP_SECRETKEY
          }
        }).then(
          (res) => {
            const success = res.status === 201;
            if (success) {
              setRegistered2(true);
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
    const mailpass = async (email,email2) => {
      console.log("mailing 1")
      await axios.post('/mailpass', { email }).then(
        (res) => {
          const success = res.data.message === "YES";
          if (success) {
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
              search: `?payId=${paymentID}&text=SUCCESS&name=${user.firstName + " " + user.lastName + ", " + user2.firstName2 + " " + user2.lastName}&email=${user.email+", "+user2.email2}`,
            });
          }
        });
        console.log("mailing 2")
        await axios.post('/mailpass', { "email":email2 }).then(
          (res) => {
            const success = res.data.message === "YES";
            if (success) {
              navigate({
                pathname: '/registration/success',
                search: `?payId=${paymentID}&text=SUCCESS&name=${user.firstName + " " + user.lastName + ", " + user2.firstName2 + " " + user2.lastName2}&email=${user.email+", "+user2.email2}`,
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
                search: `?payId=${paymentID}&text=SUCCESS&name=${user.firstName + " " + user.lastName + ", " + user2.firstName2 + " " + user2.lastName2}&email=${user.email+" & "+user2.email2}`,
              });
            }
          });


    }

    if (resitered && resitered2)
      mailpass(user.email.trim(),user2.email2.trim());
  }, [resitered2]);

  async function handleSubmit(e) {
    var msg;
    e.preventDefault();
    try {
      let firstName = user.firstName.trim(); let lastName = user.lastName.trim(); let email = user.email.trim(); let outlook = user.outlook.trim(); let contact = user.contact.trim(); let department = user.department.trim(); let rollno = user.rollno.trim(); let password = user.password.trim(); let confirmPassword = user.confirmPassword.trim();
      let firstName2 = user2.firstName2.trim(); let lastName2 = user2.lastName2.trim(); let email2 = user2.email2.trim(); let outlook2 = user2.outlook2.trim(); let contact2 = user2.contact2.trim(); let department2 = user2.department2.trim(); let rollno2 = user2.rollno2.trim(); let password2 = user2.password2.trim(); let confirmPassword2 = user2.confirmPassword2.trim();
      console.log(email);
      console.log(email2);
      if (user.password !== user.confirmPassword || user2.password2!==user2.confirmPassword2) {

        toast('Passwords do not match');
        return;
      }
      
      else if (email==email2 || contact==contact2){
        toast('Deatails of 2 persons must be unique 1');
        return;
      }

      else if ((outlook==outlook2) && (outlook !=='') && (outlook2 !=='')){
        toast('Deatails of 2 persons must be unique 2');
        return;
      }

      else if ((rollno==rollno2) && (rollno !=='') && (rollno2 !=='')){
        toast('Deatails of 2 persons must be unique 3');
        return;
      }


      else {
        //Check if outlook, rollno, department, there or nor
        if (outlook || rollno || department) {
          if (outlook && rollno && department) {

          }
          else {
            toast("One or more details are empty if Person 1 is IIT Guwahati student");
            return;
          }
        }
        if (outlook2 || rollno2 || department2) {
          if (outlook2 && rollno2 && department2) {

          }
          else {
            toast("One or more details are empty if Person 2 is IIT Guwahati student");
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
          if (msg === "YES") {
            toast("One of the person has either purchased the pass or his email id exists");
            
            return;
            
          }
          await axios.post('/checkifpurchased', {"email": email2 }).then(
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
        if (msg === "YES") {
          toast("One of the person has either purchased the pass or his email id exists");
          
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
          if (msg === "ROLLNOSAME") {
            toast("Person 1 Roll no. already exists. Recheck")
            return;
          }
          if (msg === "OUTLOOKSAME") {
            toast("Person 1 Outlook already exists. Recheck")
            return;
          }
        }
        console.log(outlook2)
        if (outlook2 && rollno2) {
          await axios.post('/checkoutlook', { "outlook":outlook2,"rollno": rollno2 }).then(
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
            toast("Person 2 Roll no. already exists. Recheck")
            return;
          }
          if (msg == "OUTLOOKSAME") {
            toast("Person 2 Outlook already exists. Recheck")
            return;
          }
        }

        //If they don't then start razorpay
        if (msg === "NO") {
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
                name: user.firstName + " " + user.lastName + " and "+user2.firstName2 + " " + user2.lastName2,
                description: 'UDGAM 2023 transaction',
                order_id: order_id,
                handler: async function (response) {
                  setpaymentID(response.razorpay_payment_id);
                  // Now Payment is completed
                  document.getElementById("warningg").innerText = "Paid, please wait for pass!!"
                  setPaid(true);
                },
                prefill: {
                  name:  user.firstName + " " + user.lastName +" and "+user2.firstName2 + " " + user2.lastName2,
                  email: user.email+", "+user2.email2,
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
      console.log(error)
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
              <h1 className="Pinfo person">PERSON 1</h1>
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
                {/* <p className="H21 info_reg_txt">Discount Code (Use code DECACORN to get flat ₹200 discount)</p>
                <div className="first_last_flex last_field_regg">
                  <input className='wid_text_Field_100' type="text" name="promocode" required={false} placeholder="Enter Discount Code" onChange={handleChange} />
                </div> */}
              </div>
            </div>
            <div className="registerform" >

              <h1 className="Pinfo person">PERSON 2</h1>
              <div className='registerform_div'>
                <div className="first_last_flex">
                  <input className='wid_text_Field_100' type="text" name="firstName2" required={true} placeholder="First name... *"
                    onChange={handleChange} />
                  <input className='wid_text_Field_100' type="text" name="lastName2" required={true} placeholder="Last name... *" onChange={handleChange} />
                </div>
                <br />
                <div className="first_last_flex">
                  <input className='wid_text_Field_100' type="number" name="contact2" pattern="[0-9]{10}" required={true} placeholder="Contact number... *" onChange={handleChange} />
                  <input className='wid_text_Field_100' type="email" name="email2" required={true} placeholder="Type your Email... *" onChange={handleChange} />
                </div>
                <br></br>
                <p className="H21 info_reg_txt">Only for IIT Guwahati Students (Important for Intern Fair)</p>
                <div className="first_last_flex">
                  <input className='wid_text_Field_100' type="email" name="outlook2"  placeholder="Outlook mail id..." onChange={handleChange} />



                  <select className='wid_text_Field_100' id="department2" name="department2" placeholder="Department" onChange={handleChange}>
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
                  <input className='wid_text_Field_100' type="number" name="rollno2" placeholder="Roll no..." onChange={handleChange} />
                </div>
                <br></br>
                <p className="H21 info_reg_txt">Password shoud have at least 8 characters</p>
                <div className="first_last_flex last_field_regg">
                  <input className='wid_text_Field_100' type="password" name="password2" required={true} placeholder="Create Password... *" onChange={handleChange} />
                  <input className='wid_text_Field_100' type="password" name="confirmPassword2" required={true} placeholder="Confirm Password... *" onChange={handleChange} />
                </div>
                {/* <p className="H21 info_reg_txt">Discount Code (Use code DECACORN to get flat ₹200 discount)</p>
                <div className="first_last_flex last_field_regg">
                  <input className='wid_text_Field_100' type="text" name="promocode" required={false} placeholder="Enter Discount Code" onChange={handleChange} />
                </div> */}
              </div>
            </div>
          </div>
          <div className="pass_Card_register">
            {/* the submission design of the form has not decided yet , once it is complete i will continue from it */}


            <div className="card_of_pass_register">
              <img className='cardphoto' src={require("../icons/udgamPassBG.png")} alt="CardBG"></img>
              <img className="udgam7" src={Vector3} />

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

export default RegistrationOffer;
