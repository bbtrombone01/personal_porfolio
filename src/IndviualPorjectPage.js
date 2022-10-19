import React from "react"


const IndviualProjectPage =(props)=>{

    return (
        <div>
            {props.title}
            {props.description}
            {props.video}
            <a href={props.link}> live page</a>
        </div>
    )
}

export default IndviualProjectPage