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
import idfc from '../sponsors/idfc.svg'
import havells from '../sponsors/havells.svg';
import zaloni from '../sponsors/zaloni.svg';
import weh from '../sponsors/weh.svg'
import bosch from '../sponsors/bosch.svg'
import nrl from '../sponsors/nrl.svg'
import tsl from '../sponsors/tsl.svg'
import uiv from '../sponsors/UIV.svg'
import khaask from '../sponsors/khaask.svg'
import ss from '../sponsors/ss.svg'
import ia from '../sponsors/ia.svg'
import ve from '../sponsors/ve.svg'
import ib from '../sponsors/ib.svg'
import ta from '../sponsors/ta.svg'
import lwt from '../sponsors/lwt.svg'
import toi from '../sponsors/toi.svg'
import jb from '../sponsors/jb.svg'
import tpf from '../sponsors/tpf.svg'
import airt from '../sponsors/airt.svg'
import pmi from '../sponsors/pmi.svg'
import why from '../sponsors/why.svg'
import ep from '../sponsors/ep.svg'
import tnm from '../sponsors/tnm.svg'
import youthi from '../sponsors/youthi.svg'

import { useState } from 'react';


function Sponsors() {
    const [t1, sett1] = useState('-12px');
    const [l1, setl1] = useState('-14px');
    const [t2, sett2] = useState('-12px');
    const [l2, setl2] = useState('-14px');
    const [t3, sett3] = useState('-12px');
    const [l3, setl3] = useState('-14px');
    return (
        <body class="sponsorpage">
            <Navbar />
            <div class="sponsorbox">
                <h1>Sponsors</h1>
            </div>
            <div class="containersponsorbox">
                <div class="title-sponsor">
                    
                    <a href='https://www.tataprojects.com/' target="_blank" ><img src={Tata} className="tatalogo"></img></a>
                    <h3>Title Sponsor</h3>
                </div>

                <div className='associateTitle'>
                    <div className='out'>
                        <div className='in'
                        onMouseEnter={()=>{
                            sett1('0');
                            setl1('0');
                        }}
                        onMouseLeave={()=>{
                            sett1('-12px');
                            setl1('-14px');
                        }}
                        style={{top:`${t1}`, left:`${l1}`}} >
                            <a href='https://www.idfcfirstbank.com/' target="_blank"><img src={idfc} /></a>
                        </div>
                        
                    </div>
                    <div className='out'>
                        <div className='in'
                        onMouseEnter={()=>{
                            sett2('0');
                            setl2('0');
                        }}
                        onMouseLeave={()=>{
                            sett2('-12px');
                            setl2('-14px');
                        }}
                        style={{top:`${t2}`, left:`${l2}`}}>
                            <a href='https://www.havells.com/' target="_blank"><img src={havells} /></a>
                        </div>
                    </div>
                    <div className='out'>
                        <div className='in'
                        onMouseEnter={()=>{
                            sett3('0');
                            setl3('0');
                        }}
                        onMouseLeave={()=>{
                            sett3('-12px');
                            setl3('-14px');
                        }}
                        style={{top:`${t3}`, left:`${l3}`}} >
                            <a href='https://www.zaloni.com/' target="_blank"><img src={zaloni} /></a>
                        </div>
                    </div>
                </div>
                <div className='title-sponsor'>
                        <h3>Co-title sponsor</h3>
                </div>

                <div className='otherSponsors'>
                <div>
                    <a href='https://timesofindia.indiatimes.com/?from=mdr' target="_blank"><img src={toi} /></a>
                    <p>Powered by</p>
                    </div>
                    <div>
                    <a href='https://www.wehventures.com/' target="_blank"><img src={weh} /></a>
                    <p>Disrupt Title Sponsor</p>
                    </div>

                    <div>
                    <a href='https://www.bosch.com/' target="_blank"><img src={bosch} /></a>
                    <p>Encode Title Sponsor</p>
                    </div>

                    <div>
                    <a href='https://www.nrl.co.in/' target="_blank"><img src={nrl} /></a>
                    <p>Government Partner</p>
                    </div>

                    <div>
                    <a href='https://www.indiaaccelerator.co/' target="_blank" ><img src={ia} /></a>
                    <p>Accelerator Partner</p>
                    </div>

                    <div>
                    <a href='https://www.jetbrains.com/'target="_blank" ><img src={jb} /></a>
                    <p>Development Partner</p>
                    </div>

                    <div>
                    <a href='https://www.theproductfolks.com/' target="_blank"><img src={tpf} /></a>
                    <p>PMx Partner</p>
                    </div>

                    <div>
                    <a href='https://www.airtribe.live/' target="_blank"><img src={airt} /></a>
                    <p>Enrichment Partner</p>
                    </div>

                    <div>
                    <a href='' target="_blank"><img src={pmi} /></a>
                    <p>InterviEW Preparations Partner</p>
                    </div>

                    <div>
                    <a href='https://thestartuplab.in/' target="_blank"><img src={tsl} /></a>
                    <p>Events Partner</p>
                    </div>

                    <div>
                    <a href='https://www.geeksforgeeks.org/' target="_blank"><img src={gfg} /></a>
                    <p>Campus Ambassador Partner</p>
                    </div>

                    <div>
                    <a href='https://www.unicornivc.com/' target="_blank"><img src={uiv} /></a>
                    <p>Mentorship Partner</p>
                    </div>

                    <div>
                    <a href='https://www.ventureast.net/' target="_blank"><img src={ve} /></a>
                    <p>Mentorship Sponsor</p>
                    </div>

                    <div>
                    <a href='https://expertpoint.in/' target="_blank"><img src={ep} /></a>
                    <p>Mentorship Partner</p>
                    </div>

                    <div>
                    <a href='https://www.jordensky.com/' target="_blank"><img src={jordan} /></a>
                    <p>Disrupt Law Sponsor</p>
                    </div>

                    <div>
                    <a href='https://interviewbuddy.in/' target="_blank"><img src={ib} /></a>
                    <p>Learning Partner - CAP</p>
                    </div>

                    <div>
                    <a href='https://techanalogy.org/' target="_blank"><img src={ta} /></a>
                    <p>Knowledge Partner - CAP</p>
                    </div>

                    <div>
                    <a href='https://learningwhiletravelling.com/home' target="_blank"><img src={lwt} /></a>
                    <p>Ecosystem Partner</p>
                    </div>

                    <div>
                    <a href='https://youthincmag.com/' target="_blank"><img src={youthi} /></a>
                    <p>Youth Media Partner</p>
                    </div>

                    <div>
                    <a href='https://www.ihoik.com/' target="_blank"><img src={kota} /></a>
                    <p>Media Partner</p>
                    </div>

                    <div>
                    <a href='' target="_blank"><img src={why} /></a>
                    <p>Media Partner</p>
                    </div>

                    <div>
                    <a href='https://startupstorymedia.com/' target="_blank"><img src={ss} /></a>
                    <p>Media Partner</p>
                    </div>

                    <div>
                    <a href='https://www.khaskhabar.com/' target="_blank"><img src={khaask} /></a>
                    <p>Media Partner</p>
                    </div>

                    <div>
                    <a href='https://thenewsmill.com/' target="_blank"><img src={tnm} /></a>
                    <p>Media Partner</p>
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
