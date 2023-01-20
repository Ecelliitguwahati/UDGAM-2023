import React from 'react'
import "./hamburger.css"

import "./Home/navbar_landing.css";


import Navbar from './Navbar';
function Hamburgerph() {
    return (
        <>


            <body className="humburgphone">


                <div className='navbarphone'>
                    <a href="/events">Events</a>
                </div>
                <div className='navbarphone'>
                    <a href="/schedule">Schedule</a>
                </div>
                <div className='navbarphone'>
                    <a href="/#merch">Merch</a>
                </div>
                <div className='navbarphone'>
                    <a href="/speakers">Speakers</a>
                </div>
                <div className='navbarphone'>
                    <a href="/contactus">Contact us</a>
                </div>
                <div className='navbarphone'>
                    <a href="/ourteam">Our team</a>
                </div>
                <div className='navbarphone'>
                    <a href="/sponsors">Sponsors</a>
                </div>
                <div className='navbarphone'>
                    <a href="https://www.ecelliitg.in">About us</a>
                </div>
            </body>
        </>
    );
}

export default Hamburgerph
