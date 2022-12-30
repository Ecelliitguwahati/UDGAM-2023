import React from 'react'
import { Button } from '@cred/neopop-web/lib/components';
import './allspeaker.css'
import Navbar from '../components/Navbar';
import './ourteam.css';import charlie from "../PhotosPng/charlie.svg"
import jimmy from "../PhotosPng/jimmy.svg"
import pulkit from "../PhotosPng/pulkit.svg"
import kevin from "../PhotosPng/kevin.svg"
import michael from "../PhotosPng/michael.svg"
import ankur from "../PhotosPng/ankur.svg"
import amit from "../PhotosPng/amit.svg"
import amod from "../PhotosPng/amod.svg"
import ankit from "../PhotosPng/ankit.svg"
import rohit from "../PhotosPng/rohit.svg"
import kaushik from "../PhotosPng/kaushik.svg"
import brijesh from "../PhotosPng/brijesh.svg"
import linkicon from "../icons/Frame 341665.png"
import Footer from '../components/Home/footer';
import bgy from "../photos/bgy.svg";
import bgg from "../photos/bgg.svg";
import iny from "../icons/inY.svg";
import ing from "../icons/inG.svg";
import Box from "./../components/Home/box"
function AllSpeakers() {
    return (
        < body  style={{ height: "max-content", background: "#09021C", overflowX: "hidden" }}>
            <Navbar />
            <div className='pasts'>
            <h1 className='pastspeakerstitle'>PAST SPEAKERS</h1>

            <div class="sliderspeak row">

                <div className='row'>
                <div className="img col-lg-3 col-sm-12">
                        <Box in={iny} bg={bgy} img={charlie} name="Charlie Cheever" comp="Quora" desg="Co-Founder" link="https://www.linkedin.com/in/ccheever/" />

          </div>
          <div className="img col-lg-3 col-sm-12">
                      <Box in={ing} bg={bgg} img={jimmy} name="Jimmy Wales" comp="Wikipedia" desg="Founder" link="https://www.linkedin.com/in/jimmy-wales-919a8b/" />

          </div>
          <div className="img col-lg-3 col-sm-12">
                      <Box in={iny} bg={bgy} img={pulkit} name="Pulkit Jain" comp="Vedantu" desg="Co-Founder" link="https://www.linkedin.com/in/jainpulkit/" />

          </div>
          <div className="img col-lg-3 col-sm-12">
                      <Box in={ing} bg={bgg} img={kevin} name="Kevin Harrington" comp="Shark Tank" desg="Original Shark" link="https://www.linkedin.com/in/thekevinharrington/"/>
          </div>
          <div className="img col-lg-3 col-sm-12">
                      <Box in={iny} bg={bgy} img={michael} name="Michael Siebel" comp="Y-Combinator" desg="CEO" link="https://www.linkedin.com/in/mwseibel/"/>

          </div>
          <div className="img col-lg-3 col-sm-12">
                      <Box in={ing} bg={bgg} img={ankur} name="Ankur Warikoo" comp="Nearbuy" desg="Founder" link="https://www.linkedin.com/in/warikoo/"/>

          </div>
          <div className="img col-lg-3 col-sm-12">
                      <Box in={iny} bg={bgy} img={amit} name="Amit Agarwal" comp="No Broker" desg="CEO & Founder" link="https://www.linkedin.com/in/amit-kumar-agarwal-5b30301/"/>

          </div>
          <div className="img col-lg-3 col-sm-12">
                      <Box in={ing} bg={bgg} img={amod} name="Amod Malviya" comp="Udaan" desg="Co-Founder" link="https://www.linkedin.com/in/amodm/"/>

          </div><div className="img col-lg-3 col-sm-12">
                      <Box in={iny} bg={bgy} img={ankit} name="Ankit Nagori" comp="Cure.Fit" desg="Founder" link="https://www.linkedin.com/in/ankitnagori/"/>

          </div><div className="img col-lg-3 col-sm-12">
          <Box in={ing} bg={bgg} img={rohit} name="Rohit Kapoor" comp="Swiggy" desg="CEO" link="https://in.linkedin.com/in/rohit-kapoor-99a30436"/>

          </div><div className="img col-lg-3 col-sm-12">
          <Box in={iny} bg={bgy} img={kaushik} name="Kaushik Mitra" comp="Pepsico India" desg="CEO & VP" link="https://in.linkedin.com/in/kmitra"/>

          </div><div className="img col-lg-3 col-sm-12">
          <Box in={ing} bg={bgg} img={brijesh} name="Brijesh Agarwal" comp="Indiamart" desg="Co-Founder & Director" link="https://www.linkedin.com/in/brijeshagrawal"/>
          </div>
                </div>

            </div>
            </div>
            <Footer/>
        </body>
    );
}

export default AllSpeakers
