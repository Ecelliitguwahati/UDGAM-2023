import React, { useEffect } from 'react';
import arrowR from "./../icons/arrowR.svg";
import arrowL from "./../icons/arrowL.svg";
import boxELBG from "./../icons/boxELBG.svg";
import boxERBG from "./../icons/boxERBG.svg";
import boxLine from "./../icons/boxLine.svg";
import boxOLBG from "./../icons/boxOLBG.svg";
import boxORBG from "./../icons/boxORBG.svg";
import clickedArrowL from "./../icons/clickedArrowL.svg";
import clickedArrowR from "./../icons/clickedArrowR.svg";
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
import Vector3 from "./../icons/Vector3.svg";
import workshops from "./../icons/workshops.svg";
import "./moreEvents.css";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Home/footer';
import ComingSoon from '../components/Home/ComingSoon';

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
            "info":2,
            "image": ls,
            "prize":"NILL",
            "eventName": "LECTURE SERIES",
            "payment":"Paid",
            "link":"https://www.fb.com",
            "eventDesc": "UDGAM' 23 presents the most awaited event Lecture Series, providing you the best opportunities to explore the entrepreneurial world, bringing industry experts and successful entrepreneurs to inspire and educate you about entrepreneurship. "

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
            "info":2,
            "prize":"Internship",
            "eventName": "INTERNFAIR",
            "payment":"Paid",    "link":"https://www.fb.com",
            "eventDesc": "In today’s world, where the jobs are limited and the number of applicants is increasing at a blisteringly fast rate, it is necessary to have an edge over your peers. UDGAM 2023 brings to you INTERN FAIR, a golden opportunity to stand out in this competitive world. So 1st and 2nd-years just grab this opportunity and become familiar with the corporate world by interning in a startup. Intern Fair provides you with a plethora of profiles to work for, ranging from Artificial Intelligence to Marketing. "
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
            "info":1,
            "prize":"100K+",
            "eventName": "PMx",
            "payment":"Free",    "link":"https://www.fb.com",
            "eventDesc": "UDGAM 2023, presents to you PMx — Product Management Expedition, a Product Case Study competition to encompass the art and the science of shepherding a product. PMx provides this opportunity for young visionaries, thinkers, and problem-solvers like you to showcase your killer strategy, an eye for the details, and legit problem-solving skills. "
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "disrupt",
            "id": "b4",
            "ori": "left",
            "date": "Jan 25, 2022 23:59:59",
            "image": disrupt,
            "info":0,
            "prize":"10 Lakhs+",
            "eventName": "DISRUPT",
            "payment":"Free",    "link":"https://rebrand.ly/Disrupt_Registration",
            "eventDesc": "Disrupt is here to provide you with all the opportunities, and honour entrepreneurs & their lofty aspirations of bringing about social change and creating a better future for everyone. To promote, motivate, and assist entrepreneurs, UDGAM 2023, IIT Guwahati, presents Disrupt, the largest B-Plan competition in North-East India. Disrupt offers a fantastic platform for ambitious student entrepreneurs and start-ups to pitch their ideas in front of distinguished judges and build a comprehensive network with investors. We give a forum for you to attract and amaze India's most brilliant business brains, who can convert your intriguing idea into a dreamlike certainty. We offer you 10 minutes in the limelight and the undivided attention of the whole panel, which includes Angel Investors and Venture Capitalists, to demonstrate yourself and your company concept. Disrupt seeks to acknowledge those with a desire to learn, explore and inspire aspiring entrepreneurs, those who believe in contributing to the Indian Economy!"
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "need",
            "id": "b5",
            "ori": "left",
            "date": "Jan 20, 2022 16:37:25",
            "prize":"1 Lakhs+",
            "info":1,
            "image": need,
            "eventName": "NEED",
            "payment":"Free",    "link":"https://www.fb.com",
            "eventDesc": "E-Cell, IIT Guwahati brings to you NEED-North East Entrepreneurship Drive, a 4-week cohort to build your college’s own E-Cell. Building your own E-Cell might be one hell of a task, but we are here to mentor you. With lectures, workshops and challenges lined up, participate as a team, build your own E-Cell and win prizes worth INR 100000.  "
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "cosmicclash",
            "id": "b6",
            "ori": "left",
            "date": "Dec 25, 2022 23:59:59",
            "prize":"10 Lakhs+",
            "info":0,
            "image": cosmicClash,
            "eventName": "COSMIC CLASH",
            "payment":"Paid",    "link":"https://linktr.ee/cosmic_clash",
            "eventDesc": "Amidst all the chaos of campus tension of exams, are your gaming skills crying in the corner? Are you waiting for a perfect time to showcase your gaming strategies? Along with the eSports and Game Dev Club, UDGAM'23 presents you with the most awaited gaming platform, the COSMIC CLASH. Get ready to make your teams and the right plan to confront your opposition. With exciting games like VALORANT, ROCKET LEAGUE, and BLITZ CHESS and a chance to win exciting prizes, what are you all waiting for? Register today to participate and experience a mind-blowing gaming completion!"
        },
                // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "dframe",
            "id": "b7",
            "ori": "right",
            "date": "Jan 9, 2023 23:59:59",
            "info":0,
            "prize":"25 K+",
            "image": Dframe,
            "eventName": "D-FRAME",
            "payment":"Free",    "link":"https://unstop.com/competition/dframe-creative-branding-challenge-udgam-2023-indian-institute-of-technology-iit-guwahati-566698",
            "eventDesc": "Consider your favorite app: It's easy on the eye and simple to use? When you first installed it, you could easily understand how to go from A to B. To build these user-friendly, intuitive interfaces, the role of a UI designer is pivotal. Not only the UI designer is a creative creatures they put themselves in the user's shoes and design visuals and interactive elements in such a way that it feels natural to the user. Udgam, the annual e-summit of IIT Guwahati in partnership with White Space, the design club presents DFrame, a UI/UX Challenge. DFrame is a perfect blend of creativity and business relevance. We believe it will frame and develop the designer's innovative quotient by flexing their design muscle to find technical solutions whilst staying true to the human-centric approach. "
        },
            // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "encode",
            "id": "b8",
            "ori": "right",
            "date": "Jan 20, 2023 16:37:25",
            "info":2,
            "prize":"60K+",
            "image": encode,
            "eventName": "ENCODE",
            "payment":"Free",    "link":"https://www.fb.com",
            "eventDesc": "Are you a coder who wants to change the world? or Are you an innovator who can create for the future? EnCode is here to provide you with a great opportunity! To encourage, inspire and aid innovators, UDGAM 2023, IIT Guwahati, and Coding Club IIT Guwahati, bring you its first-ever development hackathon, “EnCode”. In EnCode, participants will be provided with a real-life problem statement, and they have to come up with a feasible solution to tackle the problem and provide the working prototype for the same. Be a part of “EnCode”, which offers you cash prizes of Rs 60,000, UDGAM merchandise, Incentives, and much more."
        },
                // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "funevents",
            "id": "b9",
            "ori": "right",
            "date": "Jan 20, 2023 16:37:25",
            "info":2,
            "prize":"5K+",
            "image": funEvents,
            "eventName": "FUN EVENTS",
            "payment":"Paid",    "link":"https://www.fb.com",
            "eventDesc": "Bored of the same memes on your IG feed, waiting for a new reel trend? Wanna try something exciting? Brace to surprise yourself with the most exciting events starting from the 19th to 22nd of January. Participate in the various fun events and get a chance to win prizes worth 5k. "
        },

        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "sparkle",
            "id": "b10",
            "ori": "right",
            "info":2,
            "prize":"NILL",
            "date": "Jan 20, 2023 16:37:25",
            "image": sparkle,
            "eventName": "SPARKLE",
            "payment":"Free",    "link":"https://www.fb.com",
            "eventDesc": "Most of us come up with ideas for various problems surrounding us and in the blink of an eye, we toggle that thought thinking that it won't be viable. Lack of exposure is the biggest barrier between your idea just being an idea and that idea converting into a successful startup. Don't worry! We are here with how you can overcome that barrier. To incite the spark of entrepreneurship, motivate and support the young brains of this generation, UDGAM 2023, IIT Guwahati proudly presents it one of kind ideation, “Sparkle”. We are pleased to provide the young aspiring entrepreneurs with a platform to present their innovative ideas in front of industry leaders and a chance to achieve their dreams."
        },
        // 0 for ongoing
        // 1 for expired
        // 2 for coming ComingSoon
        {
            "tag": "workshops",
            "id": "b11",
            "ori": "right",
            "info":2,
            "prize":"NILL",
            "date": "Jan 20, 2023 16:37:25",
            "image": workshops,
            "eventName": "WORKSHOPS",
            "payment":"Paid",    "link":"https://www.fb.com",
            "eventDesc": "The Start-up World is saturated with intricate concepts, all of which combined have near-infinite applications. This workshop series, endeavors to break these concepts down into a digestible yet comprehensive guide, via industry experts, and Q&A sessions on these interesting topics. "
        }

    ]

    const search = useLocation().search;
    useEffect(() => {
        eventsdata.forEach((eventsda) => {
            document.getElementById(eventsda.tag).className = "containerM"
            // document.getElementById(eventsda.tag).className = "content"     
        });
        const eventname = new URLSearchParams(search).get('event');

        var event = eventsdata.find(o => o.tag === eventname);
        if (event == null) {
            event = eventsdata[0]
        }
        document.getElementsByClassName("eventName")[0].innerHTML = event.eventName;
        document.getElementsByClassName("eventtext")[0].innerHTML = event.eventDesc;
        document.getElementsByClassName("imgevent")[0].src = event.image;
        document.getElementById("dateevent").innerHTML = event.date;

        //ONGOING
        if(event.info==0){
            document.getElementById("dateevent").innerHTML = event.date;
            document.getElementById("prizeevent").innerHTML =event.prize;
            document.getElementById("paidevent").innerHTML = event.payment;
            document.getElementById("register").style.display="block";
            document.getElementById("register").onclick=()=>window.open(event.link,"_self");
        }
        //EXPIRED
        if(event.info==1){
            document.getElementById("dateevent").innerHTML = "EXPIRED";
            document.getElementById("prizeevent").innerHTML = event.prize;
            document.getElementById("paidevent").innerHTML = event.payment;
            document.getElementById("register").style.display="none";
        }
        //UPCOMING
        if(event.info==2){
            document.getElementById("dateevent").innerHTML = "COMING SOON";
            document.getElementById("prizeevent").innerHTML = "COMING SOON";
            document.getElementById("paidevent").innerHTML = "COMING SOON";
            document.getElementById("register").style.display="none";
        }
     
        if (event.ori == "left") {
            document.getElementById("boxevent").className = "box olbg"
        }
        if (event.ori == "right") {
            document.getElementById("boxevent").className = "box orbg"
        }
        document.getElementById(event.tag).className = "containerMhigh"
        var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
        
    });

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <span>Registration closed</span>;
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
                        <div id="ls" className="containerMhigh">
                            <div className="headingM">
                                <p className='lec'>LECTURE SERIES</p>
                                <Link to={"/events?event=ls"} params={{ event: 1 }}>
                                    <img src={arrowR} alt="" id="b1" />
                                </Link>
                            </div>
                            <div className="content">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p><Countdown date={new Date(eventsdata[0].date).getTime()} renderer={renderer}/></p>
                            </div>
                        </div>
                        <div id="internfair" className="containerM">
                            <div className="headingM">
                                <p>INTERN<br></br>FAIR</p>
                                <Link to={"/events?event=internfair"} >
                                    <img src={arrowR} alt="" id="b1" />
                                </Link>
                            </div>
                            <div className="content">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p><Countdown date={new Date(eventsdata[1].date).getTime()} renderer={renderer}/></p>
                            </div>
                        </div>
                        <div id="pmx"className="containerM">
                            <div className="headingM">
                                <p>PMx</p>
                                <Link to={"/events?event=pmx"}>
                                    <img src={arrowR} alt="" id="b3" />
                                </Link>
                            </div>
                            <div className="content">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p><Countdown date={new Date(eventsdata[2].date).getTime()} renderer={renderer}/></p>
                            </div>
                        </div>
                        <div id="disrupt"className="containerM">
                            <div className="headingM">
                                <p>DISRUPT</p>
                                <Link to={"/events?event=disrupt"} >
                                    <img src={arrowR} alt="" id="b1" />
                                </Link>
                            </div>
                            <div className="content">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p><Countdown date={new Date(eventsdata[3].date).getTime()} renderer={renderer}/></p>
                            </div>
                        </div>
                        <div id="need" className="containerM">
                            <div className="headingM">
                                <p>NEED</p>
                                <Link to={"/events?event=need"} >
                                    <img src={arrowR} alt="" id="b1" />
                                </Link>
                            </div>
                            <div className="content">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p><Countdown date={new Date(eventsdata[4].date).getTime()} renderer={renderer}/></p>
                            </div>
                        </div>
                        <div id="cosmicclash" className="containerM">
                            <div className="headingM">
                                <p>COSMIC CLASH</p>
                                <Link to={"/events?event=cosmicclash"} >
                                    <img src={arrowR} alt="" id="b1" />
                                </Link>
                            </div>
                            <div className="content">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p><Countdown date={new Date(eventsdata[5].date).getTime()} renderer={renderer}/></p>
                            </div>
                        </div>

                    </div>
                    <div>
                        {/* SINGLE EVENT */}
                        <div className="two">
                            <div className="box erbg" id="boxevent">
                                <img src={ls} alt="" className="imgevent" />
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
                            <div className="description">
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
                        <div id="dframe" className="containerM">
                            <div className="headingM">
                                <Link to={"/events?event=dframe"} >
                                    <img src={arrowL} alt="" id="b1" />
                                </Link>
                                <p>D-FRAME</p>

                            </div>
                            <div className="content contentright">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p><Countdown date={new Date(eventsdata[6].date).getTime()} renderer={renderer}/></p>
                            </div>
                        </div>
                        <div id="encode" className="containerM">
                            <div className="headingM">
                                <Link to={"/events?event=encode"} >
                                    <img src={arrowL} alt="" id="b1" />
                                </Link>
                                <p>ENCODE</p>

                            </div>
                            <div className="content contentright">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p><Countdown date={new Date(eventsdata[7].date).getTime()} renderer={renderer}/></p>
                            </div>
                        </div>
                        <div id="funevents" className="containerM">
                            <div className="headingM">
                                <Link to={"/events?event=funevents"} >
                                    <img src={arrowL} alt="" id="b1" />
                                </Link>
                                <p>FUN EVENTS</p>

                            </div>
                            <div className="content contentright">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p><Countdown date={new Date(eventsdata[8].date).getTime()} renderer={renderer}/></p>
                            </div>
                        </div>
                        <div id="sparkle" className="containerM">
                            <div className="headingM">
                                <Link to={"/events?event=sparkle"} >
                                    <img src={arrowL} alt="" id="b1" />
                                </Link>
                                <p>SPARKLE</p>

                            </div>
                            <div className="content contentright">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p><Countdown date={new Date(eventsdata[9].date).getTime()} renderer={renderer}/></p>
                            </div>
                        </div>
                        <div  id="workshops" className="containerM">
                            <div className="headingM">
                                <Link to={"/events?event=workshops"} >
                                    <img src={arrowL} alt="" id="b1" />
                                </Link>
                                <p>WORKSHOPS</p>

                            </div>
                            <div className="content contentright">
                                <p>Internship. Internship. Internship.</p>
                            </div>
                            <div className="live2">
                                <img src={live} alt="" />
                                <p><Countdown date={new Date(eventsdata[10].date).getTime()} renderer={renderer}/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<Footer/>
        </div>
    );
}

export default MoreEvents2 