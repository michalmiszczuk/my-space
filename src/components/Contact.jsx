import React, { useState } from 'react';
import picture from '../static/contact.jpg'
import pictureSmall from '../static/contact-small.jpg'
import Background from './Background';
import MainText from './MainText';
import EmailForm from './EmailForm';
import '../styles/contact.scss'

function Contact({ pageIsChanging, pageLoaded, setPageLoaded }) {

    const [infoShown, setInfoShown] = useState(false)
    const isMobile = window.innerWidth < 768

    return (
        <>
            <div
                className={pageLoaded && infoShown ? "page-background contact moveup" : pageLoaded ? "page-background contact grey-contact" : "page-background"}>
                <Background pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} picture={isMobile ? pictureSmall : picture} />
                {pageLoaded && <div onClick={() => setInfoShown(false)}
                    onMouseEnter={() => setInfoShown(true)}
                    onTouchMove={() => setInfoShown(true)}
                    className={infoShown ? "contact-icon-hidden" : "contact-icon"}>i</div>}
                {pageLoaded && <div className={infoShown || isMobile ? "contact-info-container" : "info-container-hidden"}>
                    <a href="mailto:michal.miszczuk.webdev@gmail.com" className="contact-item">Mail: michal.miszczuk.webdev@gmail.com</a>
                    <a href="https://linkedin.com" className="contact-item">Linkedin: https://www.linkedin.com/in/michal-miszczuk-a1b08a226/</a>
                    <a href="tel:579 870 405" className="contact-item">579 870 405</a>
                </div>}
            </div >
            <MainText setPageLoaded={setPageLoaded} pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} buttonText="CONTACT" />
            <EmailForm infoShown={infoShown} pageLoaded={pageLoaded} />

        </>
    );
}

export default Contact;