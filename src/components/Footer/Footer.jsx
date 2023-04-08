import react from 'react';
import './Footer.css'
import GitHub from '../icons/Github';
import Linkedin from '../icons/Linkedin';
import Twitter from '../icons/Twitter';
import Hashnode from '../icons/Hashnode';

function Footer(){
    return(
        <footer id="footer">
        <div id="contact-form">
            <h3>Interested to work together?</h3>
            <p>Let's talk</p>
            <form action="">
            <input type="text" name="name" placeholder='Full Name'/>
            <input type="text" name="email" placeholder='Your Email'/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button type='submit'>Submit</button>
            </form>
        </div>
        <div id="social-media">
            <h2>Contact Me</h2>
            <p>+91 6206591116</p>
            <p>sohailatwork10@gmail.com</p>
        <div id="image-container">
            <GitHub />
            <Linkedin />
        </div>
        <div id="image-container">
            <Twitter />
            <Hashnode />
        </div>
        </div>
        </footer>
    );
}

export default Footer;