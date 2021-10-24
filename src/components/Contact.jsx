import React, { useState } from 'react';
import picture from '../static/contact.jpg'
import Background from './Background';
import MainText from './MainText';
import '../styles/contact.scss'

function Contact({ pageIsChanging, pageLoaded, setPageLoaded }) {

    const [infoShown, setInfoShown] = useState(false)

    return (
        <div
            className={pageLoaded && infoShown ? "page-background contact moveup" : pageLoaded ? "page-background contact grey-contact" : "page-background"}>
            <Background pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} picture={picture} />
            {pageLoaded && <div onClick={() => setInfoShown(false)}
                onMouseEnter={() => setInfoShown(true)}
                onTouchMove={() => setInfoShown(true)}
                className={infoShown ? "contact-icon-hidden" : "contact-icon"}>i</div>}
            {pageLoaded && <div className={infoShown ? "contact-info-container" : "info-container-hidden"}>
                <a href="mailto:athlarster@gmail.com" className="contact-item">Mail: athlarster@gmail.com</a>
                <a href="https://linkedin.com" className="contact-item">Linkedin: fdfdfdf</a>
                <a href="tel:579 870 405" className="contact-item">579 870 405</a>
            </div>}
            <MainText setPageLoaded={setPageLoaded} pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} buttonText="CONTACT" />
        </div >
    );
}

export default Contact;