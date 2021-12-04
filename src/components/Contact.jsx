import React, { useState } from 'react';
import picture from '../static/contact.jpg'
import pictureSmall from '../static/contact-small.jpg'
import Background from './Background';
import MainText from './MainText';
import EmailForm from './EmailForm';
import '../styles/contact.scss'

function Contact({ pageIsChanging, pageLoaded, setPageLoaded }) {

    const [infoShown, setInfoShown] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const isMobileTablet = window.innerWidth < 1200
    const pageLoadedClass = isMobileTablet ? "page-background contact" : "page-background contact grey-contact"

    return (
        <>

            <div
                className={pageLoaded && infoShown ? "page-background contact" : pageLoaded ? pageLoadedClass : "page-background"}>
                <Background pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} picture={isMobileTablet ? pictureSmall : picture} />
                {pageLoaded && <div onClick={() => setInfoShown(false)}
                    onMouseEnter={() => setInfoShown(true)}
                    className={infoShown ? "contact-icon-hidden" : "contact-icon"}></div>}
                {pageLoaded && <div className={!showForm ? "open-form" : "open-form form-hidden"} onClick={() => setShowForm(true)}>Contact Form</div>}
                {pageLoaded && <div className={infoShown || isMobileTablet ? "contact-info-container" : "info-container-hidden"}>
                    <a href="mailto:michal.miszczuk.webdev@gmail.com" className="contact-item">michal.miszczuk.webdev@gmail.com</a>
                    <a href="https://linkedin.com" className="contact-item">Linkedin</a>
                    <a href="tel:+48 579 870 405" className="contact-item">+ 48 579 870 405</a>
                </div>}
            </div >
            <MainText setPageLoaded={setPageLoaded} pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} buttonText="CONTACT" />
            {pageLoaded && <EmailForm infoShown={infoShown} pageLoaded={pageLoaded} showForm={showForm} setShowForm={setShowForm} />}
        </>
    );
}

export default Contact;