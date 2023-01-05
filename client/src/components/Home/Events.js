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
	const eventsdata = [
		{
			
			date: "Jan 5, 2023 23:59:59",
			link:"https://rebrand.ly/Disrupt_Registration"
					},
		// 0 for ongoing
		// 1 for expired
		// 2 for coming ComingSoon
		{
					
			date: "Jan 7, 2023 23:59:59",
			link: "https://docs.google.com/forms/d/e/1FAIpQLSeMH92AxnP5V8EEHzbGmTXl0VZS9BtBQRPh4xPqU77tWsdYKw/viewform",
           
				},
		// 0 for ongoing
		// 1 for expired
		// 2 for coming ComingSoon

		{
				date: "Jan 6, 2023 16:37:25",
				link:"https://rebrand.ly/EnCode23"
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
								<p>DISRUPT</p>
								<div className="check">
									<img src={check} alt="" />
								</div>
							</div>
							<div className="text">
								Disrupt is North East India’s Largest Pitching
								Battle where startups get a platform to pitch
								their idea to investors, Angel investors, and
								Venture Capitalists. In our previous editions,
								we had Michael Sibel, CEO of Y-Combinator as one
								of the panelists. Top finalists are provided
								with mentorship, incubation, and business tools
								alongside prizes and investment opportunities
								for winners.
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
									setig(rc);
								}}
								onMouseLeave={() => {
									setig(ruc);
								}}
							>
								<a
									href={eventsdata[0].link}
									style={{ textDecoration: `none` }}
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
								<p>ENCODE</p>
								<div className="check">
									<img src={check} alt="" />
								</div>
							</div>
							<div className="text">
								An entrepreneur’s task is to solve real-life
								real-world problems by developing a feasible
								solution that caters to everyone's needs be it
								the users or the market. Focussing on this,
								Encode is a development hackathon where you will
								be provided with a real-life problem and you
								have to devise a solution for it.
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
							<p className="price">₹399</p>
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
