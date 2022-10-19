import React from "react";
import {IconContext} from "react-icons"
import {SiLinkedin, SiGithub} from "react-icons/si"
import { SlEnvolope } from "react-icons/sl";

const Footer =()=>{

    return (
        <div>
            <footer >
                <IconContext.Provider value={{style: { height:"10%", width: "70%"}, color: "#05386B"}}>
                <p> Built and designed by steven chase ©2022</p>
                <a href="https://www.linkedin.com/in/steven-chase-435b81119/"> <SiLinkedin/></a>
                <a href="https://github.com/bbtrombone01"> <SiGithub/></a>
                <a href="http://localhost:3000/ContactMe"> <SlEnvolope/></a>
                </IconContext.Provider>

            </footer>
        </div>
    )


}

export default Footer