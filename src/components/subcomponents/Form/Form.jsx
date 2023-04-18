import react from 'react';

function Form(){
    return (
        <form action="">
            <input type="text" name="name" placeholder='Full Name'/>
            <input type="text" name="email" placeholder='Your Email'/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default Form;