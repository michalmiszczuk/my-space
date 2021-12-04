import React, { useState } from 'react';
import Background from './Background';
import MainText from './MainText';

import picture from '../static/about-me.jpg';
import pictureSmall from '../static/about-me-small.jpg';
import '../styles/aboutMe.scss'

function AboutMe({ pageIsChanging, pageLoaded, setPageLoaded }) {

    const [info, setInfo] = useState(false)
    const isMobile = window.innerWidth < 768


    return (
        <>
            <div
                className={pageLoaded && info ? " page-background about-me magnified-2 " : pageLoaded ? "page-background about-me" : "page-background"}>
                <Background pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} picture={isMobile ? pictureSmall : picture} />
                <div onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)} className={pageLoaded ? "me-text" : "me-text me-text-hidden"}>
                    <div className="my-story">my story</div>
                    <p className="my-description">
                        Two years ago I discovered my latent passion to computer science when I immersed myself in this bizzare world of ones and zeros.
                        Being a person who has always balanced on the brink of both scientific and humanistic realities as well as someone
                        who loves new challenges made me an avid student. I eagerly broaden knowledge of the coding order.
                        <br />     <br />
                        In the past I worked as a musician as well as in a recording studio. Now an English teacher who is awaiting a new chapter in his life.
                    </p>
                </div>
                {pageLoaded && <div className="aboutme-icons-container">
                    <div className='about-me-icon'>
                        <p className="about-me-icon-text">
                            Skills: Being a resourceful person I have always loved new challenges which give a great background for further development.
                            Conscientious, open-minded and resourceful working in a group is not a problem for me. Setting goals and meeting deadlines.
                        </p>
                    </div>
                    <div className='about-me-icon icon-2'>
                        <p className="about-me-icon-text">
                            Hobbies: Exploring the diversity of music genres by playing instruments. Learning about the universe and its mysteries.
                            Watching and reading sci-fiction and fantasy.
                        </p>
                    </div>
                </div>}
            </div>
            <div className={info ? "menu-button-hidden" : "menu-button-visible"}>
                <MainText setPageLoaded={setPageLoaded} pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} buttonText="ABOUT" />
            </div>
        </>
    );
}

export default AboutMe;