import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contanctme.css';

const Contactme = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState();
    const [message,setMessage]=useState("");
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_jyj79sk', 'template_1wy9jpq', form.current, {
        publicKey: 'daYCIg_Fj27FURM5e',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
        );
        setEmail("");
        setMessage("");
        setName("");
        setPhone("");
        };
    return (
    <>
    <div className='contact'>
        <div className='container'>
        <h1 className='contanctTiltle'>Contact Me</h1>
        <h5 className='smalltiltlecontact'>Let's Work together</h5>
            <div className='data'>
            <div className='number'>
            <i class="fa-solid fa-phone phone-icon"></i>
                <div className='data-number'>
                    <h4>Call me</h4>
                    <p>+02-0102-6049-630</p>
                </div>
            </div>
            <div className='email'>
            <i class="fa-regular fa-envelope email-icon"></i>
                <div className='data-email'>
                    <h4>Send me</h4>
                    <p type="email">badr59497@gmail.com</p>
                </div>
            </div>
            
            </div>
            <div className='form'>  
            <form ref={form} onSubmit={sendEmail}>
                <div className='filed'>
                {/* <label>Name:</label> */}
                <input type="text" name="user_name" value={name} placeholder=' Name' required onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className='filed'>
                {/* <label>Email</label> */}
                <input type="email" name="user_email" value={email} placeholder=' Email' required onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className='filed'>
                {/* <label>Email</label> */}
                <input type="number" name="user_phone" placeholder=' Phone' value={phone} required onChange={(e)=>{setPhone(e.target.value)}}/>
                </div>
                <div className='filed'>
                {/* <label>Message</label> */}
                <textarea name="message"  placeholder= ' Messsage' value={message} rows={6} required onChange={(e)=>{setMessage(e.target.value)}} />
                </div>
                <button type="submit" value="Send" className='d-button text-white px-4 py-1 my-2 contact-button' >Send</button>
            </form>
            </div>
        </div>
        </div>
    </>
  );
}

export default Contactme;
