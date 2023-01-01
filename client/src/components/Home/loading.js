import React from 'react'
import arrow from './../../icons/loadingPage/arrow.svg'
import div from './../../icons/loadingPage/div.svg'
import bulb from './../../icons/loadingPage/bulb.svg'
import note from './../../icons/loadingPage/note.svg'
import rocket from './../../icons/loadingPage/rocket.svg'
import star8 from './../../icons/loadingPage/Star 8.svg'
import star from './../../icons/loadingPage/Star.svg'
import suitcase from './../../icons/loadingPage/suitcase.svg'
import udgam from './../../icons/loadingPage/udgam.svg'
import { motion } from 'framer-motion';
import "./loading.css";
function Loading() {

    return (

        <motion.div
            initial={{ zIndex: 100000 }}
            animate={{ zIndex: [100000, 1000000, 10000, 2] }}
            transition={{ duration: 3 }}
            id="bg" >

            <motion.div
                animate={{ zIndex: [1000, 5] }}
                transition={{ duration: 8 }} id="container">
                <motion.img
                    initial={{ x: 7, y: 70, opacity: 0.4 }}
                    animate={{ x: [7, -2], y: [70, 112], opacity: [0.4, 0.6, 0.8, 1, 5] }}
                    transition={{ duration: 5 }}
                    src={star} id="star" className='animation' alt="" />
                <motion.img
                    initial={{ x: 500, y: 20, opacity: 0.4, rotate: -31.74 }}
                    animate={{ x: [100, -50], y: [20, -10], rotate: [-26.5, 23.5], opacity: [0.4, 0.6, 0.8, 1, 5], rotate: [-31.74, -45] }}
                    transition={{ duration: 5, ease: 'easeOut' }}
                    src={div} id="div" className='animation' alt="" />
                <motion.img
                    initial={{ x: 0, y: 0, opacity: 0.4, rotate: -30.03 }}
                    animate={{ x: [0, 20], y: [0, -30], rotate: [-26.5, 23.5], opacity: [0.4, 0.6, 0.8, 1, 5], rotate: [-31.74, 50], scale: 1.05 }}
                    transition={{ duration: 5, ease: 'easeOut' }}
                    src={note} id="note" className='animation' alt="" />

                <motion.img
                    initial={{ x: 4, y: -2, opacity: 0.4 }}
                    animate={{ x: [2, -30], y: [-2, 25], opacity: [0.4, 0.6, 0.8, 1, 5] }}
                    transition={{ duration: 5, ease: 'easeOut' }}
                    src={star8} id="star8" className='animation' alt="" />

                <motion.img
                    initial={{ x: 210, y: 60, rotate: -28.75, opacity: 0.4, scale: 1.2 }}
                    animate={{ x: [210, 120], y: [55, -80], rotate: [-26.5, 23.5], opacity: [0.4, 0.6, 0.8, 1, 5] }}
                    transition={{ duration: 5, ease: 'easeOut' }} src={bulb} id="bulb" className='animation' alt="" />

                <motion.img initial={{ x: 2, y: 20, rotate: +34.2, opacity: 0.4, scale: 1.2 }}
                    animate={{ x: [2, 20], y: [20, -50], rotate: [+34.2, -23.5], opacity: [0.4, 0.6, 0.8, 1, 5] }}
                    transition={{ duration: 5, ease: 'easeOut' }}
                    src={suitcase} id="suitcase" className='animation' alt="" />

                <motion.img
                    initial={{ x: -150, y: -30, rotate: 0, opacity: 0.4, scale: 1.2 }}
                    animate={{ x: [-150, 0], y: [-30, 0], rotate: [0, 30.5], opacity: [0.4, 0.6, 0.8, 1, 5] }}
                    transition={{ duration: 5, ease: 'easeOut' }}
                    src={arrow} id="arrow" className='animation' alt="" />
                <motion.img
                    initial={{ x: -10, y: 20, rotate: 0, opacity: 0.4, scale: 1.6 }}
                    animate={{ x: [-10, 30], y: [20, -40], opacity: [0.4, 0.6, 0.8, 1, 5] }}
                    transition={{ duration: 5, ease: 'easeOut' }}
                    src={rocket} id="rocket" className='animation' alt="" />
            </motion.div>
            <motion.div
                initial={{ opacity: 4,zIndex: 100000  }}
                animate={{ opacity: [3, 2, 1, 0, 0], zIndex: [100000, 1000000, 100000, 2]  }}
                transition={{ duration: 8, ease: 'easeOut' }}>
                <div id="text">
                    <img src={udgam} id="udgam" alt="" />
                    <p id="one">Entrepreneur banne ke liye spelling nahi, spirit chahiye</p>
                    <p id="two">-TVF Pitchers</p>
                </div>
                <div id="loading">
                    LOADING...
                </div>
                <div id="bgImg"></div>
            </motion.div>

        </motion.div>


    )

}

export default Loading;