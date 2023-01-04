import React from 'react'
import lectureseries from "./../icons/lectureSeries.svg";
import ProducManagement from "./../icons/ProducManagement.svg";
import DisruptHeading from "./../icons/DisruptHeading.svg";
import NeedHeading   from "./../icons/NeedHeading.svg";
import EncodeHeading from "./../icons/EncodeHeading.svg";
import FuneventsHeading from "./../icons/FuneventsHeading.svg";
import WorkshopsHeading from "./../icons/WorkshopsHeading.svg";
import DframeHeading from "./../icons/DframeHeading.svg";
import InternfairHeading from "./../icons/InternfairHeading.svg";
import CosmicClashHeading from "./../icons/CosmicClashHeading.svg";
import Navbar from '../components/Navbar';
import './MoreEvents3.css'
import Line from "./../icons/Line.svg"
import { useState } from 'react';

function MoreEvents3() {
    const [displayls, setDisplayls] = useState(false);
    const [displayif,setDisplayif] = useState(false);
    const [displaypm,setDisplaypm] = useState(false);
    const [displayDis,setDisplayDis] = useState(false);
    const [displayNe,setDisplayNe] = useState(false);
    const [displaySpar,setDisplaySpar] = useState(false);
    const [displayEn,setDisplayEn] = useState(false);
    const [displayFune,setDisplayFune] = useState(false);
    const [displayWorks,setDisplayWorks] = useState(false);
    const [displayDf,setDisplayDf] = useState(false);
    const [displayCosmic,setDisplayCosmic] = useState(false);
  
   const displayLectureSeries = () => {
      if(displayif){ setDisplayif(false)};
      if(displaypm){ setDisplaypm(false)};
        if(displayDis){ setDisplayDis(false)};
        if(displayNe){ setDisplayNe(false)};
        if(displaySpar){ setDisplaySpar(false)};
        if(displayEn){ setDisplayEn(false)};
        if(displayFune){ setDisplayFune(false)};
        if(displayWorks){ setDisplayWorks(false)};
        if(displayDf){ setDisplayDf(false)};
        if(displayCosmic){ setDisplayCosmic(false)};
         setDisplayls(!displayls);
   }
   const displayInternfair = () => {
    if(displayif){ setDisplayif(false)};
      if(displaypm){ setDisplaypm(false)};
        if(displayDis){ setDisplayDis(false)};
        if(displayNe){ setDisplayNe(false)};
        if(displaySpar){ setDisplaySpar(false)};
        if(displayEn){ setDisplayEn(false)};
        if(displayFune){ setDisplayFune(false)};
        if(displayWorks){ setDisplayWorks(false)};
        if(displayDf){ setDisplayDf(false)};
        if(displayCosmic){ setDisplayCosmic(false)};
        if(displayls){ setDisplayls(false)};
        setDisplayif(!displayif);
 }
    const displayProduct= () => {
        if(displayif){ setDisplayif(false)};
       
        if(displayDis){ setDisplayDis(false)};
        if(displayNe){ setDisplayNe(false)};
        if(displaySpar){ setDisplaySpar(false)};
        if(displayEn){ setDisplayEn(false)};
        if(displayFune){ setDisplayFune(false)};
        if(displayWorks){ setDisplayWorks(false)};
        if(displayDf){ setDisplayDf(false)};
        if(displayCosmic){ setDisplayCosmic(false)};
        setDisplaypm(!displaypm);
    }

    const displayDisrupt= () => {
        if(displayif){ setDisplayif(false)};
        if(displaypm){ setDisplaypm(false)};
         
          if(displayNe){ setDisplayNe(false)};
          if(displaySpar){ setDisplaySpar(false)};
          if(displayEn){ setDisplayEn(false)};
          if(displayFune){ setDisplayFune(false)};
          if(displayWorks){ setDisplayWorks(false)};
          if(displayDf){ setDisplayDf(false)};
          if(displayCosmic){ setDisplayCosmic(false)};
            setDisplayDis(!displayDis);
    }
    const displayNeed= () => {
        if(displayif){ setDisplayif(false)};
        if(displaypm){ setDisplaypm(false)};
        if(displayDis){ setDisplayDis(false)};
       
        if(displaySpar){ setDisplaySpar(false)};
        if(displayEn){ setDisplayEn(false)};
        if(displayFune){ setDisplayFune(false)};
        if(displayWorks){ setDisplayWorks(false)};
        if(displayDf){ setDisplayDf(false)};
        if(displayCosmic){ setDisplayCosmic(false)};
        setDisplayNe(!displayNe);
    }
    const displayCosmicClash=()=>{
        if(displayif){ setDisplayif(false)};
        if(displaypm){ setDisplaypm(false)};
        if(displayDis){ setDisplayDis(false)};
        if(displayNe){ setDisplayNe(false)};
        if(displaySpar){ setDisplaySpar(false)};
        if(displayEn){ setDisplayEn(false)};
        if(displayFune){ setDisplayFune(false)};
        if(displayWorks){ setDisplayWorks(false)};
        if(displayDf){ setDisplayDf(false)};
        
        setDisplayCosmic(!displayCosmic);  
    }

    const displayEncode=()=>{
        if(displayif){ setDisplayif(false)};
        if(displaypm){ setDisplaypm(false)};
        if(displayDis){ setDisplayDis(false)};
        if(displayNe){ setDisplayNe(false)};
        if(displaySpar){ setDisplaySpar(false)};
        if(displayFune){ setDisplayFune(false)};
        if(displayWorks){ setDisplayWorks(false)};
        if(displayDf){ setDisplayDf(false)};
        if(displayCosmic){ setDisplayCosmic(false)};
        setDisplayEn(!displayEn);
    }
    const displayFunEvents=()=>{
        if(displayif){ setDisplayif(false)};
        if(displaypm){ setDisplaypm(false)};
        if(displayDis){ setDisplayDis(false)};
        if(displayNe){ setDisplayNe(false)};
        if(displaySpar){ setDisplaySpar(false)};
        if(displayEn){ setDisplayEn(false)};
        if(displayWorks){ setDisplayWorks(false)};
        if(displayDf){ setDisplayDf(false)};
        if(displayCosmic){ setDisplayCosmic(false)};
        setDisplayFune(!displayFune);
    }
    const displayWorkshops=()=>{
        if(displayif){ setDisplayif(false)};
        if(displaypm){ setDisplaypm(false)};
        if(displayDis){ setDisplayDis(false)};
        if(displayNe){ setDisplayNe(false)};
        if(displaySpar){ setDisplaySpar(false)};
        if(displayEn){ setDisplayEn(false)};
        if(displayFune){ setDisplayFune(false)};
        if(displayDf){ setDisplayDf(false)};
        if(displayCosmic){ setDisplayCosmic(false)};
        setDisplayWorks(!displayWorks);
    }
    const displayDframe=()=>{
        if(displayif){ setDisplayif(false)};
        if(displaypm){ setDisplaypm(false)};
        if(displayDis){ setDisplayDis(false)};
        if(displayNe){ setDisplayNe(false)};
        if(displaySpar){ setDisplaySpar(false)};
        if(displayEn){ setDisplayEn(false)};
        if(displayFune){ setDisplayFune(false)};
        if(displayWorks){ setDisplayWorks(false)};
        if(displayCosmic){ setDisplayCosmic(false)};
        setDisplayDf(!displayDf);
    }
  return (
    <div className='entirebody'>
        <Navbar/>
    <div className='bodyeventphone'>
        <div className='lectureseries'>
            <div className='lectureseries__heading' onClick={displayLectureSeries}>
                <img src={lectureseries} alt='lectureseries'/>
            </div>
             { displayls && (<div className='description'>
                                <div id="head">
                                    <div id="date">
                                        <p className="dateText">Date</p>
                                        <p className="date">19-22 Jan</p>
                                    </div>
                                    <a> <button id="register">
                                        <p>Register</p>
                                    </button> </a>
                                </div>
                                <div className="eventtext">
                                    Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?

                                    To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, "Disrupt" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.
                                    Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more.
                                </div>
                                <div className="descFooter">
                                    <div className="block" id="block1">
                                        <div className="footerHeading">
                                            Registration<br />deadline
                                        </div>
                                        <div className="footerText" id="dateevent">
                                            15/1/2023
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block2">
                                        <div className="footerHeading">
                                            Prices Worth
                                        </div>
                                        <div className="footerText" id="prizeevent">
                                            10+ Lakhs
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block3">
                                        <div className="footerHeading">
                                            Payment<br />requirement
                                        </div>
                                        <div className="footerText" id="paidevent">
                                            Paid
                                        </div>
                                    </div>
                                </div>             
                 </div>
                 )}
        </div>

        <div className='lectureseries' style={{marginTop:'20px'}}>
            <div className='lectureseries__heading' onClick={displayInternfair}>
                <img src={InternfairHeading} alt='lectureseries'/>
            </div>
             { displayif && (<div className='description' style={{background: '#192558'}} >
                                <div id="head">
                                    <div id="date">
                                        <p className="dateText">Date</p>
                                        <p className="date">19-22 Jan</p>
                                    </div>
                                    <button id="register">
                                        <p>Register</p>
                                    </button>
                                </div>
                                <div className="eventtext">
                                    Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?

                                    To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, "Disrupt" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.
                                    Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more.
                                </div>
                                <div className="descFooter">
                                    <div className="block" id="block1">
                                        <div className="footerHeading">
                                            Registration<br />deadline
                                        </div>
                                        <div className="footerText" id="dateevent">
                                            15/1/2023
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block2">
                                        <div className="footerHeading">
                                            Prices Worth
                                        </div>
                                        <div className="footerText" id="prizeevent">
                                            10+ Lakhs
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block3">
                                        <div className="footerHeading">
                                            Payment<br />requirement
                                        </div>
                                        <div className="footerText" id="paidevent">
                                            Paid
                                        </div>
                                    </div>
                                </div>             
                 </div>
                 )}
        </div>

        <div className='lectureseries' style={{marginTop:'20px'}} >
            <div className='lectureseries__heading' onClick={displayProduct}>
                <img src={ProducManagement} alt='lectureseries'/>
            </div>
             { displaypm && (<div className='description' style={{background: '#31165C'}} >
                                <div id="head">
                                    <div id="date">
                                        <p className="dateText">Date</p>
                                        <p className="date">19-22 Jan</p>
                                    </div>
                                    <button id="register">
                                        <p>Register</p>
                                    </button>
                                </div>
                                <div className="eventtext">
                                    Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?

                                    To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, "Disrupt" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.
                                    Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more.
                                </div>
                                <div className="descFooter">
                                    <div className="block" id="block1">
                                        <div className="footerHeading">
                                            Registration<br />deadline
                                        </div>
                                        <div className="footerText" id="dateevent">
                                            15/1/2023
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block2">
                                        <div className="footerHeading">
                                            Prices Worth
                                        </div>
                                        <div className="footerText" id="prizeevent">
                                            10+ Lakhs
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block3">
                                        <div className="footerHeading">
                                            Payment<br />requirement
                                        </div>
                                        <div className="footerText" id="paidevent">
                                            Paid
                                        </div>
                                    </div>
                                </div>             
                 </div>
                 )}
        </div>

        <div className='lectureseries' style={{marginTop:'20px'}}>
            <div className='lectureseries__heading' onClick={displayDisrupt}>
                <img src={DisruptHeading} alt=''/>
            </div>
             { displayDis && (<div className='description' style={{background: '#2D1373'}} >
                                <div id="head">
                                    <div id="date">
                                        <p className="dateText">Date</p>
                                        <p className="date">19-22 Jan</p>
                                    </div>
                                    <a href='https://rebrand.ly/Disrupt_Registration'><button id="register">
                                        <p>Register</p>
                                    </button>
                                    </a>
                                </div>
                                <div className="eventtext">
                                    Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?

                                    To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, "Disrupt" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.
                                    Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more.
                                </div>
                                <div className="descFooter">
                                    <div className="block" id="block1">
                                        <div className="footerHeading">
                                            Registration<br />deadline
                                        </div>
                                        <div className="footerText" id="dateevent">
                                            15/1/2023
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block2">
                                        <div className="footerHeading">
                                            Prices Worth
                                        </div>
                                        <div className="footerText" id="prizeevent">
                                            10+ Lakhs
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block3">
                                        <div className="footerHeading">
                                            Payment<br />requirement
                                        </div>
                                        <div className="footerText" id="paidevent">
                                            Paid
                                        </div>
                                    </div>
                                </div>             
                 </div>
                 )}
        </div>

        <div className='lectureseries' style={{marginTop:'20px'}} >
            <div className='lectureseries__heading' onClick={displayNeed}>
                <img src={NeedHeading} alt='lectureseries'/>
            </div>
             { displayNe && (<div className='description' style={{background: '#192558'}} >
                                <div id="head">
                                    <div id="date">
                                        <p className="dateText">Date</p>
                                        <p className="date">19-22 Jan</p>
                                    </div>
                                    <a href='#'><button id="register">
                                        <p>Register</p>
                                    </button>
                                    </a>
                                </div>
                                <div className="eventtext">
                                    Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?

                                    To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, "Disrupt" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.
                                    Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more.
                                </div>
                                <div className="descFooter">
                                    <div className="block" id="block1">
                                        <div className="footerHeading">
                                            Registration<br />deadline
                                        </div>
                                        <div className="footerText" id="dateevent">
                                            15/1/2023
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block2">
                                        <div className="footerHeading">
                                            Prices Worth
                                        </div>
                                        <div className="footerText" id="prizeevent">
                                            10+ Lakhs
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block3">
                                        <div className="footerHeading">
                                            Payment<br />requirement
                                        </div>
                                        <div className="footerText" id="paidevent">
                                            Paid
                                        </div>
                                    </div>
                                </div>             
                 </div>
                 )}
        </div>

        <div className='lectureseries' style={{marginTop:'20px'}}>
            <div className='lectureseries__heading' onClick={displayCosmicClash}>
                <img src={ CosmicClashHeading } alt='lectureseries'/>
            </div>
             { displayCosmic && (<div className='description' style={{background: '#31165C'}} >
                                <div id="head">
                                    <div id="date">
                                        <p className="dateText">Date</p>
                                        <p className="date">19-22 Jan</p>
                                    </div>
                                   <a href='https://linktr.ee/cosmic_clash'> <button id="register">
                                        <p>Register</p>
                                    </button>
                                    </a>
                                </div>
                                <div className="eventtext">
                                    Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?

                                    To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, "Disrupt" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.
                                    Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more.
                                </div>
                                <div className="descFooter">
                                    <div className="block" id="block1">
                                        <div className="footerHeading">
                                            Registration<br />deadline
                                        </div>
                                        <div className="footerText" id="dateevent">
                                            15/1/2023
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block2">
                                        <div className="footerHeading">
                                            Prices Worth
                                        </div>
                                        <div className="footerText" id="prizeevent">
                                            10+ Lakhs
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block3">
                                        <div className="footerHeading">
                                            Payment<br />requirement
                                        </div>
                                        <div className="footerText" id="paidevent">
                                            Paid
                                        </div>
                                    </div>
                                </div>             
                 </div>
                 )}
        </div>

        <div className='lectureseries' style={{marginTop:'20px'}}>
            <div className='lectureseries__heading' onClick={displayEncode}>
                <img src={EncodeHeading} alt='lectureseries'/>
            </div>
             { displayEn && (<div className='description' style={{background: '#192558'}} >
                                <div id="head">
                                    <div id="date">
                                        <p className="dateText">Date</p>
                                        <p className="date">19-22 Jan</p>
                                    </div>
                                    <a href='https://rebrand.ly/EnCode23'><button id="register">
                                        <p>Register</p>
                                    </button>
                                    </a>
                                </div>
                                <div className="eventtext">
                                    Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?

                                    To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, "Disrupt" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.
                                    Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more.
                                </div>
                                <div className="descFooter">
                                    <div className="block" id="block1">
                                        <div className="footerHeading">
                                            Registration<br />deadline
                                        </div>
                                        <div className="footerText" id="dateevent">
                                            15/1/2023
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block2">
                                        <div className="footerHeading">
                                            Prices Worth
                                        </div>
                                        <div className="footerText" id="prizeevent">
                                            10+ Lakhs
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block3">
                                        <div className="footerHeading">
                                            Payment<br />requirement
                                        </div>
                                        <div className="footerText" id="paidevent">
                                            Paid
                                        </div>
                                    </div>
                                </div>             
                 </div>
                 )}
        </div>

        <div className='lectureseries' style={{marginTop:'20px'}}>
            <div className='lectureseries__heading' onClick={displayFunEvents}>
                <img src={FuneventsHeading} alt='lectureseries'/>
            </div>
             { displayFune && (<div className='description' style={{background: '#31165C'}} >
                                <div id="head">
                                    <div id="date">
                                        <p className="dateText">Date</p>
                                        <p className="date">19-22 Jan</p>
                                    </div>
                                    <button id="register">
                                        <p>Register</p>
                                    </button>
                                </div>
                                <div className="eventtext">
                                    Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?

                                    To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, "Disrupt" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.
                                    Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more.
                                </div>
                                <div className="descFooter">
                                    <div className="block" id="block1">
                                        <div className="footerHeading">
                                            Registration<br />deadline
                                        </div>
                                        <div className="footerText" id="dateevent">
                                            15/1/2023
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block2">
                                        <div className="footerHeading">
                                            Prices Worth
                                        </div>
                                        <div className="footerText" id="prizeevent">
                                            10+ Lakhs
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block3">
                                        <div className="footerHeading">
                                            Payment<br />requirement
                                        </div>
                                        <div className="footerText" id="paidevent">
                                            Paid
                                        </div>
                                    </div>
                                </div>             
                 </div>
                 )}
        </div>

        <div className='lectureseries' style={{marginTop:'20px'}}>
            <div className='lectureseries__heading' onClick={displayWorkshops}>
                <img src={WorkshopsHeading} alt='lectureseries'/>
            </div>
             { displayWorks && (<div className='description' style={{background: '#192558'}} >
                                <div id="head">
                                    <div id="date">
                                        <p className="dateText">Date</p>
                                        <p className="date">19-22 Jan</p>
                                    </div>
                                    <button id="register">
                                        <p>Register</p>
                                    </button>
                                </div>
                                <div className="eventtext">
                                    Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?

                                    To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, "Disrupt" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.
                                    Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more.
                                </div>
                                <div className="descFooter">
                                    <div className="block" id="block1">
                                        <div className="footerHeading">
                                            Registration<br />deadline
                                        </div>
                                        <div className="footerText" id="dateevent">
                                            15/1/2023
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block2">
                                        <div className="footerHeading">
                                            Prices Worth
                                        </div>
                                        <div className="footerText" id="prizeevent">
                                            10+ Lakhs
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block3">
                                        <div className="footerHeading">
                                            Payment<br />requirement
                                        </div>
                                        <div className="footerText" id="paidevent">
                                            Paid
                                        </div>
                                    </div>
                                </div>             
                 </div>
                 )}
        </div>

        <div className='lectureseries' style={{marginTop:'20px'}}>
            <div className='lectureseries__heading' onClick={displayDframe}>
                <img src={DframeHeading} alt='lectureseries'/>
            </div>
             { displayDf && (<div className='description' style={{background: '#2D1373'}} >
                                <div id="head">
                                    <div id="date">
                                        <p className="dateText">Date</p>
                                        <p className="date">19-22 Jan</p>
                                    </div>
                                    <a href='https://unstop.com/competition/dframe-creative-branding-challenge-udgam-2023-indian-institute-of-technology-iit-guwahati-566698'><button id="register" >
                                        <p>Register</p>
                                    </button>
                                    </a>
                                </div>
                                <div className="eventtext">
                                    Are you an entrepreneur looking to start your journey into the outer world? or Are you a startup owner looking for some unique growth opportunities?

                                    To encourage, inspire and aid entrepreneurs, UDGAM 2022, IIT Guwahati, brings you its flagship event, "Disrupt" presented by GoToPitch, North-East India's largest B-Plan competition. We bring to you the platform through which you can attract and impress India's finest business minds who can turn your captivating idea into a surreal certainty.
                                    Join the biggest pitch battle, which offers you fascinating prizes worth Rs 10 Lakhs+, Funding opportunities, Pre-Events, Workshops, Networking, AMA sessions, Free Legal Services, and much more.
                                </div>
                                <div className="descFooter">
                                    <div className="block" id="block1">
                                        <div className="footerHeading">
                                            Registration<br />deadline
                                        </div>
                                        <div className="footerText" id="dateevent">
                                            15/1/2023
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block2">
                                        <div className="footerHeading">
                                            Prices Worth
                                        </div>
                                        <div className="footerText" id="prizeevent">
                                            10+ Lakhs
                                        </div>
                                    </div>
                                    <img src={Line} alt="" />
                                    <div className="block" id="block3">
                                        <div className="footerHeading">
                                            Payment<br />requirement
                                        </div>
                                        <div className="footerText" id="paidevent">
                                            Paid
                                        </div>
                                    </div>
                                </div>             
                 </div>
                 )}
        </div>

        

    </div>

    </div>
  )
}

export default MoreEvents3
