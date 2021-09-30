import React, { useState } from 'react';
import picture from '../static/contact.jpg'
import '../styles/contact.scss'
import '../styles/page.scss'
import Background from './Background';

function Contact({ pageEngaged, setPageEngaged }) {

    const [infoShown, setInfoShown] = useState(false)

    return (
        <div
            onMouseEnter={() => setPageEngaged(true)}
            // onMouseLeave={() => setPageEngaged(false)}
            className={pageEngaged && infoShown ? "page-background contact " : pageEngaged ? "page-background contact grey-contact" : "page-background"}>
            <Background pageEngaged={pageEngaged} picture={picture} />
            <div onClick={() => setInfoShown(false)} onMouseEnter={() => setInfoShown(true)} className={infoShown ? "info-icon-hidden" : "contact-icon"}></div>
            {pageEngaged && <div className={infoShown ? "contact-info-container" : "info-container-hidden"}>
                <div className="contact-item">Mail: athlarster@gmail.com</div>
                <div className="contact-item">Linkedin: fdfdfdf</div>
                <div className="contact-items-perspective"></div>
            </div>}
            {!infoShown && <div onClick={() => setPageEngaged(false)} className={pageEngaged ? "main-text-hidden" : "main-text"}>{pageEngaged ? "MENU" : "CONTACT"}</div>}

        </div >
    );
}

export default Contact;