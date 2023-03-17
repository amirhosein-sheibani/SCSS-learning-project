import React, { useState } from 'react';
import "./contact.scss"

const Contact = () => {

    const [message , setMessage] = useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true)
        setTimeout(() => {
            setMessage(false)
        }, 5000);
        
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="../../assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h1>contact.</h1>
                <form action="">
                    <input type="email" placeholder='Email' />
                    <textarea placeholder='Message'></textarea>
                    <button onClick={handleSubmit}>send</button>
                    {message && <span>Thanks , I'll reaply ASAP </span>}
                </form>
            </div>
        </div>
    );
};

export default Contact;