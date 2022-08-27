import React, { useRef, useState }from 'react'
import emailjs from '@emailjs/browser';

import "./Contact.css"
import { FaEnvelopeOpenText } from "react-icons/fa"
import { FcBusinessman, FcFeedback } from "react-icons/fc";

const Contact = () => {
    const [ sent, setSent ] = useState(false)
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yzv8ug2', 'template_bsfi48l', form.current, '4KGHU6Rlh3XBpx5X8')
          .then((result) => {
              console.log(result.text);
              setSent(true)
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='contact-container'>
        
        <form ref={form} onSubmit={sendEmail}>

            <FaEnvelopeOpenText className='envelope'/>

            <div className="input-form">
                <div className="input-conatiner">
                    <FcBusinessman style={{fontSize: "2rem"}}/>
                    <input type="text" name="user_name" id="name" placeholder='Name'required/>
                </div>

                <div className="input-conatiner">
                    <FcFeedback style={{fontSize: "2rem"}}/>
                    <input type="mail" name="user_email" id="email" placeholder='your@email.com' required/>
                </div>

                <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message'></textarea>
            </div>
            <button type="submit" className='myButton'>Envoyer</button>

            {sent && <p className='sent'>Message envoyé</p>}
            
        </form>
    </div>
  )
}

export default Contact