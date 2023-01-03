import React from 'react'
import internfair from "./../icons/internfair.svg";
import ls from "./../icons/ls.svg";
import need from "./../icons/need.svg";
import pmx from "./../icons/pmx.svg";
import sparkle from "./../icons/sparkle.svg";
import Dframe from "./../icons/Dframe.svg";
import disrupt from "./../icons/disrupt.svg";
import encode from "./../icons/encode.svg";
import funEvents from "./../icons/funEvents.svg";
import workshops from "./../icons/workshops.svg";
import cosmicClash from "./../icons/cosmicClash.svg";
import lectureseries from "./../icons/lectureSeries.svg";
import ProducManagement from "./../icons/ProducManagement.svg";
import DisruptHeading from "./../icons/DisruptHeading.svg";
import NeedHeading   from "./../icons/NeedHeading.svg";
import SparkleHeading from "./../icons/SparkleHeading.svg";
import EncodeHeading from "./../icons/EncodeHeading.svg";
import FuneventsHeading from "./../icons/FuneventsHeading.svg";
import WorkshopsHeading from "./../icons/WorkshopsHeading.svg";
import DframeHeading from "./../icons/DframeHeading.svg";
import InternfairHeading from "./../icons/InternfairHeading.svg";
import CosmicClashHeading from "./../icons/CosmicClashHeading.svg";
import './MoreEvents3.css'
import Line from "./../icons/Line.svg"
import { useState } from 'react';

function MoreEvents3() {
    const [displayls, setDisplayls] = useState(false);
    const [displayif,setDisplayif] = useState(false);
    const eventsdata = [
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "ls",
            "id": "b1",
            "ori": "left",
            "date": "Jan 20, 2023 16:37:25",
            "info": 2,
            "image": ls,
            "prize": "NILL",
            "eventName": "LECTURE SERIES",
            "payment": "Paid",
            "link": "https://www.fb.com",
            "eventDesc": " “A person who has experienced something is almost always far more expert than the experts. “<br> <br>Lecture Series brings to you the words of the experienced, their wisdom, and their insights on entrepreneurship and the journey of building a startup from a mere idea to success. We aim to bring the greatest of the professionals to spark your minds and motivate your entrepreneurial self.<br><br>Some of our past speakers:<br><br>•Charlie Cheever - Cofounder, Quora<br>•Jimmy Wales - Founder, Wikipedia<br>•Pulkit Jain - Cofounder, Vedantu<br>•Kevin Harrington - Original Shark, SharkTank<br>•Amod Malviya - Cofounder, Udaan<br>and many more…<br>"

        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "internfair",
            "id": "b2",
            "ori": "left",
            "date": "Jan 20, 2023 16:37:25",
            "image": internfair,
            "info": 2,
            "prize": "Internship",
            "eventName": "INTERNFAIR",
            "payment": "Paid", "link": "https://www.fb.com",
            "eventDesc": "An exclusive event for IIT Guwahati peeps, InternFair brings internship opportunities to students in various profiles like Software Development, Analytics, Product Management, and many more. This is a top-notch opportunity for the students to gain industry experience and also prepares them for the upcoming internship and placement processes."
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "pmx",
            "id": "b3",
            "ori": "left",
            "date": "Dec 20, 2022 16:37:25",
            "image": pmx,
            "info": 1,
            "prize": "100K+",
            "eventName": "PMx",
            "payment": "Free", "link": "https://www.fb.com",
            "eventDesc": "PMx is India’s largest* product case study competition. One has to bring out his observational, analytical, and researcher instinct and pour them out on the problem statement we provide. It is an item contextual analysis rivalry where you will encounter the adventure of chipping away at an item, rowing the product cycle, and making an incredible product that your clients will adore.            "
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "disrupt",
            "id": "b4",
            "ori": "left",
            "date": "Dec 30, 2022 23:59:59",
            "image": disrupt,
            "info": 0,
            "prize": "10 Lakhs+",
            "eventName": "DISRUPT",
            "payment": "Free", "link": "https://rebrand.ly/Disrupt_Registration",
            "eventDesc": "Disrupt is North East India’s Largest Pitching Battle where startups get a platform to pitch their idea to investors, Angel investors, and Venture Capitalists. In our previous editions, we had Michael Sibel, CEO of Y-Combinator as one of the panelists. Top finalists are provided with mentorship, incubation, and business tools alongside prizes and investment opportunities for winners."
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "need",
            "id": "b5",
            "ori": "left",
            "date": "Jan 20, 2022 16:37:25",
            "prize": "1 Lakhs+",
            "info": 1,
            "image": need,
            "eventName": "NEED",
            "payment": "Free", "link": "https://www.fb.com",
            "eventDesc": "Introducing our brand new event, North East Entrepreneurship Drive aka NEED where we aim to promote the entrepreneur environment and startup urge by helping institutes of North East India set up their own Entrepreneurship Cells in their institutes.  "
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "cosmicclash",
            "id": "b6",
            "ori": "left",
            "date": "Jan 10, 2023 23:59:59",
            "prize": "10 Lakhs+",
            "info": 0,
            "image": cosmicClash,
            "eventName": "COSMIC CLASH",
            "payment": "Paid", "link": "https://linktr.ee/cosmic_clash",
            "eventDesc": "Introducing our brand new event, North East Entrepreneurship Drive aka NEED where we aim to promote the entrepreneur environment and startup urge by helping institutes of North East India set up their own Entrepreneurship Cells in their institutes. "
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "dframe",
            "id": "b7",
            "ori": "right",
            "date": "Jan 9, 2023 23:59:59",
            "info": 0,
            "prize": "25 K+",
            "image": Dframe,
            "eventName": "D-FRAME",
            "payment": "Free", "link": "https://unstop.com/competition/dframe-creative-branding-challenge-udgam-2023-indian-institute-of-technology-iit-guwahati-566698",
            "eventDesc": "DFrame is a one of its kind UI/UX competition. Aimed to inculcate and enhance one's creativity with the business need of companies, DFrame tests the designer's innovative quotient by flexing their design muscle to find technical solutions while staying true to the human-centric approach."
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon    
        {
            "tag": "encode",
            "id": "b8",
            "ori": "right",
            "date": "Jan 2, 2023 16:37:25",
            "info": 0,
            "prize": "1.2 Lakhs+",
            "image": encode,
            "eventName": "ENCODE",
            "payment": "Free", "link": "https://rebrand.ly/EnCode23",
            "eventDesc": "An entrepreneur’s task is to solve real-life real-world problems by developing a feasible solution that caters to everyone's needs be it the users or the market. Focussing on this, Encode is a development hackathon where you will be provided with a real-life problem and you have to devise a solution for it."
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "funevents",
            "id": "b9",
            "ori": "right",
            "date": "Jan 20, 2023 16:37:25",
            "info": 2,
            "prize": "5K+",
            "image": funEvents,
            "eventName": "FUN EVENTS",
            "payment": "Paid", "link": "https://www.fb.com",
            "eventDesc": "UDGAM is not only about boring learning and teaching. We also organize various fun events such as Stonks 11, IPL Auction, Speed Dating, etc."
        },

        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "sparkle",
            "id": "b10",
            "ori": "right",
            "info": 2,
            "prize": "NILL",
            "date": "Jan 20, 2023 16:37:25",
            "image": sparkle,
            "eventName": "SPARKLE",
            "payment": "Free", "link": "https://www.fb.com",
            "eventDesc": "Minutes of the spotlight to showcase your entrepreneurship and pitching skills exclusive for young teenagers. Sparkle is a pitching ground for school students and an opportunity to show themselves under the unwavering attention of the whole panel, including various Angel Investors and Venture Capitalists, to put their startup idea. "
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "workshops",
            "id": "b11",
            "ori": "right",
            "info": 2,
            "prize": "NILL",
            "date": "Jan 20, 2023 16:37:25",
            "image": workshops,
            "eventName": "WORKSHOPS",
            "payment": "Paid", "link": "https://www.fb.com",
            "eventDesc": "The Start-up World is saturated with intricate concepts, all of which combined have near-infinite applications. This workshop series, endeavors to break these concepts down into a digestible yet comprehensive guide, via industry experts, and Q&A sessions on these interesting topics. "
        }

    ]
  
   const displayLectureSeries = () => {
      if(displayif){ setDisplayif(false)};
      setDisplayls(!displayls);
   }
   const displayInternfair = () => {
    if(displayls){ setDisplayls(false)};
    setDisplayif(!displayif);
 }
  return (
    <div className='body'>
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

        <div className='lectureseries'>
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

        <div className='lectureseries'>
            <div className='lectureseries__heading' onClick={displayInternfair}>
                <img src={ProducManagement} alt='lectureseries'/>
            </div>
             { displayif && (<div className='description' style={{background: '#31165C'}} >
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

        <div className='lectureseries'>
            <div className='lectureseries__heading' onClick={displayInternfair}>
                <img src={DisruptHeading} alt=''/>
            </div>
             { displayif && (<div className='description' style={{background: '#2D1373'}} >
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

        <div className='lectureseries'>
            <div className='lectureseries__heading' onClick={displayInternfair}>
                <img src={NeedHeading} alt='lectureseries'/>
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

        <div className='lectureseries'>
            <div className='lectureseries__heading' onClick={displayInternfair}>
                <img src={ CosmicClashHeading } alt='lectureseries'/>
            </div>
             { displayif && (<div className='description' style={{background: '#31165C'}} >
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

        <div className='lectureseries'>
            <div className='lectureseries__heading' onClick={displayInternfair}>
                <img src={EncodeHeading} alt='lectureseries'/>
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

        <div className='lectureseries'>
            <div className='lectureseries__heading' onClick={displayInternfair}>
                <img src={FuneventsHeading} alt='lectureseries'/>
            </div>
             { displayif && (<div className='description' style={{background: '#31165C'}} >
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

        <div className='lectureseries'>
            <div className='lectureseries__heading' onClick={displayInternfair}>
                <img src={WorkshopsHeading} alt='lectureseries'/>
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

        <div className='lectureseries'>
            <div className='lectureseries__heading' onClick={displayInternfair}>
                <img src={DframeHeading} alt='lectureseries'/>
            </div>
             { displayif && (<div className='description' style={{background: '#2D1373'}} >
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

        

    </div>
  )
}

export default MoreEvents3
