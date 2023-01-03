import React, { useEffect } from "react";
import { useState } from "react";
import dd from "../PhotosPng/dd.svg";
import dx from "../PhotosPng/dx.svg";

const Dropdown =(props)=>{
    useEffect(() => {
		console.log(props.text)
	});
    const [img,setimg] = useState(dd);
    const [dis, setdis] = useState('none');
    return(
        <div style={{margin:`20px`, height:`fit-content`}}>
            <div className="teamN" style={{backgroundColor:`#FC97D9`, color:`#1A074E`,minHeight:`75px`,maxHeight:`fit-content`, width:`100%`, display:`flex`,flexDirection:`row`, justifyContent:`space-between`,alignItems:`center`, marginBottom:`20px`}}>
                <p style={{width:`100%`, textAlign:`center`}} >
                    <b>{props.team}</b>
                </p>
                <img src={img} onClick={()=>{
                    
                    if(img===dd){
                        setimg(dx);
                        setdis('flex');
                    }
                    else
                    {
                        setimg(dd);
                        setdis('none');
                    }
                    
                }} style={{height:`36px`, width:`36px`, transition:`0.5s`}} />
            </div>
            <div className="teamInfo" style={{height:`fit-content`,backgroundColor:`#DDF140`, color:`#2E01D5`,display:`${dis}`,width:`100%`, fontSize:`36px`, padding:`39px 30px`, flexDirection:`row`, transition:`0.5s`}}>
                <p style={{ width:`100%`}}>{props.text}</p>
                <div style={{width:"100%"}}><img src={props.img} style={{width:"100%", height:"auto"}}/></div>
            </div>
        </div>
        
    );
}

export default Dropdown;

