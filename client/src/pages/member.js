import React from "react";

import linkicon from "../icons/Frame 34161.png"

const Member =(props)=>{
    return(
        <div className="cont" >
            <div style={{position:`relative`, height:`fit-content`, width:`fit-content`}}>
                <a href={props.link} target="_blank" ><img src={linkicon} style={{position:`absolute`, top:`178px`, left:`109px`}}/></a>
                <img src={props.img} style={{height:`219px`, width:`213px`}}/>
            </div>
            <div style={{display:`flex`, flexDirection:`column`, justifyContent:`center`, alignContent:`center`,textAlign:`center`}} >
                <p style={{color:`#FFFFFF`, fontSize:`28px`, fontFamily:`Action Sans`, margin:`18px 0 9px 0`}}><b>{props.name}</b> </p>
                <p style={{color:`#DDF140`, fontSize:`23px`, fontFamily:`Action Sans`}}>{props.pos}</p>
            </div>
        </div>
    );
}

export default Member;