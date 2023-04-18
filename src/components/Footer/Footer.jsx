import react from 'react';
import './Footer.css'
import Form from '../subcomponents/Form/Form';
import Contact from '../subcomponents/Contact/Contact';

function Footer(){
    return(
        <footer id="footer">
        <div id="contact-form">
            <h3>Interested to work together?</h3>
            <p>Let's talk</p>
            <Form />
        </div>
        <div id="social-media">
            <Contact />
        </div>
        </footer>
    );
}

export default Footer;