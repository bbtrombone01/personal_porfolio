import React from "react";
import { useState } from "react";
import {send} from "emailjs-com"

const ContactMe =()=>{

    const [formInfo, setFormInfo] = useState({
        Sender_Email: "",
        Contact_Message: "",
        Emailers_Name: "",
    })

    const submitForm =(e)=>{
        e.preventDefault()
        send(
            'service_t4zlckr',
            'template_w0nv7km',
            formInfo,
            'efG8V9XMJF_LKODkv' 
        ).then((res) =>{
            console.log(res)
        })

    }

    const handleChange =(e)=> {
        setFormInfo({...formInfo, [e.target.name]: e.target.value })
    }

    return(
        <div>
            <p> feel free to contact me using this form, also my email adress is steven177@gmail.com</p>
            <form onSubmit={submitForm}>
            <p> contact me</p>
                <label className="Emailers_Name">
                    <input 
                    type="text" 
                    name="Emailers_Name"
                    placeholder="Name"
                    onChange={handleChange}
                    />
                </label>
                <br/>
                <label className="Sender_Email">  
                    <input 
                    type="text"
                    name="Sender_Email"
                    placeholder="Email"
                    onChange={handleChange}
                     />
                </label>
                <br/>
                <label className="Contact_Message">
                    <textarea
                    name="Contact_Message"
                    placeholder="Message"
                    onChange={handleChange}
                     />
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default ContactMe