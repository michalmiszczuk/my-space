import React, { useState } from 'react';
import picture from '../static/contact.jpg'
import '../styles/contact.scss'
import '../styles/page.scss'
import Background from './Background';

function Contact({ pageEngaged, setPageEngaged }) {

    const [infoShown, setInfoShown] = useState(false)

    return (
        <div
            // onMouseLeave={() => setPageEngaged(false)}
            className={pageEngaged && infoShown ? "page-background contact " : pageEngaged ? "page-background contact grey-contact" : "page-background"}>
            <Background pageEngaged={pageEngaged} picture={picture} />
            {pageEngaged && <div onClick={() => setInfoShown(false)} onMouseEnter={() => setInfoShown(true)} className={infoShown ? "info-icon-hidden" : "contact-icon"}></div>}
            {pageEngaged && <div className={infoShown ? "contact-info-container" : "info-container-hidden"}>
                <a href="mailto:athlarster@gmail.com" className="contact-item">Mail: athlarster@gmail.com</a>
                <a href="https://linkedin.com" className="contact-item">Linkedin: fdfdfdf</a>
            </div>}
            <div onClick={() => setPageEngaged(!pageEngaged)} className={pageEngaged ? "main-text-hidden" : "main-text"}>{pageEngaged ? "MENU" : "CONTACT"}</div>
        </div >
    );
}

export default Contact;