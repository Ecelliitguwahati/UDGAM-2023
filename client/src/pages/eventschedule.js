import React from "react";
import Navbar from "../components/Navbar";
import di from "./../icons/downloadIMG.svg"
import schedulefile from "../files/udgamschedule.pdf"

import './eventschedule.css'

function EventSchedule() {
    const eventstoday=[{
        "eventname":"Speaker 1",
        "event":"Lecture Series",
        "img":1,
        "column":1
    }];
    return (
        <body className="schedulebody">
            <Navbar />
            <div className="topallmembers">
                    <h1>LOOK AT OUR SCHEDULE</h1>
                </div>
            <div style={{width: "100%", height: "fit-content"}}>
            <iframe src={schedulefile}  width="100%"
                style={{height: "1000px"}} frameborder="0"></iframe>
            </div>
        </body>
    );
}

export default EventSchedule;
