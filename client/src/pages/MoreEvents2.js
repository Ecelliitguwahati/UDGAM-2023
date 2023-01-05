import React, { useEffect } from 'react';
import arrowR from "./../icons/arrowR.svg";
import arrowL from "./../icons/arrowL.svg";
// import boxELBG from "./../icons/boxELBG.svg";
// import boxERBG from "./../icons/boxERBG.svg";
// import boxLine from "./../icons/boxLine.svg";
// import boxOLBG from "./../icons/boxOLBG.svg";
// import boxORBG from "./../icons/boxORBG.svg";
// import clickedArrowL from "./../icons/clickedArrowL.svg";
// import clickedArrowR from "./../icons/clickedArrowR.svg";
import cosmicClash from "./../icons/cosmicClash.svg";
import Countdown from "react-countdown";
import Dframe from "./../icons/Dframe.svg";
import disrupt from "./../icons/disrupt.svg";
import encode from "./../icons/encode.svg";
import funEvents from "./../icons/funEvents.svg";
import { useLocation } from "react-router-dom";
import Line from "./../icons/Line.svg";
import internfair from "./../icons/internfair.svg";
import live from "./../icons/live.png";
import Logo from "./../icons/Logo.svg";
import ls from "./../icons/ls.svg";
import need from "./../icons/need.svg";
import pmx from "./../icons/pmx.svg";
import sparkle from "./../icons/sparkle.svg";
import workshops from "./../icons/workshops.svg";
import "./moreEvents.css";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Home/footer';
import eventsdummy from "./../PhotosPng/eventsdummy.svg";
const MoreEvents2 = () => {
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
            "eventDesc": " “The Lecture Series brings together the most seasoned and accomplished professionals to impart their wisdom, insights, and experiences on the journey to building a successful startup. Gives you a chance to learn from the best, grow as an entrepreneur, and turn your ideas into a thriving business. "

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
            "tag": "startupexpo",
            "id": "b3",
            "ori": "left",
            "date": "Jan 19, 2023 23:59:59",
            "image": pmx,
            "info": 0,
            "prize": "NILL",
            "eventName": "STARTUP EXPO",
            "payment": "Free", "link": "https://rebrand.ly/Startup-Expo-Brochure",
            "eventDesc": "Startup Expo is a unique opportunity for startups to showcase their products or services, receive valuable customer feedback, and connect with potential investors. It is being organised with the goal of promoting innovation and entrepreneurship and providing a platform for startups to exchange ideas and explore research and development opportunities."
        },
        {
            "tag": "pmx",
            "id": "b4",
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
            "id": "b5",
            "ori": "left",
            "date": "Jan 5, 2023 23:59:59",
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
            "id": "b6",
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
            "id": "b7",
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
            "id": "b8",
            "ori": "right",
            "date": "Jan 9, 2023 23:59:59",
            "info": 0,
            "prize": "25 K+",
            "image": Dframe,
            "eventName": "D-FRAME",
            "payment": "Free", "link": "https://linktr.ee/dframe",
            "eventDesc": "DFrame is a one of its kind UI/UX competition. Aimed to inculcate and enhance one's creativity with the business need of companies, DFrame tests the designer's innovative quotient by flexing their design muscle to find technical solutions while staying true to the human-centric approach."
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon    
        {
            "tag": "encode",
            "id": "b9",
            "ori": "right",
            "date": "Jan 6, 2023 16:37:25",
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
            "id": "b10",
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
            "id": "b11",
            "ori": "right",
            "info": 0,
            "prize": "40K+",
            "date": "Jan 7, 2023 23:59:59",
            "image": sparkle,
            "eventName": "SPARKLE",
            "payment": "Free", "link": "https://docs.google.com/forms/d/e/1FAIpQLSeMH92AxnP5V8EEHzbGmTXl0VZS9BtBQRPh4xPqU77tWsdYKw/viewform",
            "eventDesc": "Minutes of the spotlight to showcase your entrepreneurship and pitching skills exclusive for young teenagers. Sparkle is a pitching ground for school students and an opportunity to show themselves under the unwavering attention of the whole panel, including various Angel Investors and Venture Capitalists, to put their startup idea. "
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "workshops",
            "id": "b12",
            "ori": "right",
            "info": 0,
            "prize": "NILL",
            "date": "Jan 5, 2023 23:59:59",
            "image": workshops,
            "eventName": "LINKEDIN WORKSHOP",
            "payment": "Paid", "link": "http://rebrand.ly/linkedinworkshop12",
            "eventDesc": "Boost your professional skills and network with top industry leaders at the LinkedIn workshop to get mentored from National and International LinkedIn Coaches and Strategist. Join us for a three-day workshop on 5-6-7th January from 6.30 pm onwards and learn the latest tips and tricks. It will be a Certified Workshop"

        }
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        ,
        {
            "tag": "stonks",
            "id": "b13",
            "ori": "right",
            "info": 0,
            "prize": "15K+",
            "date": "Jan 16, 2023 23:59:59",
            "image": workshops,
            "eventName": "STONKS 11",
            "payment": "Free", "link": "https://unstop.com/competition/stonks-11-virtual-stock-market-udgam-2023-indian-institute-of-technology-iit-guwahati-578073",
            "eventDesc": "Stonks 11 is a Four Day Stock Market Simulation game that’ll test and challenge the trader within you. Use your stock market knowledge without actually investing. Experience investing in the most risk-free way possible!"
        }

    ]

    const search = useLocation().search;
    useEffect(() => {
        var i = 0;
        eventsdata.forEach((eventsda) => {
            document.getElementById(eventsda.tag).className = "containerM"
            // document.getElementById(eventsda.tag).className = "content"
            document.getElementsByClassName("containerM")[i].style.backgroundColor = '#FAF9FF';
            i += 1;
        });
        const eventname = new URLSearchParams(search).get('event');

        var event = eventsdata.find(o => o.tag === eventname);
        if (event == null) {
            document.getElementById("eventsdummy").style.display = "block";
            document.getElementById("realevents").style.display = "none";

        }
        else {
            document.getElementById("eventsdummy").style.display = "none";
            document.getElementById("realevents").style.display = "block";


            document.getElementsByClassName("eventName")[0].innerHTML = event.eventName;
            document.getElementsByClassName("eventtext")[0].innerHTML = event.eventDesc;
            document.getElementsByClassName("imgevent")[0].src = event.image;
            if (parseInt(event.id.slice(1)) % 2 === 0) {
                document.getElementsByClassName("description_Desktop")[0].style.backgroundColor = '#192558';
            }
            else {
                document.getElementsByClassName("description_Desktop")[0].style.backgroundColor = '#2D1373';

            }

            document.getElementById("dateevent").innerHTML = event.date;

            //ONGOING
            if (event.info == 0) {
                document.getElementById("dateevent").innerHTML = event.date;
                document.getElementById("prizeevent").innerHTML = event.prize;
                document.getElementById("paidevent").innerHTML = event.payment;
                document.getElementById("register").style.display = "block";
                document.getElementById("register").onclick = () => window.open(event.link, "_blank");
            }
            //Registration Closed
            if (event.info == 1) {
                document.getElementById("dateevent").innerHTML = "Registration Closed";
                document.getElementById("prizeevent").innerHTML = event.prize;
                document.getElementById("paidevent").innerHTML = event.payment;
                document.getElementById("register").style.display = "none";
            }
            //UPCOMING
            if (event.info == 2) {
                document.getElementById("dateevent").innerHTML = "COMING SOON";
                document.getElementById("prizeevent").innerHTML = "COMING SOON";
                document.getElementById("paidevent").innerHTML = "COMING SOON";
                document.getElementById("register").style.display = "none";
            }

            if (event.ori == "left") {
                console.log(event.id.slice(1));
                if (parseInt(event.id.slice(1)) % 2 === 0) {
                    document.getElementById("boxevent").className = "box elbg"
                }
                else {
                    document.getElementById("boxevent").className = "box olbg"
                }

            }
            if (event.ori == "right") {
                if (parseInt(event.id.slice(1)) % 2 === 0) {
                    document.getElementById("boxevent").className = "box erbg"
                }
                else {
                    document.getElementById("boxevent").className = "box orbg"
                }
            }
            document.getElementById(event.tag).className = "containerMhigh"
            if (parseInt(event.id.slice(1)) % 2 === 0) {
                document.getElementsByClassName("containerMhigh")[0].style.backgroundColor = '#192558';
            }
            else {
                document.getElementsByClassName("containerMhigh")[0].style.backgroundColor = '#2D1373';

            }

            var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
        }
    });

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>Registration Closed</span>;
        } else {
            // Render a countdown
            return <span>{days} days: {hours} hr: {minutes} min</span>;
        }
    };



    return (
        <div className="moreEvents">
            <Navbar />
            <div id="moreEvents">
                <div id="eventsListHeading">
                    EVENTS LIST
                </div>
                <div id="eventmainContainer">
                    <div className="one">
                        <Link to={"/events?event=ls"} params={{ event: 1 }}>
                            <div id="ls" className="containerMhigh">
                                <div className="headingM">
                                    <p className='lec'>LECTURE SERIES</p>

                                    <img src={arrowR} alt="" id="b1" />

                                </div>
                                <div className="content">
                                    <p>Inspiring sessions with accomplished personalities.</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p>{eventsdata[0].info == 0 ? <Countdown date={new Date(eventsdata[0].date).getTime()} renderer={renderer} /> : eventsdata[0].info == 1 ? "Registration Closed" : "COMING SOON"}</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/events?event=internfair"} >
                            <div id="internfair" className="containerM">
                                <div className="headingM">
                                    <p>INTERN<br></br>FAIR</p>

                                    <img src={arrowR} alt="" id="b1" />

                                </div>
                                <div className="content">
                                    <p>A platform for Start-ups to hire talented interns</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p> {eventsdata[1].info == 0 ? <Countdown date={new Date(eventsdata[1].date).getTime()} renderer={renderer} /> : eventsdata[1].info == 1 ? "Registration Closed" : "COMING SOON"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/events?event=startupexpo"}>
                            <div id="startupexpo" className="containerM">
                                <div className="headingM">
                                    <p>STARTUP EXPO</p>

                                    <img src={arrowR} alt="" id="b1" />

                                </div>
                                <div className="content">
                                    <p>Connect, Collaborate, and Innovate</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p> {eventsdata[2].info == 0 ? <Countdown date={new Date(eventsdata[2].date).getTime()} renderer={renderer} /> : eventsdata[2].info == 1 ? "Registration Closed" : "COMING SOON"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/events?event=pmx"}>
                            <div id="pmx" className="containerM">
                                <div className="headingM">
                                    <p>PMx</p>

                                    <img src={arrowR} alt="" id="b1" />

                                </div>
                                <div className="content">
                                    <p>The Product Management Expedition</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p> {eventsdata[3].info == 0 ? <Countdown date={new Date(eventsdata[3].date).getTime()} renderer={renderer} /> : eventsdata[3].info == 1 ? "Registration Closed" : "COMING SOON"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/events?event=disrupt"} >
                            <div id="disrupt" className="containerM">
                                <div className="headingM">
                                    <p>DISRUPT</p>

                                    <img src={arrowR} alt="" id="b1" />

                                </div>
                                <div className="content">
                                    <p>North-East India's largest pitching battle</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p> {eventsdata[4].info == 0 ? <Countdown date={new Date(eventsdata[4].date).getTime()} renderer={renderer} /> : eventsdata[4].info == 1 ? "Registration Closed" : "COMING SOON"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/events?event=need"} >
                            <div id="need" className="containerM">
                                <div className="headingM">
                                    <p>NEED</p>

                                    <img src={arrowR} alt="" id="b1" />

                                </div>
                                <div className="content">
                                    <p>Noth-East Entrepreneurship Drive</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p>{eventsdata[5].info == 0 ? <Countdown date={new Date(eventsdata[5].date).getTime()} renderer={renderer} /> : eventsdata[5].info == 1 ? "Registration Closed" : "COMING SOON"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/events?event=cosmicclash"} >
                            <div id="cosmicclash" className="containerM">
                                <div className="headingM">
                                    <p>COSMIC CLASH</p>

                                    <img src={arrowR} alt="" id="b1" />

                                </div>
                                <div className="content">
                                    <p>The E-Sports Arena</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p>{eventsdata[6].info == 0 ? <Countdown date={new Date(eventsdata[6].date).getTime()} renderer={renderer} /> : eventsdata[6].info == 1 ? "Registration Closed" : "COMING SOON"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div id="eventsdummy">
                        <img src={eventsdummy} />
                    </div>
                    <div id="realevents">
                        {/* SINGLE EVENT */}
                        <div className="two">
                            <div className="box erbg" id="boxevent">
                                <div className='imgC'><img src={ls} alt="" className="imgevent" /></div>
                                <div className="boxHeading">
                                    <div className="icon"><img src={Logo} alt="" /></div>
                                    <div className="headingText">
                                        <div className="eventName">LECTURE SERIES</div>
                                        <img src="boxLine.svg" alt="" />
                                        <div >
                                            {/* <p className="small">Product Management</p>
                                            <p className="big">EXPEDITION</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="description_Desktop">
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
                        </div>
                    </div>
                    <div className="three">
                        <Link to={"/events?event=dframe"} >
                            <div id="dframe" className="containerM">
                                <div className="headingM">

                                    <img src={arrowL} alt="" id="b1" />

                                    <p>D-FRAME</p>

                                </div>
                                <div className="content contentright">
                                    <p>A UI/UX challenge blending creativity and coherence</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p>{eventsdata[7].info == 0 ? <Countdown date={new Date(eventsdata[7].date).getTime()} renderer={renderer} /> : eventsdata[7].info == 1 ? "Registration Closed" : "COMING SOON"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/events?event=encode"} >
                            <div id="encode" className="containerM">
                                <div className="headingM">

                                    <img src={arrowL} alt="" id="b1" />

                                    <p>ENCODE</p>

                                </div>
                                <div className="content contentright">
                                    <p>Code to Innovate</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p>{eventsdata[8].info == 0 ? <Countdown date={new Date(eventsdata[8].date).getTime()} renderer={renderer} /> : eventsdata[8].info == 1 ? "Registration Closed" : "COMING SOON"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/events?event=funevents"} >
                            <div id="funevents" className="containerM">
                                <div className="headingM">

                                    <img src={arrowL} alt="" id="b1" />

                                    <p>FUN EVENTS</p>

                                </div>
                                <div className="content contentright">
                                    <p>Entertaining the Entrepreneur in you</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p> {eventsdata[9].info == 0 ? <Countdown date={new Date(eventsdata[9].date).getTime()} renderer={renderer} /> : eventsdata[9].info == 1 ? "Registration Closed" : "COMING SOON"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/events?event=sparkle"} >
                            <div id="sparkle" className="containerM">
                                <div className="headingM">

                                    <img src={arrowL} alt="" id="b1" />

                                    <p>SPARKLE</p>

                                </div>
                                <div className="content contentright">
                                    <p>A pitching platform for young aspiring entrepreneurs</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p> {eventsdata[10].info == 0 ? <Countdown date={new Date(eventsdata[10].date).getTime()} renderer={renderer} /> : eventsdata[10].info == 1 ? "Registration Closed" : "COMING SOON"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/events?event=workshops"} >
                            <div id="workshops" className="containerM">
                                <div className="headingM">

                                    <img src={arrowL} alt="" id="b1" />

                                    <p>LINKEDIN WORKSHOP</p>

                                </div>
                                <div className="content contentright">
                                    <p>Comprehensive guide with industry experts</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p>
                                        {eventsdata[11].info == 0 ? <Countdown date={new Date(eventsdata[11].date).getTime()} renderer={renderer} /> : eventsdata[11].info == 1 ? "Registration Closed" : "COMING SOON"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/events?event=stonks"} >
                            <div id="stonks" className="containerM">
                                <div className="headingM">

                                    <img src={arrowL} alt="" id="b1" />

                                    <p>STONKS 11</p>

                                </div>
                                <div className="content contentright">
                                    <p>Stock Market Simulation Game</p>
                                </div>
                                <div className="live2">
                                    <img src={live} alt="" />
                                    <p>
                                        {eventsdata[12].info == 0 ? <Countdown date={new Date(eventsdata[12].date).getTime()} renderer={renderer} /> : eventsdata[12].info == 1 ? "Registration Closed" : "COMING SOON"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MoreEvents2 