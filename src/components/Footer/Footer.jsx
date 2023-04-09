import react from 'react';
import './Footer.css'
import GitHub from '../icons/Github';
import Linkedin from '../icons/Linkedin';
import Twitter from '../icons/Twitter';
import { SiHashnode} from 'react-icons/si';
import { BsFillTelephoneFill} from 'react-icons/bs';
import { FiMail} from 'react-icons/fi';


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
            <p><span><BsFillTelephoneFill /></span>+91 6206591116</p>
            <p><span><FiMail /></span><a href="mailto:sohailatwork10@gmail.com">sohailatwork10@gmail.com</a></p>
        <div id="image-container">
            <a href="https://github.com/sohail60"><GitHub /></a>
            <a href="https://www.linkedin.com/in/md-sohail-ansari-786123202/"><Linkedin /></a>
        </div>

        <div id="image-container">
            <a href="https://twitter.com/sohail_infinity"><Twitter /></a>
            <a href="https://sohail10.hashnode.dev/"><SiHashnode style={{fontSize:70,color:"#2962ff"}}/></a>
        </div>
        </div>
        </footer>
    );
}

export default Footer;