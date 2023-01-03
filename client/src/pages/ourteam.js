import React from 'react'
import { Button } from '@cred/neopop-web/lib/components';
import './ourteam.css';
import Downicon from '../icons/Down.svg'
import Closeicon from '../icons/Close.svg'
import speak from "../icons/speaker.png"
import linkicon from "../icons/Frame 34161.png"
import Navbar from '../components/Navbar';
import Member from './member';
import anushka from '../PhotosPng/ankusha.png';
import krish from '../PhotosPng/krish.png';
import krishna from '../PhotosPng/krishna.png';
import mohitp from '../PhotosPng/mohitp.png';
import raghav from '../PhotosPng/raghav.png';
import sahil from '../PhotosPng/sahil.png';
import shyam from '../PhotosPng/shyam.png';
import souma from '../PhotosPng/souma.png';
import bhoomika from '../PhotosPng/bhomika.png';
import umang from '../PhotosPng/umang.png';
import ved from '../PhotosPng/ved.png';
import soham from '../PhotosPng/soham.png';
import Footer from '../components/Home/footer';
import Dropdown from './dropdown';
import teams from '../PhotosPng/team.png';
function OurTeam() {
    function myFunction() {
        console.log("Imrunning out");
        // document.getElementById("img1").src = "assets/img/Close.svg";
        var x = document.getElementById("img123");
        console.log(Downicon);


        if (x.src == { Downicon }) {
            console.log("Imrunning in");
            x.src = Closeicon
        }
        if (x.src == Closeicon) {
            console.log("Imrunning in");
            x.src = Downicon
        }
    }


    return (
        <>
            <div className='teampage'><Navbar />
                <div className="topallmembers">
                    <h1>MEET THE TEAM</h1>
                </div>
                <div className='teamC' >
                    <Member name="Umang Jain" pos="Convener" img={umang} link="https://www.linkedin.com/in/umang1821/"/>
                    <Member name="Krishna Khakholia" pos="Secretary" img={krishna} link="https://www.linkedin.com/in/kkhakholia841/" />
                    <Member name="Sahil Nizam" pos="Coordinator" img={sahil} link="https://www.linkedin.com/in/sahilnizam12/"  />
                    <Member name="Vedaprakash Rajan" pos="Design Head" img={ved} link="https://www.linkedin.com/in/vedaprakashr/" />
                    <Member name="Anushka Gandhi" pos="Design Head" img={anushka} link="https://www.linkedin.com/in/anushka-gandhi-4b99b4217/" />
                    <Member name="Krish Rajpal" pos="Disrupt Head" img={krish} link="https://www.linkedin.com/in/krish-rajpal-b60310209/" />
                    <Member name="Raghav Mittal" pos="Initiatives Head" img={raghav} link="https://www.linkedin.com/in/raghavmittal123/" />
                    <Member name="Shyam D" pos="Corporate Relations Head" img={shyam} link="https://www.linkedin.com/in/shyamd007/"/>
                    <Member name="Soumadip Das" pos="DevOps Head" img={souma} link="https://www.linkedin.com/in/soumadip-das/" />
                    <Member name="Mohit Pal" pos="PMx Head" img={mohitp} link="https://www.linkedin.com/in/mohitpal01/"/>
                    <Member name="Soham Parundekar" pos="PR and Branding Head" img={soham} link="https://www.linkedin.com/in/sohamparundekar/" />
                    <Member name="Bhoomika Dhaka" pos="GnS Head" img={bhoomika} link="https://www.linkedin.com/in/bhoomikdhaka12/"/>
                </div>

                <div id="teamD">
                    <Dropdown team="DESIGN" img={teams}/>
                    <Dropdown team="DISRUPT" img={teams}/>
                    <Dropdown team="PMX" img={teams}/>
                    <Dropdown team="GROWTH AND STRATEGY" img={teams}/>
                    <Dropdown team="TEAM INITIATIVES" img={teams}/>
                    <Dropdown team="INTERNFAIR" img={teams}/>
                    <Dropdown team="LS AND WORKSHOPS" img={teams}/>
                    <Dropdown team="MARKETING" img={teams}/>
                    <Dropdown team="NEED" img={teams}/>

                </div>



<Footer/>
            </div>


        </>
    );
}

export default OurTeam;
