import React, { useState } from 'react'
import Bosh from '../../PhotosPng/bosch.png'
import Timesofindia from '../../PhotosPng/toi.png'
import NRL from '../../PhotosPng/nrl.png'
import WEH from '../../PhotosPng/weh.png'
import './sponsors.css'
import './GetTicket_Spomsor.css'
//import { Button } from '@cred/neopop-web/lib/components';
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//   import './../../pages/sponsors.css'

import va from "../../icons/va.svg"
import meuc from '../../icons/meuc.svg'
import mec from '../../icons/mec.svg'

import Tata from '../../sponsors/TATA.png';
import Tata2 from '../../sponsors/TATA2.png';

import idfc from '../../sponsors/idfc.png'
import havells from '../../sponsors/havells.png';
import zaloni from '../../sponsors/zaloni.png';

function Sponsor() {
    const [img, setimg] = useState(meuc);
    const [t0, sett0] = useState('-12px');
    const [l0, setl0] = useState('-14px');
    const [t1, sett1] = useState('-12px');
    const [l1, setl1] = useState('-14px');
    const [t2, sett2] = useState('-12px');
    const [l2, setl2] = useState('-14px');
    const [t3, sett3] = useState('-12px');
    const [l3, setl3] = useState('-14px');
    const [t4, sett4] = useState('-12px');
    const [l4, setl4] = useState('-14px');
    const [t5, sett5] = useState('-12px');
    const [l5, setl5] = useState('-14px');
    const [t6, sett6] = useState('-12px');
    const [l6, setl6] = useState('-14px');
    const [t7, sett7] = useState('-12px');
    const [l7, setl7] = useState('-14px');
    return (

        <div className='sponsorhome' style={{ backgroundColor: "#0c0227" }}>
            <div className="top topmerch">
                <div className='t'>
                    <h1>SPONSORS</h1>
                    <a href='/sponsors' className="va"><p>View all <img alt="altimg" src={va} /></p></a>
                </div>

                <button className='topbut'
                    onMouseEnter={() => {
                        setimg(mec);
                    }}
                    onMouseLeave={() => {
                        setimg(meuc);
                    }}
                    onClick={() => {
                        window.open('/contactus', '_blank');
                    }}
                ><a href="/contactus?reason=sponsorship" >Become a sponsor <img alt="altimg" src={img} />
                    </a>
                </button>
            </div>
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
                                <img className='imgtitle' src={Tata} alt="altimg" /></a>
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

                    <a href='https://www.tataprojects.com/' target="_blank" ><img src={Tata2} alt="altimg" className="tatalogo"></img></a>
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
                        <a href='https://www.idfcfirstbank.com/' target="_blank"><img src={idfc} alt="altimg" /></a>
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
                        <a href='https://www.havells.com/' target="_blank"><img src={havells}alt="altimg"  /></a>
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
                        <a href='https://www.zaloni.com/' target="_blank"><img src={zaloni} alt="altimg" /></a>
                    </div>
                </div>
            </div>
            <div className='associateTitle' >
                <div className='out out2' >
                    <div className='in in2'
                        onMouseEnter={() => {
                            sett4('0');
                            setl4('0');
                        }}
                        onMouseLeave={() => {
                            sett4('-12px');
                            setl4('-14px');
                        }}
                        style={{ top: `${t4}`, left: `${l4}` }}
                    >
                        <a href='https://timesofindia.indiatimes.com/?from=mdr' target="_blank"><img src={Timesofindia} alt="altimg" /></a>
                    </div>

                </div>
                <div className='out out2' >
                    <div className='in in2'
                        onMouseEnter={() => {
                            sett5('0');
                            setl5('0');
                        }}
                        onMouseLeave={() => {
                            sett5('-12px');
                            setl5('-14px');
                        }}
                        style={{ top: `${t5}`, left: `${l5}` }}
                    >
                        <a href='https://www.bosch.com/' target="_blank"><img src={Bosh}alt="altimg"  /></a>
                    </div>

                </div>
                <div className='out out2' >
                    <div className='in in2'
                        onMouseEnter={() => {
                            sett6('0');
                            setl6('0');
                        }}
                        onMouseLeave={() => {
                            sett6('-12px');
                            setl6('-14px');
                        }}
                        style={{ top: `${t6}`, left: `${l6}` }}
                    >
                        <a href='https://www.nrl.co.in/' target="_blank"><img src={NRL} alt="altimg" /></a>
                    </div>

                </div>
                <div className='out out2' >
                    <div className='in in2'
                        onMouseEnter={() => {
                            sett7('0');
                            setl7('0');
                        }}
                        onMouseLeave={() => {
                            sett7('-12px');
                            setl7('-14px');
                        }}
                        style={{ top: `${t7}`, left: `${l7}` }}
                    >
                        <a href='https://www.wehventures.com/' target="_blank"><img src={WEH} alt="altimg" /></a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Sponsor
