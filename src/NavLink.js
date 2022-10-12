import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return (
        <nav>
            <Link to="/"> About</Link>
            <Link to="/ContactMe"> Contact Me</Link>
            <Link to="/Projects">Projects</Link>
        </nav>
    )
}


export default Navbar