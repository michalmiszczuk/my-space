import React, { useState } from 'react';
import picture from '../static/contact-mob.jpg'
import '../styles/contact.scss'
import '../styles/page.scss'
import Background from './Background';
import MainText from './MainText';

function Contact({ pageChanged, pageEngaged, setPageEngaged }) {

    const [infoShown, setInfoShown] = useState(false)

    return (
        <div
            className={pageEngaged && infoShown ? "page-background contact moveup" : pageEngaged ? "page-background contact grey-contact" : "page-background"}>
            <Background pageChanged={pageChanged} pageEngaged={pageEngaged} picture={picture} />
            {pageEngaged && <div onClick={() => setInfoShown(false)}
                onMouseEnter={() => setInfoShown(true)}
                onTouchMove={() => setInfoShown(true)}
                className={infoShown ? "contact-icon-hidden" : "contact-icon"}></div>}
            {pageEngaged && <div className={infoShown ? "contact-info-container" : "info-container-hidden"}>
                <a href="mailto:athlarster@gmail.com" className="contact-item">Mail: athlarster@gmail.com</a>
                <a href="https://linkedin.com" className="contact-item">Linkedin: fdfdfdf</a>
                <a href="tel:579 870 405" className="contact-item">579 870 405</a>
            </div>}
            <MainText setPageEngaged={setPageEngaged} pageChanged={pageChanged} pageEngaged={pageEngaged} buttonText="CONTACT" />
        </div >
    );
}

export default Contact;