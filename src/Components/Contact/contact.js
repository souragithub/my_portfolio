import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../Assets/walmart.png';
import Adobe from '../../Assets/adobe.png';
import Microsoft from '../../Assets/microsoft.png';
import Facebook from '../../Assets/facebook.png';
import FacebookIcon from '../../Assets/facebook-icon.png';
import TwitterIcon from '../../Assets/twitter.png';
import YouTubeIcon from '../../Assets/youtube.png';
import InstagramIcon from '../../Assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vgi9uzi', 'template_2or72tp', form.current, 'QXFUc5OjHw1rghXf8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the oppurunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Clients' className='clientImg'/>
                <img src={Adobe} alt='Clients' className='clientImg' />
                <img src={Microsoft} alt='Clients' className='clientImg'/>
                <img src={Facebook} alt='Clients' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'> Contact Me </h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='type' className='name' placeholder='Your Name' name='from_name'/>
                <input type='email' className='email' placeholder='Your Email' name='from_email' />
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button> <br/>
                <div className='links'>
                    <img src={FacebookIcon} alt='Facebook' className='link' />
                    <img src={TwitterIcon} alt='Twitter' className='link' />
                    <img src={YouTubeIcon} alt='You Tube' className='link' />
                    <img src={InstagramIcon} alt='Instagram' className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact