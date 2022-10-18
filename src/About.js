import React from "react";
import picture from "./20220914_195803.jpg"
import { SiReact,SiRedux,SiJavascript,SiNodedotjs,SiMongodb,SiRuby,SiHtml5, SiCss3, SiWordpress, SiHeroku } from "react-icons/si";



const About =()=>{

    return (
        <div>
            <h3> About</h3>
            <p> Hello, I'm Steven Chase. I am currently job hunting for my first tech job, looking to take the skill I have learned at Flatiron coding bootcamp and apply them to real world problems. </p>
            {/* <img src={picture} alt="steven chase"></img> */}
            <h4>skills </h4>
            <ol>
                <li><SiReact/></li>
                <li><SiRedux/> </li>
                <li><SiJavascript/></li>
                <li><SiNodedotjs/></li>
                <li><SiMongodb/></li>
                <li><SiRuby/></li>
                <li> <SiHtml5/></li>
                <li> <SiCss3/> </li>
                <li> <SiWordpress/> </li>
                <li> <SiHeroku/></li>
            </ol>
        </div>
    )
}

export default About