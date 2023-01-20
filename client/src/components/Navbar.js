import React, { useEffect } from "react";
import "./Home/navbar_landing.css";
import Icon from "../icons/icon.png";
import Buy from "../icons/Ticket.png";
import Hum from "../icons/hamburger.png";
import Hamburger from "./hamburger";
import Humcross from "../icons/Cross Button.svg";
import Hamburgerph from "./hamburgerphone";
function Navbar() {
	useEffect(() => {
		document.getElementById("open_nav").style.display = "block";
		document.getElementById("close_nav").style.display = "none";
	});
	function openNav() {
		console.log("CLICKED");
		document.getElementById("myNav").style.height = "100%";
		document.getElementById("open_nav").style.display = "none";
		document.getElementById("bignav1").style.display = "none";
		document.getElementById("bignav2").style.display = "none";
		document.getElementById("bignav3").style.display = "none";
		document.getElementById("close_nav").style.display = "block";
		document.body.style.overflow = "hidden";
	}
	function closeNav() {
		document.getElementById("myNav").style.height = "0%";
		document.getElementById("open_nav").style.display = "block";
		document.getElementById("close_nav").style.display = "none";
		document.getElementById("bignav1").style.display = "block";
		document.getElementById("bignav2").style.display = "block";
		document.getElementById("bignav3").style.display = "block";
		document.body.style.overflow = "unset";
	}
	return (
		<>
			<div className="header" id="headernav">
				<section className="navbar">
					<div className="image-container">
						<a href="/">
							<svg
								width="100"
								height="57"
								viewBox="0 0 100 57"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M81.0975 32.0131V7.12274C81.0975 6.64789 81.3626 6.41047 81.7603 6.41047H83.4838C84.2793 6.41047 84.2793 6.88531 84.2793 7.12274C84.2793 17.8464 84.1467 31.2533 84.1467 32.0131V37.9487C84.1467 38.1465 84.2262 38.5422 84.5444 38.5422C86.0911 38.5818 89.2641 38.6372 89.5823 38.5422C89.9004 38.4473 89.98 38.107 89.98 37.9487V32.0131V31.8532V7.12274C89.98 6.64789 90.2451 6.41047 90.6428 6.41047H92.3663C93.1618 6.41047 93.1618 6.88531 93.1618 7.12274C93.1618 17.8464 93.0292 31.2533 93.0292 32.0131V37.9487C93.0292 38.1465 93.1087 38.5422 93.4269 38.5422H98.7299C98.8625 38.5027 99.1276 38.3285 99.1276 37.9487V3.68008C99.1276 0.736018 96.7413 0 95.8133 0H90.3777C88.5217 0 87.8588 1.18712 87.3285 1.8994C86.6656 1.18712 86.0027 0 84.1467 0H77.9157C76.9435 0.079142 74.999 0.925957 74.999 3.68008V37.9487C74.999 38.1465 75.0786 38.5422 75.3967 38.5422H80.6997C80.8323 38.5027 81.0975 38.3285 81.0975 37.9487V32.0131Z"
									fill="#DDF140"
								/>
								<path
									d="M0 51.2482V0.761105C0 -0.18924 0.509114 -0.00103598 0.790124 0.0483461C2.63375 0.372347 5.81132 1.93711 6.321 5.15645V46.6153C6.42635 47.3756 6.89164 47.5656 7.11112 47.5656H8.82306C9.34981 47.5656 9.56928 46.9321 9.61318 46.6153V5.15645C9.61318 4.05031 10.4364 1.20778 14.8384 0.045404C15.4968 0.0454049 15.4968 0.401784 15.4968 0.401784V51.2453C15.4968 54.2151 13.1687 56 11.1934 56H4.34568C1.84362 55.6436 0 52.9113 0 51.2482Z"
									fill="#DDF140"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M37.1148 5.1762C37.1589 3.4508 38.4352 0 41.6041 0H47.942C49.3064 0.0784272 52.0352 1.22346 52.0352 5.1762V31.2924C52.0352 31.6846 51.6655 32.6806 50.7148 33.0571C51.595 33.5276 53.4876 35.0099 53.4876 37.6451C53.4876 40.939 50.8468 42.4683 48.6022 42.7036H43.0566C42.5284 42.7036 42.5284 43.2683 42.5284 43.6447C42.5284 43.88 42.5284 44.5859 43.0566 44.5859C43.1006 44.5859 43.2363 44.587 43.4398 44.5886C44.4576 44.5968 47.1718 44.6185 48.6022 44.5859C50.2306 44.6251 53.4876 45.3623 53.4876 49.8797C53.4876 54.3971 50.2306 55.8402 48.6022 55.997H19.5537C19.5537 55.997 18.8936 56.0441 18.8936 55.7617C18.8936 55.4088 19.9498 51.6443 22.9867 51.2914H46.2255C46.6216 51.2914 46.8857 51.2679 46.8857 50.2326C46.8857 49.2915 46.6216 49.2915 46.2255 49.2915H43.0566H40.0197C37.643 49.0562 36.0585 46.7732 36.0585 43.6447C36.0585 40.4684 37.9071 38.4685 40.5478 38.3509H46.2255C46.6216 38.3509 46.8857 38.045 46.8857 37.2921C46.8857 36.5392 46.6216 36.351 46.2255 36.351H41.8682C40.4158 36.2334 38.224 34.9158 37.3789 32.9394C37.1677 32.1865 37.1148 31.5277 37.1148 31.2924V5.1762ZM43.0185 8.00543V28.7841C43.0185 29.1799 43.1506 29.446 43.6787 29.446H45.2632C45.2886 29.446 45.3164 29.4469 45.3459 29.4479C45.6239 29.4569 46.0554 29.471 46.0554 28.7841C46.0554 28.6143 46.062 27.9412 46.0722 26.8957C46.1078 23.2625 46.1875 15.1326 46.1875 8.00543C46.1875 7.76796 46.1875 7.29303 45.3952 7.29303H43.6787C43.2826 7.29303 43.0185 7.53049 43.0185 8.00543Z"
									fill="#DDF140"
								/>
								<path
									d="M75.0068 43.2295L75.0078 46.4222C75.0078 46.6966 74.9774 47.5065 75.5216 47.3344C77.018 47.0911 77.7853 45.51 77.7286 44.9019V44.5504C77.7286 43.6991 78.4088 43.8376 78.7489 43.8376H80.2305H81.9309C82.7472 43.8376 82.9512 44.5471 82.9512 44.9019L82.9512 47.3344C82.9512 48.429 82.27 48.5799 81.9299 48.5799H76.7073H76.1972C75.8004 48.5799 75.0068 48.7928 75.0068 49.6441V54.9359C75.0635 55.2907 75.483 56.0001 76.7073 56.0001H85.841C86.1131 55.8785 86.1811 55.6961 86.1811 55.5441C85.9091 53.9629 84.2539 53.1622 83.4604 53.1115H78.2377C77.8296 53.1115 77.7276 52.9088 77.7276 52.8075V51.5912C77.7276 51.348 78.0677 51.2872 78.2377 51.2872H83.4604C85.0928 51.2872 85.6153 49.5642 85.672 48.8547L85.672 43.3815C85.672 41.6788 84.1973 41.1011 83.4604 41.1011H77.5576C75.517 41.1011 75.0068 42.52 75.0068 43.2295Z"
									fill="#DDF140"
								/>
								<path
									d="M88.3493 43.3815L88.3483 46.4222C88.3483 46.7246 88.4164 47.3305 88.6884 47.3344C90.4569 47.456 91.1258 46.0674 91.2392 45.358C91.2392 45.2059 91.2402 45.3106 91.2402 44.7025C91.2402 44.0943 91.5803 43.841 91.7503 43.7903H95.4136C95.8217 43.7903 95.9237 44.2971 95.9237 44.5504C95.9237 44.8545 95.9227 45.0539 95.9227 45.662C95.9227 46.2701 95.5826 46.4222 95.4126 46.4222H94.3923C93.576 46.4222 92.0894 47.0303 92.0894 47.3344V49.9189C92.0894 50.4054 94.0522 50.527 94.3923 50.527H95.4126C95.8207 50.527 95.9227 51.0338 95.9227 51.2872V52.5034C95.9227 52.9899 95.5826 53.1115 95.4126 53.1115H91.5792C91.1711 53.1115 91.0691 52.7061 91.0691 52.5034V51.2872C90.8991 50.223 89.0285 49.4628 88.6884 49.4628C88.4164 49.4628 88.3483 49.9696 88.3483 50.223V53.5676C88.3483 55.5136 89.8221 56.0001 90.559 56.0001H97.2831C98.7795 56.0001 99.1536 54.5812 99.1536 53.8717V50.9831C99.1536 49.6148 98.4734 49.0067 97.4531 48.5506C98.4734 48.0945 99.1536 47.3344 99.1536 46.4222V43.2295C99.1536 41.5268 97.9066 41.1011 97.2831 41.1011H90.559C88.7905 41.1011 88.3493 42.6721 88.3493 43.3815Z"
									fill="#DDF140"
								/>
								<path
									d="M75.0068 43.2295L75.0078 46.4222C75.0078 46.6966 74.9774 47.5065 75.5216 47.3344C77.018 47.0911 77.7853 45.51 77.7286 44.9019V44.5504C77.7286 43.6991 78.4088 43.8376 78.7489 43.8376H80.2305H81.9309C82.7472 43.8376 82.9512 44.5471 82.9512 44.9019L82.9512 47.3344C82.9512 48.429 82.27 48.5799 81.9299 48.5799H76.7073H76.1972C75.8004 48.5799 75.0068 48.7928 75.0068 49.6441V54.9359C75.0635 55.2907 75.483 56.0001 76.7073 56.0001H85.841C86.1131 55.8785 86.1811 55.6961 86.1811 55.5441C85.9091 53.9629 84.2539 53.1622 83.4604 53.1115H78.2377C77.8296 53.1115 77.7276 52.9088 77.7276 52.8075V51.5912C77.7276 51.348 78.0677 51.2872 78.2377 51.2872H83.4604C85.0928 51.2872 85.6153 49.5642 85.672 48.8547L85.672 43.3815C85.672 41.6788 84.1973 41.1011 83.4604 41.1011H77.5576C75.517 41.1011 75.0068 42.52 75.0068 43.2295Z"
									stroke="#DDF140"
									stroke-width="0.667418"
								/>
								<path
									d="M88.3493 43.3815L88.3483 46.4222C88.3483 46.7246 88.4164 47.3305 88.6884 47.3344C90.4569 47.456 91.1258 46.0674 91.2392 45.358C91.2392 45.2059 91.2402 45.3106 91.2402 44.7025C91.2402 44.0943 91.5803 43.841 91.7503 43.7903H95.4136C95.8217 43.7903 95.9237 44.2971 95.9237 44.5504C95.9237 44.8545 95.9227 45.0539 95.9227 45.662C95.9227 46.2701 95.5826 46.4222 95.4126 46.4222H94.3923C93.576 46.4222 92.0894 47.0303 92.0894 47.3344V49.9189C92.0894 50.4054 94.0522 50.527 94.3923 50.527H95.4126C95.8207 50.527 95.9227 51.0338 95.9227 51.2872V52.5034C95.9227 52.9899 95.5826 53.1115 95.4126 53.1115H91.5792C91.1711 53.1115 91.0691 52.7061 91.0691 52.5034V51.2872C90.8991 50.223 89.0285 49.4628 88.6884 49.4628C88.4164 49.4628 88.3483 49.9696 88.3483 50.223V53.5676C88.3483 55.5136 89.8221 56.0001 90.559 56.0001H97.2831C98.7795 56.0001 99.1536 54.5812 99.1536 53.8717V50.9831C99.1536 49.6148 98.4734 49.0067 97.4531 48.5506C98.4734 48.0945 99.1536 47.3344 99.1536 46.4222V43.2295C99.1536 41.5268 97.9066 41.1011 97.2831 41.1011H90.559C88.7905 41.1011 88.3493 42.6721 88.3493 43.3815Z"
									stroke="#DDF140"
									stroke-width="0.667418"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M56.8008 11.8111C56.8446 10.3129 58.115 7.31641 61.2692 7.31641H67.5776C68.9357 7.38451 71.6518 8.37879 71.6518 11.8111V55.3279C71.6518 55.4641 71.573 55.757 71.2576 55.8387C70.9421 55.9204 67.7967 55.8728 66.2634 55.8387C65.948 55.8387 65.8691 55.4982 65.8691 55.3279V51.892C65.8691 51.4834 65.3434 51.4493 65.0806 51.4834H63.5034C62.9777 51.4834 62.8463 51.7558 62.8463 51.892V55.3279C62.8463 55.6548 62.5835 55.8047 62.4521 55.8387H57.1951C56.8796 55.8387 56.8008 55.4982 56.8008 55.3279V11.8111ZM62.7372 14.8859V46.0272C62.7372 46.3515 62.8764 46.5695 63.4333 46.5695H65.1041C65.1308 46.5695 65.1601 46.5703 65.1913 46.5711C65.4844 46.5785 65.9394 46.59 65.9394 46.0272C65.9394 45.8963 65.9456 44.8326 65.9553 43.1524C65.9918 36.8402 66.0787 21.8266 66.0787 14.8859C66.0787 14.6913 66.0787 14.3021 65.2433 14.3021H63.4333C63.0156 14.3021 62.7372 14.4967 62.7372 14.8859Z"
									fill="#DDF140"
								/>
								<path
									d="M56.8027 4.05422C57.7309 0.623725 59.9851 0 61.4437 0H64.4272H67.5697C70.2217 0 71.6538 3.43049 71.6538 4.05422C71.6538 4.5532 71.1234 4.9898 70.8582 4.9898H57.7309C56.9353 4.9898 56.8027 4.36608 56.8027 4.05422Z"
									fill="#DDF140"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M19.0098 1.1022V47.1203V47.1206C19.0098 47.7153 19.0099 48.4288 19.5373 48.4465H27.8467C31.0121 48.4465 33.2543 46.0674 33.2543 44.0451V5.26564C33.2543 1.1022 29.6932 0.031605 27.8467 0.0316048C27.1683 0.0316048 26.2306 0.025066 25.2083 0.0179368C23.2049 0.00396677 20.8764 -0.0122703 19.5373 0.0139837C19.1417 0.0536355 19.0098 0.340889 19.0098 1.1022ZM27.6916 10.2742L25.2311 19.2397L30.8854 20.6138L27.6916 10.2742ZM24.243 33.6904L30.8269 23.4611L26.8341 38.8404L24.243 33.6904ZM24.531 21.1932L24.2499 22.0435L24.0391 22.6815L23.8998 22.0128C23.7305 21.2001 23.5647 20.4048 23.3657 19.4515C22.4747 21.5002 21.6495 23.3961 20.8045 25.3372L25.8417 28.1989C25.3956 25.8138 24.9757 23.57 24.531 21.1932ZM25.3101 20.4821L30.7941 21.7871L26.7327 28.1628L26.179 25.1731L26.1637 25.0903C25.8814 23.5656 25.6011 22.052 25.3101 20.4821ZM23.7987 32.687L25.7931 29.5255L20.9942 26.8255C21.6044 28.0987 22.2146 29.3747 22.839 30.6803L22.8621 30.7286L22.9708 30.956C23.2435 31.5263 23.5191 32.1025 23.7987 32.687Z"
									fill="#DDF140"
								/>
							</svg>
						</a>
					</div>

					<div className="second-container">
						<ul className="nav-links">
							<li className="nav-item" id="bignav1">
								<a href="/events">Events</a>
							</li>
							<li className="nav-item" id="bignav2">
								<a href="/schedule">Schedule</a>
							</li>
							<li className="nav-item" id="bignav3">
								<a href="/comingsoon">Merch</a>
							</li>
						</ul>
						<div className="hamburgerParent">
							<a onClick={openNav} id="open_nav">
								<img
									className="hamburger"
									src={Hum}
									alt="menu"
								/>
							</a>
							<a onClick={closeNav} id="close_nav">
								<img
									className="hamburger"
									src={Humcross}
									alt="menu"
								/>
							</a>
						</div>

						{/* <a className="yellobuttonlink" href="/registration">
							<div className="yellowButtonParent">
								<div className="yellow-button">
									<img src={Buy} alt="buy-ticket" />
									<p style={{ color: "black !important" }}>
										BUY PASS
									</p>
								</div>
							</div>
						</a> */}
					</div>
				</section>
			</div>
			<div id="myNav" className="overlay">
				{window.innerWidth > 700 ? <Hamburger /> : <Hamburgerph />}
			</div>

		</>
	);
}

export default Navbar;
