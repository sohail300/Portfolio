import react from 'react';
import './Copyright.css'

function Copyright(){
    let year=new Date().getFullYear();

    return(
        <div id='copyright'>
        <p>Copyright © {year} All Rights Reserved Md Sohail Ansari</p>
        </div>
    );
}

export default Copyright;