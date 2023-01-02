import React, { useEffect } from 'react'
import "./Home/navbar_landing.css";
import Icon from "../icons/icon.png"
import Buy from "../icons/Ticket.png"
import Hum from "../icons/hamburger.png"
import Hamburger from './hamburger';
import Humcross from "../icons/Cross Button.svg"
import Hamburgerph from './hamburgerphone';
function Navbar2() {
  useEffect(() => {
    document.getElementById("open_nav").style.display = "block";
    document.getElementById("close_nav").style.display = "none";
  });
  function openNav() {
    console.log("CLICKED")
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("open_nav").style.display = "none";
    document.getElementById("bignav1").style.display = "none";
    document.getElementById("bignav2").style.display = "none";
    document.getElementById("bignav3").style.display = "none";
    document.getElementById("close_nav").style.display = "block";
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("open_nav").style.display = "block";
    document.getElementById("close_nav").style.display = "none";
    document.getElementById("bignav1").style.display = "block";
    document.getElementById("bignav2").style.display = "block";
    document.getElementById("bignav3").style.display = "block";
    document.body.style.overflow = 'unset';
    
  }
  return (
    <>
      <div className='header' id="headernav2">
        <section className='navbar'>
          <div className='image-container'>
            <img src={Icon} alt='logo' />
          </div>

          <div className='second-container'>
            <ul className='nav-links'>
              <li className='nav-item' id="bignav1"><a href='/events'>Events</a></li>
              <li className='nav-item' id="bignav2"><a href='/comingsoon'>Schedule</a></li>
              <li className='nav-item' id="bignav3"><a href='/comingsoon'>Merch</a></li>
            </ul>
            <div className='hamburgerParent' >
              <a onClick={openNav} id="open_nav"><img className='hamburger' src={Hum} alt='menu' /></a>
              <a onClick={closeNav} id="close_nav"><img className='hamburger' src={Humcross} alt='menu' /></a>
            </div>

              <a className="yellobuttonlink" href="/registration">  
            <div className='yellowButtonParent'>
              <div className='yellow-button'>
                <img src={Buy} alt='buy-ticket' />
                <p style={{color:"black !important"}}>BUY PASS</p>
              </div>
            </div>
            </a>
          </div>



        </section>

      </div>
      <div id="myNav" className="overlay">
        {window.innerWidth > 700 ? (
          <Hamburger/>
        ) : (
          <Hamburgerph />
        )
        }

      </div>
    </>
  )
}

export default Navbar2
