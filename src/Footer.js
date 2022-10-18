import React from "react";
import {SiLinkedin, SiGithub} from "react-icons/si"
import { SlEnvolope } from "react-icons/sl";

const Footer =()=>{

    return (
        <div>
            <footer >
                <p> Built and designed by steven chase ©2022</p>
                <a href="https://www.linkedin.com/in/steven-chase-435b81119/"> <SiLinkedin/></a>
                <a href="https://github.com/bbtrombone01"> <SiGithub/></a>
                <a href="http://localhost:3000/ContactMe"> <SlEnvolope/></a>

            </footer>
        </div>
    )


}

export default Footer