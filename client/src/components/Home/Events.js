import React from "react";
import udgamLogoPink from "../../icons/udgamLogoPink.svg";
//import Vector2 from "../../icons/Vector2.png";
import check from "../../icons/check.png";
import live from "../../icons/live.png";
import barcode from "../../icons/barcode.svg";
import "./Events.css";
import { Link } from "react-router-dom";
// import { Button } from "@cred/neopop-web/lib/components";
import "./../../fonts/ActionSans-Light.otf";
import Countdown from "react-countdown";
import disrupt from "../../icons/disrupt.svg";
import encode from "../../icons/encode.svg";
import need from "../../icons/need.svg";
import { useState } from "react";
import meuc from "./../../icons/meuc.svg";
import mec from "./../../icons/mec.svg";
import ruc from "./../../icons/ruc.svg";
import rc from "./../../icons/rc.svg";
import BuyE from "./EventsBuyButton";

function Events() {
	const [img, setimg] = useState(meuc);
	const [ig, setig] = useState(ruc);
	const [ig2, setig2] = useState(ruc);
	const [ig3, setig3] = useState(ruc);
	const eventsdata = [
		{
			
			date: "Jan 14, 2023 23:59:59",
			link:"https://internfair.udgamiitg.com"
					},
		// 0 for ongoing
		// 1 for expired
		// 2 for coming ComingSoon
		{
					
			date: "Jan 17, 2023 23:59:59",
			link: "https://docs.google.com/forms/d/e/1FAIpQLSeMH92AxnP5V8EEHzbGmTXl0VZS9BtBQRPh4xPqU77tWsdYKw/viewform",
           
				},
		// 0 for ongoing
		// 1 for expired
		// 2 for coming ComingSoon

		{
				date: "Jan 19, 2023 23:59:59",
				link:"https://docs.google.com/forms/d/e/1FAIpQLScDWXOjVcdGvI2yANeCvqvAiNfQbvSACb2RKVUxcoEnhBeVNA/viewform"
		},
	];
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state
			return <span>Registration closed</span>;
		} else {
			// Render a countdown
			return (
				<span>
					{days} days: {hours} hr: {minutes} min
				</span>
			);
		}
	};
	return (
		<div id="containerevent">
			<div id="up">
				<div id="heading">
					<p>WHY AM I HERE?</p>
				</div>
				<div id="moreEvents">
					<Link to={"/events"} params={{ event: 1 }} className="link">
						<button
							className="topbutevent"
							onMouseEnter={() => {
								setimg(mec);
							}}
							onMouseLeave={() => {
								setimg(meuc);
							}}
						>
							More Events <img alt="altimg" src={img}/>
						</button>
					</Link>
				</div>
			</div>
			<div id="down">
				<div id="events">
					<div className="containerevent" id="card_1">
						<div className="count">
							<p>1</p>
						</div>
						<div className="content2">
							<div className="heading">
								<p>INTERNFAIR</p>
								<div className="check">
									<img src={check} alt="" />
								</div>
							</div>
							<div className="text">
							An exclusive event for IIT Guwahati peeps, InternFair brings internship opportunities to students in various profiles like Software Development, Analytics, Product Management, and many more. This is a top-notch opportunity for the students to gain industry experience and also prepares them for the upcoming internship and placement processes.
							</div>
							<div
								className="register"
								onMouseEnter={() => {
									setig(rc);
								}}
								onMouseLeave={() => {
									setig(ruc);
								}}
							>
								<a
									href={eventsdata[0].link}
									style={{ textDecoration: `none` }}
									target="_blank"
								>
									<button className="reg">
										Register
										<img src={ig} alt="" color="#3A10AD" />
									</button>
								</a>
								<button className="live1">
									<img src={live} alt="" />
									<Countdown
										date={new Date(
											eventsdata[0].date
										).getTime()}
										renderer={renderer}
									/>
								</button>
							</div>
						</div>
					</div>
					<div className="containerevent ctwo" id="card_2">
						<div className="count">
							<p>2</p>
						</div>
						<div className="content2">
							<div className="heading">
								<p>SPARKLE</p>
								<div className="check">
									<img src={check} alt="" />
								</div>
							</div>
							<div className="text">
							Minutes of the spotlight to showcase your entrepreneurship and pitching skills exclusive for young teenagers. Sparkle is a pitching ground for school students and an opportunity to show themselves under the unwavering attention of the whole panel, including various Angel Investors and Venture Capitalists, to put their startup idea.
							</div>
							<div
								className="register"
								onMouseEnter={() => {
									setig3(rc);
								}}
								onMouseLeave={() => {
									setig3(ruc);
								}}
							>
								<a
									href={eventsdata[1].link}
									style={{ textDecoration: `none` }}
									target="_blank"
								>
									<button className="reg">
										Register
										<img src={ig3} alt="" color="#3A10AD" />
									</button>
								</a>
								<button className="live1">
									<img src={live} alt="" />
									<Countdown
										date={new Date(
											eventsdata[1].date
										).getTime()}
										renderer={renderer}
									/>
								</button>
							</div>
						</div>
					</div>
					<div className="containerevent cthree" id="card_3">
						<div className="count">
							<p>3</p>
						</div>
						<div className="content2">
							<div className="heading">
								<p>STARTUP EXPO</p>
								<div className="check">
									<img src={check} alt="" />
								</div>
							</div>
							<div className="text">
							Startup Expo is a unique opportunity for startups to
showcase their products or services, receive valuable
customer feedback, and connect with potential investors. It
is being organised with the goal of promoting innovation and
entrepreneurship and providing a platform for startups to
exchange ideas and explore research and development
opportunities.
							</div>
							<div
								className="register"
								onMouseEnter={() => {
									setig2(rc);
								}}
								onMouseLeave={() => {
									setig2(ruc);
								}}
							>
								<a
								target="_blank"
									href={eventsdata[2].link}
									style={{ textDecoration: `none` }}
								>
									<button className="reg">
										Register
										<img src={ig2} alt="" color="#3A10AD" />
									</button>
								</a>
								{/* <button className="reg">
                                    Register
                                    <img src={view} alt="" />
                                </button> */}
								<button className="live1">
									<img src={live} alt="" />
									<Countdown
										date={new Date(
											eventsdata[2].date
										).getTime()}
										renderer={renderer}
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div id="udgamPass">
					<div className="pass">
						<p>Udgam pass</p>
						<img src={udgamLogoPink} alt="" />
					</div>
					<div id="priceDate">
						<div id="price">
							<p className="pdHeading">Price</p>
							<p className="price"><span class="strikethrough">₹399</span>&nbsp;₹199</p>
						</div>
						<div id="date">
							<p className="pdHeading">Date</p>
							<p className="date">19-22 Jan</p>
						</div>
					</div>
					<div className="buttonwrappass">
						
						<BuyE/>
					</div>
					<div className="buyPass">
						<div className="time">
							<img src={live} alt="" />
							<Countdown
								date={new Date(
									"Jan 19, 2023 23:59:59"
								).getTime()}
								renderer={renderer}
							/>
						</div>
					</div>
					<div id="barcode">
						<img src={barcode} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Events;
