import React from 'react'
import speak from "../../icons/speaker.png"
import photo from "../../icons/photo.png"
import './Speakers.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import charlie from "../../PhotosPng/charlie.png"
import jimmy from "../../PhotosPng/jimmy.png"
import pulkit from "../../PhotosPng/pulkit.png"
import kevin from "../../PhotosPng/kevin.png"
import michael from "../../PhotosPng/michael.png"
import ankur from "../../PhotosPng/ankur.png"
import amit from "../../PhotosPng/amit.png"
import amod from "../../PhotosPng/amod.png"
import ankit from "../../PhotosPng/ankit.png"
import rohit from "../../PhotosPng/rohit.png"
import kaushik from "../../PhotosPng/kaushik.png"
import brijesh from "../../PhotosPng/brijesh.png"
import bgy from "../../photos/bgy.svg";
import bgg from "../../photos/bgg.svg";
import iny from "../../icons/inY.svg";
import ing from "../../icons/inG.svg";

import '../../pages/ourteam.css';
import Box from './box'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function PastSpeakers() {
  return (
    <>
      <div className='pastSpeaker' style={{ backgroundColor: "#0c0227" }}>
        <div className="top">
          <h1>PAST SPEAKERS</h1>
        </div>
        <Carousel responsive={responsive} className="car">
          <div className="img">
            <Box in={iny} bg={bgy} img={charlie} name="Charlie Cheever" comp="Quora" desg="Co-Founder" link="https://www.linkedin.com/in/ccheever/" />
          </div>
          <div className="img">
            <Box in={ing} bg={bgg} img={jimmy} name="Jimmy Wales" comp="Wikipedia" desg="Founder" link="https://www.linkedin.com/in/jimmy-wales-919a8b/" />
          </div>
          <div className="img">
            <Box in={iny} bg={bgy} img={pulkit} name="Pulkit Jain" comp="Vedantu" desg="Co-Founder" link="https://www.linkedin.com/in/jainpulkit/" />
          </div>
          <div className="img">
            <Box in={ing} bg={bgg} img={kevin} name="Kevin Harrington" comp="Shark Tank" desg="Original Shark" link="https://www.linkedin.com/in/thekevinharrington/"/>
          </div>
          <div className="img">
            <Box in={iny} bg={bgy} img={michael} name="Michael Siebel" comp="Y-Combinator" desg="CEO" link="https://www.linkedin.com/in/thekevinharrington/"/>
          </div>
          <div className="img">
            <Box in={ing} bg={bgg} img={ankur} name="Ankur Warikoo" comp="Nearbuy" desg="Founder" link="https://www.linkedin.com/in/warikoo/"/>
          </div>
          <div className="img">
            <Box in={iny} bg={bgy} img={amit} name="Amit Agarwal" comp="No Broker" desg="CEO & Founder" link="https://www.linkedin.com/in/amit-kumar-agarwal-5b30301/"/>
          </div>
          <div className="img">
            <Box in={ing} bg={bgg} img={amod} name="Amod Malviya" comp="Udaan" desg="Co-Founder" link="https://www.linkedin.com/in/amodm/"/>
          </div><div className="img">
            <Box in={iny} bg={bgy} img={ankit} name="Ankit Nagori" comp="Cure.Fit" desg="Founder" link="https://www.linkedin.com/in/ankitnagori/"/>
          </div><div className="img">
            <Box in={ing} bg={bgg} img={rohit} name="Rohit Kapoor" comp="Swiggy" desg="CEO" link="https://in.linkedin.com/in/rohit-kapoor-99a30436"/>
          </div><div className="img">
            <Box in={iny} bg={bgy} img={kaushik} name="Kaushik Mitra" comp="Pepsico India" desg="CEO & VP" link="https://in.linkedin.com/in/kmitra"/>
          </div><div className="img">
            <Box in={ing} bg={bgg} img={brijesh} name="Brijesh Agarwal" comp="Indiamart" desg="Co-Founder & Director" link="https://www.linkedin.com/in/brijeshagrawal"/>
          </div>
        </Carousel>;

      </div></>
  )
}

export default PastSpeakers
