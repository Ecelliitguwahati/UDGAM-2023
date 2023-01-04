import React from 'react'
import { Button } from '@cred/neopop-web/lib/components';
import './sponsors.css'
import Navbar from '../components/Navbar';
import Tata from '../sponsors/TATA.png';
import Tata2 from '../sponsors/TATA2.png';
import gfg from '../sponsors/gfg.png';
import jordan from '../sponsors/jordan.png';
import kota from '../sponsors/kota.png';
import Footer from '../components/Home/footer';
import idfc from '../sponsors/idfc.png'
import havells from '../sponsors/havells.png';
import zaloni from '../sponsors/zaloni.png';
import weh from '../sponsors/weh.png'
import bosch from '../sponsors/bosch.png'
import nrl from '../sponsors/nrl.png'
import tsl from '../sponsors/tsl.png'
import uiv from '../sponsors/UIV.png'
import khaask from '../sponsors/khaask.png'
import ss from '../sponsors/ss.png'
import ia from '../sponsors/ia.png'
import ve from '../sponsors/ve.png'
import ib from '../sponsors/ib.png'
import ta from '../sponsors/ta.png'
import lwt from '../sponsors/lwt.png'
import toi from '../sponsors/toi.png'
import jb from '../sponsors/jb.png'
import tpf from '../sponsors/tpf.png'
import airt from '../sponsors/airt.png'
import pmi from '../sponsors/pmi.png'
import why from '../sponsors/why.png'
import ep from '../sponsors/ep.png'
import tnm from '../sponsors/tnm.png'
import youthi from '../sponsors/youthi.png'

import { useState } from 'react';


function Sponsors() {
    const [t0, sett0] = useState('-12px');
    const [l0, setl0] = useState('-14px');
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
                {window.innerWidth > 700 ? (
                    <div class="title-sponsor">
                        <div className='out outtitle'>
                            <div className='in intitle imgtitle'
                                onMouseEnter={() => {
                                    sett0('0');
                                    setl0('0');
                                }}
                                onMouseLeave={() => {
                                    sett0('-12px');
                                    setl0('-14px');
                                }}
                                style={{ top: `${t0}`, left: `${l0}` }} >
                                <a href='https://www.tataprojects.com/' target="_blank">
                                    <img className='imgtitle' src={Tata} /></a>
                                <div className='svg1'> <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.1391 2.07323C39.4052 1.51843 40.1952 1.51844 40.4613 2.07323L46.772 15.2264C47.3146 16.3574 48.6915 16.8064 49.7965 16.2128L63.0933 9.06975C63.6444 8.77371 64.2893 9.25928 64.1571 9.87071L61.1501 23.778C60.8737 25.0561 61.7666 26.2917 63.0669 26.4304L78.0223 28.0263C78.6599 28.0944 78.9092 28.8903 78.4243 29.3099L67.4511 38.807C66.4375 39.6843 66.4375 41.2565 67.4511 42.1338L78.4243 51.6309C78.9092 52.0505 78.6599 52.8464 78.0223 52.9145L63.0669 54.5104C61.7666 54.6491 60.8737 55.8847 61.1501 57.1628L64.1571 71.0701C64.2893 71.6815 63.6444 72.1671 63.0933 71.8711L49.7965 64.728C48.6915 64.1344 47.3146 64.5835 46.772 65.7144L40.4613 78.8676C40.1952 79.4224 39.4052 79.4224 39.1391 78.8676L32.8284 65.7144C32.2858 64.5835 30.9089 64.1344 29.8039 64.728L16.5071 71.8711C15.956 72.1671 15.3111 71.6815 15.4433 71.0701L18.4503 57.1628C18.7267 55.8847 17.8338 54.6491 16.5335 54.5104L1.57814 52.9145C0.940523 52.8464 0.691205 52.0505 1.17606 51.6309L12.1493 42.1338C13.1629 41.2565 13.1629 39.6843 12.1493 38.807L1.17607 29.31C0.691204 28.8903 0.940527 28.0944 1.57814 28.0263L16.5335 26.4304C17.8338 26.2917 18.7267 25.0561 18.4503 23.778L15.4433 9.87071C15.3111 9.25928 15.956 8.77371 16.5071 9.06975L29.8039 16.2128C30.9089 16.8064 32.2858 16.3574 32.8284 15.2264L39.1391 2.07323Z" stroke="#F1F1F1" stroke-width="1.4666" />
                                </svg></div>
                                <div className='svg2'> <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.1391 2.07323C39.4052 1.51843 40.1952 1.51844 40.4613 2.07323L46.772 15.2264C47.3146 16.3574 48.6915 16.8064 49.7965 16.2128L63.0933 9.06975C63.6444 8.77371 64.2893 9.25928 64.1571 9.87071L61.1501 23.778C60.8737 25.0561 61.7666 26.2917 63.0669 26.4304L78.0223 28.0263C78.6599 28.0944 78.9092 28.8903 78.4243 29.3099L67.4511 38.807C66.4375 39.6843 66.4375 41.2565 67.4511 42.1338L78.4243 51.6309C78.9092 52.0505 78.6599 52.8464 78.0223 52.9145L63.0669 54.5104C61.7666 54.6491 60.8737 55.8847 61.1501 57.1628L64.1571 71.0701C64.2893 71.6815 63.6444 72.1671 63.0933 71.8711L49.7965 64.728C48.6915 64.1344 47.3146 64.5835 46.772 65.7144L40.4613 78.8676C40.1952 79.4224 39.4052 79.4224 39.1391 78.8676L32.8284 65.7144C32.2858 64.5835 30.9089 64.1344 29.8039 64.728L16.5071 71.8711C15.956 72.1671 15.3111 71.6815 15.4433 71.0701L18.4503 57.1628C18.7267 55.8847 17.8338 54.6491 16.5335 54.5104L1.57814 52.9145C0.940523 52.8464 0.691205 52.0505 1.17606 51.6309L12.1493 42.1338C13.1629 41.2565 13.1629 39.6843 12.1493 38.807L1.17607 29.31C0.691204 28.8903 0.940527 28.0944 1.57814 28.0263L16.5335 26.4304C17.8338 26.2917 18.7267 25.0561 18.4503 23.778L15.4433 9.87071C15.3111 9.25928 15.956 8.77371 16.5071 9.06975L29.8039 16.2128C30.9089 16.8064 32.2858 16.3574 32.8284 15.2264L39.1391 2.07323Z" stroke="#F1F1F1" stroke-width="1.4666" />
                                </svg></div>

                            </div>

                        </div>
                        {/* <a href='https://www.tataprojects.com/' target="_blank" ><img src={Tata} className="tatalogo"></img></a>
          <h3>Title Sponsor</h3> */}
                    </div>
                ) : (
                    <div class="title-sponsor">

                        <a href='https://www.tataprojects.com/' target="_blank" ><img src={Tata2} className="tatalogo"></img></a>
                        <h3>Title Sponsor</h3>
                    </div>
                )
                }



                <div className='associateTitle'>
                    <div className='out'>
                        <div className='in'
                            onMouseEnter={() => {
                                sett1('0');
                                setl1('0');
                            }}
                            onMouseLeave={() => {
                                sett1('-12px');
                                setl1('-14px');
                            }}
                            style={{ top: `${t1}`, left: `${l1}` }} >
                            <a href='https://www.idfcfirstbank.com/' target="_blank"><img src={idfc} /></a>
                        </div>

                    </div>
                    <div className='out'>
                        <div className='in'
                            onMouseEnter={() => {
                                sett2('0');
                                setl2('0');
                            }}
                            onMouseLeave={() => {
                                sett2('-12px');
                                setl2('-14px');
                            }}
                            style={{ top: `${t2}`, left: `${l2}` }}>
                            <a href='https://www.havells.com/' target="_blank"><img src={havells} /></a>
                        </div>
                    </div>
                    <div className='out'>
                        <div className='in'
                            onMouseEnter={() => {
                                sett3('0');
                                setl3('0');
                            }}
                            onMouseLeave={() => {
                                sett3('-12px');
                                setl3('-14px');
                            }}
                            style={{ top: `${t3}`, left: `${l3}` }} >
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
                        <a href='https://www.jetbrains.com/' target="_blank" ><img src={jb} /></a>
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
                        <a href='https://pmi.dorik.io/' target="_blank"><img src={pmi} /></a>
                        <p>Interview Preparations Partner</p>
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
                        colorConfig={{ backgroundColor: "#F0E266", borderColor: "black", edgeColors: { right: "#736B1F", bottom: "#736B1F" } }}
                        spacingConfig={{ height: "80px" }}
                        onClick={() => {
                            window.open('/contactus', '_blank');
                        }}
                    >
                        <div className="GetTkt" style={{ color: "black" }}>CONTACT US</div>
                    </Button></div>
                </div>
            </div>
            <Footer />
        </body>
    );
}

export default Sponsors
