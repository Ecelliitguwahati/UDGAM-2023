import React from "react";
import "./hamburger.css";
//import { Button } from "@cred/neopop-web/lib/components";
import "./Home/navbar_landing.css";

import contact from "./../icons/contact.svg";
import aboutUs from "./../icons/aboutUs.svg";
import { useState } from "react";

import Navbar from "./Navbar";
import Insta from "./Home/Insta";
import Linke from "./Home/Linke";
import Yout from "./Home/Yout";
import Twit from "./Home/Twit";
import Submit from "./Home/Submit";
import axios from '../axios';
import { toast } from 'react-toastify';
function Hamburger() {

	const [s, sets] = useState("hidden");
	const [s1, sets1] = useState("hidden");
	const [s2, sets2] = useState("hidden");
	const [s3, sets3] = useState("hidden");
	const [emailhum, setEmail] = useState("");
	const handleChange = (e) =>
		setEmail(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	async function maillist() {
		if (emailhum.emailhum.trim()) {

			await axios.post('/mailpass', { email: emailhum.emailhum.trim() }).then(() => toast("Mail has been sent if you have really purchased the pass"))
				.catch(function (error) {
					console.log(error.toJSON());
					toast("Some unknown error has occured");
					return;
				});
		}
		else {
			toast("Field is empty")
		}
		window.location.reload()
	}
	return (
		<>
			<body className="humburg">
				<div className="biro">
					<div className="row1">
						<div className="gon">
							<div>
								{" "}
								<a href="/events" className="humnav">
									Events
								</a>
							</div>
							<div>
								{" "}
								<a href="/schedule" className="humnav">
									Schedule{" "}
								</a>
							</div>
							<div>
								<a href="/#merch" className="humnav">
									Merch{" "}
								</a>
							</div>
						</div>
						<div className="netero">
							<p className="killus humnav">
								<a href="/contactus" className="humnav">
									<p
										className="font-face-asl"
										onMouseEnter={() => {
											sets("visible");
										}}
										onMouseLeave={() => {
											sets("hidden");
										}}
									>
										Contact Us{" "}
										<img
											src={contact}
											className="si"
											style={{ visibility: `${s}` }}
										/>
									</p>
								</a>
							</p>
							<p className="hisoka humnav">
								<a href="/speakers" className="humnav">
									<p
										className="font-face-asl"
										onMouseEnter={() => {
											sets1("visible");
										}}
										onMouseLeave={() => {
											sets1("hidden");
										}}
									>
										Speakers{" "}
										<img
											src={contact}
											className="si"
											style={{ visibility: `${s1}` }}
										/>
									</p>
								</a>
							</p>
							<p className="kurapika humnav">
								<a href="/ourteam" className="humnav">
									<p
										className="font-face-asl"
										onMouseEnter={() => {
											sets2("visible");
										}}
										onMouseLeave={() => {
											sets2("hidden");
										}}
									>
										Our Team{" "}
										<img
											src={contact}
											className="si"
											style={{ visibility: `${s2}` }}
										/>
									</p>
								</a>
							</p>
							<p className="leo humnav">
								<a href="/sponsors" className="humnav">
									<p
										className="font-face-asl"
										onMouseEnter={() => {
											sets3("visible");
										}}
										onMouseLeave={() => {
											sets3("hidden");
										}}
									>
										Sponsors
										<img
											src={contact}
											className="si"
											style={{ visibility: `${s3}` }}
										/>
									</p>{" "}
								</a>
							</p>
							<a
								href="https://www.ecelliitg.in"
								style={{ textDecoration: `none` }}
							>

								<p className="Among_Us humnav">
									<p className="font-face-asl">
										About Us
										<img src={aboutUs} className="si" />
									</p>
								</p>
							</a>
						</div>
					</div>
					<div className="row2">
						<div>
							<div className="CoC">
								<p className="font-face-asl">
									Lost the pass you bought? We got you
									covered.
								</p>
							</div>
							<div className="bakwas">
								<div>
									<br />
									<input
										className="input_pass"
										placeholder="Enter Your Mail..."
										name="emailhum"
										onChange={handleChange}
									/>

								</div>
								<div onClick={() => maillist()} style={{ marginTop: '16px', marginLeft: '-2px' }}><Submit /></div>
							</div>
						</div>

						<div className="brrr" style={{ marginRight: '10px' }}>
							<div style={{ marginRight: '-15px' }}>

								<Insta />
							</div>
							<div style={{ marginRight: '-15px' }}>

								<Yout />
							</div>
							<div style={{ marginRight: '-15px' }}>

								<Linke />
							</div>
							<div>

								<Twit />
							</div>
						</div>
					</div>
				</div>
			</body>
		</>
	);
}

export default Hamburger;
