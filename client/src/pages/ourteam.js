import React from 'react'
import { Button } from '@cred/neopop-web/lib/components';
import './ourteam.css';
import Downicon from '../icons/Down.svg'
import Closeicon from '../icons/Close.svg'
import speak from "../icons/speaker.png"
import linkicon from "../icons/Frame 34161.png"
import Navbar from '../components/Navbar';

import anushka from '../PhotosPng/ankusha.svg';
import krish from '../PhotosPng/krish.svg';
import krishna from '../PhotosPng/krishna.svg';
import mohitp from '../PhotosPng/mohitp.svg';
import raghav from '../PhotosPng/raghav.svg';
import sahil from '../PhotosPng/sahil.svg';
import shyam from '../PhotosPng/shyam.svg';
import souma from '../PhotosPng/souma.svg';
import bhoomika from '../PhotosPng/bhomika.svg';
import umang from '../PhotosPng/umang.svg';
import ved from '../PhotosPng/ved.svg';
import soham from '../PhotosPng/soham.svg';
import Footer from '../components/Home/footer';
function OurTeam() {
    function myFunction() {
        console.log("Imrunning out");
        // document.getElementById("img1").src = "assets/img/Close.svg";
        var x = document.getElementById("img123");
        console.log(Downicon);


        if (x.src == { Downicon }) {
            console.log("Imrunning in");
            x.src = Closeicon
        }
        if (x.src == Closeicon) {
            console.log("Imrunning in");
            x.src = Downicon
        }
    }


    return (
        <>
            <div className='teampage'><Navbar />
                <div className="topallmembers">
                    <h1>MEET THE TEAM</h1>
                </div>
                <div className='teamrow row' >
                    <div className='memberteam col-lg-4'>
                        <div className='imgteam'>
                            {/* <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg> */}
                            <img src={umang} className='svg' />
                            <a href="https://www.linkedin.com/in/umang1821/"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Umang Jain</h1>
                        <h2>Convener</h2>
                        <h4>Udgam</h4>
                            
                    </div>
                    <div className='memberteam col-lg-4'>
                        <div className='imgteam'>
                        <img src={krishna} className='svg' />
                            <a href="https://www.linkedin.com/in/kkhakholia841/"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Krishna Khakholia</h1>
                        <h2>Secretary</h2>
                        <h4>E-Cell IITG</h4> 
                    </div>
                    <div className='memberteam col-lg-4'>
                        <div className='imgteam'>
                            <img src={sahil} className='svg' />
                            <a href="https://www.linkedin.com/in/sahilnizam12/"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Sahil Nizam</h1>
                        <h2>NEED Head</h2>
                        <h4>Udgam</h4>
                    </div>
                </div>
                <div className='teamrow row'>
                    <div className='memberteam col-lg-3'>
                    <div className='imgteam'>
                        <img src={ved} className='svg' />
                            <a href="https://www.linkedin.com/in/vedurajan/"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Vedaprakash Rajan</h1>
                        <h2>Design Head</h2>
                        <h4>Udgam</h4>
                        
                    </div>
                    <div className='memberteam col-lg-3'>
                    <div className='imgteam'>
                        <img src={anushka} className='svg' />
                            <a href="https://www.linkedin.com/in/anushka-gandhi/"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Anushka Gandhi</h1>
                        <h2>Design Head</h2>
                        <h4>Udgam</h4>
                       
                    </div>
                    <div className='memberteam col-lg-3'>
                    <div className='imgteam'>
                            <img src={krish} className='svg' />
                                <a href="https://www.linkedin.com/in/krish-rajpal-b60310209/"><img className='linkicon' src={linkicon} alt="" /></a>
                            </div>
                            <h1>Krish Rajpal</h1>
                            <h2>Disrupt Head</h2>
                            <h4>Udgam</h4>
                        
                    </div>
                    <div className='memberteam col-lg-3'>
                    <div className='imgteam'>
                        <img src={shyam} className='svg' />
                            <a href="https://www.linkedin.com/in/shyamd007/"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Shyam D</h1>
                        <h2>Internfair Head</h2>
                        <h4>Udgam</h4>
                        
                    </div>


                </div>
                <div className='row teamrow'>
                    <div className='memberteam col-lg-4'>
                        <div className='imgteam'>
                        <img src={raghav} className='svg' />
                            <a href="https://www.linkedin.com/in/raghavmittal123/"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Raghav Mittal</h1>
                        <h2>Initiatives Head</h2>
                        <h4>Udgam</h4>
                    </div>

                    <div className='memberteam col-lg-3'>
                    <div className='imgteam'>
                        <img src={souma} className='svg' />
                            <a href="https://www.linkedin.com/in/soumadip-das/"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Soumadip Das</h1>
                        <h2>Lecture Series Head</h2>
                        <h4>Udgam</h4>
                        
                    </div>

                    <div className='memberteam col-lg-4'>
                    <div className='imgteam'>
                        <img src={mohitp} className='svg' />
                            <a href="https://www.linkedin.com/in/mohitpal01/"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Mohit Pal</h1>
                        <h2>PMx Head</h2>
                        <h4>Udgam</h4>
                        
                    </div>


                </div>
                <div className='row teamrow'>
                    <div className='memberteam col-lg-6'>
                    <div className='imgteam'>
                        <img src={soham} className='svg' />
                            <a href="https://www.linkedin.com/in/sohamparundekar/"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Soham Parundekar</h1>
                        <h2>GnS Head</h2>
                        <h4>Udgam</h4>
                    </div>
                    <div className='memberteam col-lg-6'>
                    <div className='imgteam'>
                        <img src={bhoomika} className='svg' />
                            <a href="https://www.linkedin.com/in/bhoomikdhaka12/"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Bhoomika Dhaka</h1>
                        <h2>GnS Head</h2>
                        <h4>Udgam</h4>
                        
                        </div>


                </div>


                {/* <div
                    className=" executive-div"
                >
                    <div className='Teamnamediv'>


                        <span className="Teamname" style={{ color: "black" }}>DESIGN</span>
                        <button
                            id="btn1"
                            onClick={myFunction}
                            style={{ backgroundColor: "#fc97d9", borderStyle: "none", height: "58px" }}
                            className="btn btn-primary btnfirst"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >

                            <img id="img123" src={Downicon} />
                        </button>
                    </div>
                </div>
                <div className="collapse-executive collapse" id="collapseExample">
                    <div className="d-flex">
                        <div className="card card-body collapse-executive-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                        <div className="collapse-executive-img" ></div>
                    </div>
                </div> */}





<Footer/>
            </div>


        </>
    );
}

export default OurTeam;
