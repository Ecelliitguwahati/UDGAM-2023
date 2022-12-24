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
                    <h1>OUR TEAM</h1>
                </div>
                <div className='teamrow row' >
                    <div className='memberteam col-lg-4'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={krishna} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Krishna Khakholia</h1>
                        <h2>Secretary</h2>
                        <h4>E-Cell IITG</h4>
                    </div>
                    <div className='memberteam col-lg-4'>
                        <div className='imgteam'>
                            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M170.799 0H129.201V22.549C127.407 29.5752 120.099 40.7843 105.221 29.4118L93.9647 8.82353L57.2597 29.4118L68.5159 50.4902C70.4735 57.8431 69.7883 71.5686 51.3869 67.6471L30.8322 55.8824L9.78799 93.1373L30.8322 104.902C35.3999 110.294 40.4244 122.549 23.9806 128.431H0V171.569H23.9806C40.4244 177.451 35.3999 189.706 30.8322 195.098L9.78799 206.863L30.8322 244.118L51.3869 232.353C69.7883 228.431 70.4735 242.157 68.5159 249.51L57.2597 270.588L93.9647 291.176L105.221 270.588C120.099 259.216 127.407 270.425 129.201 277.451V300H170.799V277.451C172.593 270.425 179.901 259.216 194.779 270.588L206.035 291.176L242.74 270.588L231.484 249.51C229.526 242.157 230.212 228.431 248.613 232.353L269.168 244.118L290.212 206.863L269.168 195.098C264.6 189.706 259.576 177.451 276.019 171.569H300V128.431H276.019C259.576 122.549 264.6 110.294 269.168 104.902L290.212 93.1373L269.168 55.8824L248.613 67.6471C230.212 71.5686 229.526 57.8431 231.484 50.4902L242.74 29.4118L206.035 8.82353L194.779 29.4118C179.901 40.7843 172.593 29.5752 170.799 22.549V0Z" fill="#DDF140" />
                                <circle cx="149.5" cy="149.5" r="132.5" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='umangpic' src={umang} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Umang Jain</h1>
                        <h2>Convener</h2>
                        <h4>Udgam</h4>
                    </div>
                    <div className='memberteam col-lg-4'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={sahil} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Sahil Nizam</h1>
                        <h2>NEED Head</h2>
                        <h4>Udgam</h4>
                    </div>
                </div>
                <div className='teamrow row'>
                    <div className='memberteam col-lg-3'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={krish} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Krish Rajpal</h1>
                        <h2>Disrupt Head</h2>
                        <h4>Udgam</h4>
                    </div>
                    <div className='memberteam col-lg-3'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={mohitp} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Mohit Pal</h1>
                        <h2>PMx Head</h2>
                        <h4>Udgam</h4>
                    </div>
                    <div className='memberteam col-lg-3'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={shyam} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Shyam Dinkaran</h1>
                        <h2>Internfair Head</h2>
                        <h4>Udgam</h4>
                    </div>
                    <div className='memberteam col-lg-3'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={souma} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Soumadip Das</h1>
                        <h2>Lecture Series Head</h2>
                        <h4>Udgam</h4>
                    </div>


                </div>
                <div className='row teamrow'>
                    <div className='memberteam col-lg-4'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={raghav} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Raghav Mittal</h1>
                        <h2>Initiatives Head</h2>
                        <h4>Udgam</h4>
                    </div>

                    <div className='memberteam col-lg-3'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={soham} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Soham Parundekar</h1>
                        <h2>GnS Head</h2>
                        <h4>Udgam</h4>
                    </div>

                    <div className='memberteam col-lg-4'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={bhoomika} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Bhoomika Dhaka</h1>
                        <h2>GnS Head</h2>
                        <h4>Udgam</h4>
                    </div>


                </div>
                <div className='row teamrow'>
                    <div className='memberteam col-lg-6'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={anushka} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Anushka Gandhi</h1>
                        <h2>Design Head</h2>
                        <h4>Udgam</h4>
                    </div>
                    <div className='memberteam col-lg-6'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={ved} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Vedaprakash Rajan</h1>
                        <h2>Design Head</h2>
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
