import React from "react";

import linkicon from "../../icons/Frame 34161.png"

const Speakercomp =(props)=>{
    return(
        <div className="contspeak" style={{height:`max-content`}}>
            <div style={{position:`relative`, height:`fit-content`, width:`fit-content`}}>
                {/* <a href={props.link} target="_blank" ><img src={linkicon} style={{position:`absolute`, top:`178px`, left:`109px`}}/></a> */}
                <img src={props.img} />
            </div>
            <div style={{display:`flex`, flexDirection:`column`, justifyContent:`center`, alignContent:`center`,textAlign:`center`}} >
                <p style={{color:`#FFFFFF`, fontSize:`32px`, fontFamily:`Action Sans`, margin:`18px 0 9px 0`, fontWeight:"700"


}}><b>{props.name}</b> </p>
                <p style={{color:`#DDF140`, fontSize:`24px`, fontFamily:`Action Sans`,lineHeight:"12px"}}>{props.comp}</p>
                <p style={{color:`#FC97D9`, fontSize:`20px`, fontFamily:`Action Sans`}}>{props.pos}</p>
            </div>
        </div>
    );
}

export default Speakercomp;