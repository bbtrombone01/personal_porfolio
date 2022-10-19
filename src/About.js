import React from "react";
import picture from "./20220914_195803.jpg"
import { SiReact,SiRedux,SiJavascript,SiNodedotjs,SiMongodb,SiRuby,SiHtml5, SiCss3, SiWordpress, SiHeroku } from "react-icons/si";
import { IconContext } from "react-icons";



const About =()=>{

    return (
        <div>
            <div className="aboutDiv">

            <div className="container1">
                <h3> About</h3>
                <p> Hello, I'm Steven Chase. I am currently job hunting for my first full-time position as a software developer, ready to utilize the skills I have learned at Flatiron coding bootcamp as well as other projects I've taken on and apply them to real world problems. </p>
            </div>
            <div className="imageContainer">
                <img className="imageSteven" src={picture} alt="steven chase"></img>
            </div>
            </div>
            <h4>skills </h4>
            <IconContext.Provider value={{style: { height:"5%", width: "5%"}, color: "#05386B"}}>

            <div>
                    <SiReact/> 
                    <SiRedux/> 
                    <SiJavascript/>
                    <SiNodedotjs/>
                    <SiMongodb/>
                    <SiRuby/>
                    <SiHtml5/>
                    <SiCss3/> 
                    <SiWordpress/> 
                    <SiHeroku/>
            </div>
            </IconContext.Provider>
            
        </div>
    )
}

export default About