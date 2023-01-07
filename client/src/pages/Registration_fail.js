

import './Registration_fail.css'
import errorpng from "../icons/Error 1.svg"
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import meuc from "../icons/meuc.svg";
import mec from "../icons/mec.svg";
import { useState } from "react";
function RegFail() {
  const [img, setimg] = useState(meuc);
  return (
    <body style={{ backgroundImage: "#060213", backgroundSize: "cover", height: "150vh" }}>
      <Navbar />
      <div className='paymentFailEntireBox'>
        <div class="paymentFailBoxLeft">
          <img src={errorpng} />
        </div>
        <div class="paymentFailBoxRight">
          <h1 className='paymentFail'>Payment Failed</h1><br/><br/>
          <div className='body'>
      <a href="/registration" target="_blank">
      <div >
        <div className='back'>
        </div>

        <div
          className='face'>
          TRY AGAIN
        </div>

      </div>
      </a>
    </div>
          <div class="FacedOtherIssueBox">
            <p>Bought the ticket, but didn't receive the pass ?</p>
            <Link to={"/contactus"}target="_blank" className="link">
						<div
							className="FacedOtherIssueBoxarrow"
							onMouseEnter={() => {
								setimg(mec);
							}}
							onMouseLeave={() => {
								setimg(meuc);
							}}
						>
							Contact us &nbsp;&nbsp;<img alt="altimg" src={img}/>
						</div>
            					</Link>
          </div>
        </div>
      </div>








    </body>
  );
}

export default RegFail;
