import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/email-form.scss'

function EmailForm({ infoShown, pageLoaded }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('aylon7', 'template_jnwkrx9', form.current, 'user_A8nmVSomjP3JZCWugeqaD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className={infoShown && pageLoaded ? "email-form-container" : "email-form-container hidden"}>
            <form ref={form} onSubmit={sendEmail}>
                <div className="contact-title">CONTACT ME: </div>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input id="send-button" type="submit" value="SEND" />
            </form>
        </div>
    );
};

export default EmailForm;