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
                        Two years ago I discovered my latent passion to computer science immersing myself in this bizzare world of ones and zeros.
                        Then I started learning web development. I have completed several courses, read thousands of pages of documentation and most important
                        having spent dozens of hours avidly practicing coding I have accomplished a few projects.
                        <br />     <br />
                        In the past I worked as a musician and in a recording studio. Now an English teacher who is awaiting a new chapter in his life.
                    </p>
                </div>
                {pageLoaded && <div className="aboutme-icons-container">
                    <div className='about-me-icon'>
                        <p className="about-me-icon-text">
                            Skills: Being a resourceful person I have always loved new challenges which give a great background for further development.
                            Open-mindedness and a positive mindset allow me to envince high efficiency in a demanding environment. Working with other
                            people is something I cherish most.
                        </p>
                    </div>
                    <div className='about-me-icon icon-2'>
                        <p className="about-me-icon-text">
                            Hobbies: Taking my creativity to a next level by playing drums, piano and guitar. Learning about the universe and its mysteries.
                            Watching and reading sci-fiction and fantasy. Taking pizza recipes to a new level.
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