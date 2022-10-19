import React from "react";
import { Link } from "react-router-dom";

const ProjectsOverviewPage =()=>{

    return (
        <div>
            <div className="HotOrNot">
                <a href="https://bbtrombone01.github.io/hot_or_not/"> Hot or Not </a>
                <p> allows the user to judge the heat of thermostats</p>
                <Link to="/HotOrNot"> Demo </Link>
            </div>
            <div className="RaidAscension">
                <a href="https://bbtrombone01.github.io/Raid_ascenion_pots/" > Raid Shadow Legends Ascension Project</a>
                <p> project to allow </p>
                <Link to="/RaidAscension"> Demo</Link>
            </div>
        </div>
    )
}


export default ProjectsOverviewPage