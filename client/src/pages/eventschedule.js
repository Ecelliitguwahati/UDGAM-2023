import React from "react";
import Navbar from "../components/Navbar";
import di from "./../icons/downloadIMG.svg"


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
            <div className="containerschedule">
                <div className="row g-0">
                    <div className="datebox  col-lg-3">
                        <div className="activebox headingschedule">
                            <span>19 Jan</span>
                        </div>
                    </div>
                    <div className="datebox col-lg-3">
                        <div className="headingschedule">
                            <span>20 Jan</span>
                        </div>
                    </div>
                    <div className="datebox col-lg-3">
                        <div className="headingschedule">
                            <span>21 Jan</span>
                        </div>
                    </div>
                    <div className="datebox col-lg-3">
                        <div className="headingschedule">
                            <span>22 Jan</span>
                        </div>
                    </div>
                </div>
                <div className="schedule2nd">
                    <div className="timescheule">
                        <div className="9 AM timess">9 AM</div>
                        <div className="9 AM timess">10 AM</div>
                        <div className="9 AM timess">11 AM</div>
                        <div className="9 AM timess">12 PM</div>
                        <div className="9 AM timess">1 PM</div>
                        <div className="9 AM timess">2 PM</div>
                        <div className="9 AM timess">3 PM</div>
                        <div className="9 AM timess">4 PM</div>
                        <div className="9 AM timess">5 PM</div>
                        <div className="9 AM timess">6 PM</div>
                        <div className="9 AM timess">7 PM</div>
                        <div className="9 AM timess">8 PM</div>
                        <div className="9 AM timess">9 PM</div>
                        <div className="9 AM timess">10 PM</div>
                    </div>
                    <div className="schedulebox row g-0">
                        <div className="eventcont  col-lg-4">
                      {/* {  eventstoday.map(function(item, i){
  console.log('test');
   <div className="9 AM trueeventbox"> 
  Lecture Series
</div>
})} */}
                            
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            <div className="9 AM eventbox"></div>
                            
                        </div>
                        <div className="eventcont col-lg-4">
                            <div className="9 AM eventbox">9 AM</div>
                            <div className="9 AM eventbox">10 AM</div>
                            <div className="9 AM eventbox">11 AM</div>
                            <div className="9 AM eventbox">12 PM</div>
                            <div className="9 AM eventbox">1 PM</div>
                            <div className="9 AM eventbox">2 PM</div>
                            <div className="9 AM eventbox">3 PM</div>
                            <div className="9 AM eventbox">4 PM</div>
                            <div className="9 AM eventbox">5 PM</div>
                            <div className="9 AM eventbox">6 PM</div>
                            <div className="9 AM eventbox">7 PM</div>
                            <div className="9 AM eventbox">8 PM</div>
                            <div className="9 AM eventbox">9 PM</div>
                            <div className="9 AM eventbox">10 PM</div>
                        </div>
                        <div className="eventcont col-lg-4">
                            <div className="9 AM eventbox">9 AM</div>
                            <div className="9 AM eventbox">10 AM</div>
                            <div className="9 AM eventbox">11 AM</div>
                            <div className="9 AM eventbox">12 PM</div>
                            <div className="9 AM eventbox">1 PM</div>
                            <div className="9 AM eventbox">2 PM</div>
                            <div className="9 AM eventbox">3 PM</div>
                            <div className="9 AM eventbox">4 PM</div>
                            <div className="9 AM eventbox">5 PM</div>
                            <div className="9 AM eventbox">6 PM</div>
                            <div className="9 AM eventbox">7 PM</div>
                            <div className="9 AM eventbox">8 PM</div>
                            <div className="9 AM eventbox">9 PM</div>
                            <div className="9 AM eventbox">10 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default EventSchedule;
