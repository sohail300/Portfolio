import react from 'react';
import GitHub from '../../icons/Github';
import Linkedin from '../../icons/Linkedin';
import Twitter from '../../icons/Twitter';
import { SiHashnode} from 'react-icons/si';
import { BsFillTelephoneFill} from 'react-icons/bs';
import { FiMail} from 'react-icons/fi';

function Contact(){
    return(
        <>
            <h2 id="contact-header">Contact Me</h2>
            <p><span><BsFillTelephoneFill /></span>+91 6206591116</p>
            <p><span><FiMail /></span><a href="mailto:sohailatwork10@gmail.com">sohailatwork10@gmail.com</a></p>
        <div id="image-container">
            <a href="https://github.com/sohail300"><GitHub /></a>
            <a href="https://www.linkedin.com/in/md-sohail-ansari-b51201278/"><Linkedin /></a>
            <a href="https://twitter.com/sohail_infinity"><Twitter /></a>
            <a href="https://sohail10.hashnode.dev/"><SiHashnode style={{fontSize:50,color:"#fff"}}/></a>
        </div>
        </>
    );
}

export default Contact;