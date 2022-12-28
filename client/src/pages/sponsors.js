import React from 'react'
import { Button } from '@cred/neopop-web/lib/components';
import './sponsors.css'
import sponsordemo from '../icons/sponsordemo.png'
import Navbar from '../components/Navbar';
import Tata from '../sponsors/TATA.svg';
import lt from '../sponsors/lt.svg';
import gfg from '../sponsors/gfg.svg';
import ghaskhabar from '../sponsors/ghaskhabar.svg';
import INA from '../sponsors/INA.svg';
import INB from '../sponsors/INB.svg';
import jordan from '../sponsors/jordan.svg';
import kota from '../sponsors/kota.svg';
import startuplab from '../sponsors/startuplab.svg';
import technalogy from '../sponsors/technalogy.svg';
import UIV from '../sponsors/UIV.svg';
import venture from '../sponsors/venture.svg';
import whev from '../sponsors/whev.svg';
import Footer from '../components/Home/footer';


function Sponsors() {
    return (
        <body class="sponsorpage">
            <Navbar />
            <div class="sponsorbox">
                <h1>Sponsors</h1>
            </div>
            <div class="containersponsorbox">
                <div class="title-sponsor">
                    
                    <a href='https://www.tataprojects.com/' ><img src={Tata} className="tatalogo"></img></a>
                    <h3>Title Sponsor</h3>
                </div>

                <div class="associate-title">
                    <div class="individual-associate">
                        <a href='https://learningwhiletravelling.com/home'><img src={lt}></img></a>
                        <h3>Ecosystem Partner</h3>
                    </div>

                    <div class="individual-associate">
                        <a href='https://thestartuplab.in/'><img src={startuplab}></img></a>
                        <h3>Events Partner</h3>
                    </div>

                    <div class="individual-associate">
                        <a href='https://www.geeksforgeeks.org/'><img src={gfg}></img></a>
                        <h3>Campus Ambassador Partner</h3>
                    </div>

                </div>
                <div class="associate-title">
                    <div class="individual-associate">
                        <a href='https://www.indiaaccelerator.co/'><img src={INA}></img></a>
                        <h3>Accelerator Partner</h3>
                    </div>
                    <div class="individual-associate">
                        <a href='https://www.unicornivc.com/'><img src={UIV}></img></a>
                        <h3>Mentorship Partner</h3>
                    </div>
                </div>

                <div class="partners event-partner">
                    <h3>CAP Partners</h3>
                    <div class="associate-title">
                        <div class="individual-associate">
                        <a href='https://interviewbuddy.in/'><img src={INB}></img></a>
                            <h3 className='partners-subtitle'>Learning Partner <br/>CAP</h3>
                        </div>
                        <div class="individual-associate">
                        <a href='https://techanalogy.org/'><img src={technalogy}></img></a>
                            <h3  className='partners-subtitle'>Knowledge Partner <br/>CAP</h3>
                        </div>

                    </div>
                </div>

                <div class="partners event-partner">
                    <h3>Disrupt Partners</h3>
                    <div class="associate-title">
                        <div class="individual-associate">
                        <a href='https://www.wehventures.com/'><img src={whev}></img></a>
                            <h3  className='partners-subtitle'>Title Sponsor</h3>
                        </div>
                        <div class="individual-associate">
                        <a href='https://www.jordensky.com/'><img src={jordan}></img></a>
                            <h3  className='partners-subtitle'>Law Partner</h3>
                        </div>
                        <div class="individual-associate">
                        <a href='https://www.ventureast.net/'><img src={venture}></img></a>
                            <h3  className='partners-subtitle'>Mentorship Partner</h3>
                        </div>
                    </div>
                </div>

                <div class="partners event-partner">
                    <h3>Media Partners</h3>
                    <div class="associate-title">
                        <div class="individual-associate">
                        <a href='https://www.khaskhabar.com/'><img src={ghaskhabar}></img></a>
                           
                        </div>
                        <div class="individual-associate">
                        <a href='https://www.ihoik.com/'><img src={kota}></img></a>
                        </div>

                    </div>
                </div>
                
                <div class="getticketsponsor">
                    <h1>WANT TO BECOME OUR SPONSOR?</h1>
                    <div class="buttoncenter">       <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
            colorConfig={{backgroundColor:"#F0E266",borderColor:"black",edgeColors:{right:"#736B1F",bottom:"#736B1F"}}}
            spacingConfig={{height:"80px"}}
            onClick={() => {
                window.open('/contactus', '_blank');
            }}
        >
            <div className="GetTkt" style={{color:"black"}}>CONTACT US</div>
    </Button></div>
                </div>
            </div>
            <Footer/>
        </body>
    );
}

export default Sponsors
