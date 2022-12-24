import React from 'react'
import "./hamburger.css"
import { Button } from '@cred/neopop-web/lib/components';
import "./Home/navbar_landing.css";
import Icon from "../icons/icon.png"
import Buy from "../icons/Ticket.png"

import Navbar from './Navbar';
function Hamburgerph() {
    return (
        <>


            <body className="humburgphone">
            

                <div className='navbarphone'>
                    <a href="/events">Events</a>
                </div>
                <div className='navbarphone'>
                    <a href="/">Schedule</a>
                </div>
                <div className='navbarphone'>
                    <a href="/#merch">Merch</a>
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
