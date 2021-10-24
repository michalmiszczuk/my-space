import React, { useState } from 'react';
import Background from './Background';
import MainText from './MainText';

import picture from '../static/about-me.jpg'
import '../styles/aboutMe.scss'

function AboutMe({ pageIsChanging, pageLoaded, setPageLoaded }) {

    const [info, setInfo] = useState(false)

    return (
        <div
            className={pageLoaded && info ? " page-background about-me magnified-2 " : pageLoaded ? "page-background about-me" : "page-background"}>
            <Background pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} picture={picture} />
            <div onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)} className={pageLoaded ? "me-text" : "me-text me-text-hidden"}>
                <div className="my-story">my story</div>
                <p className="my-description">
                    Engulfed by the discovery of my latent passion to computer since in 2020 I started to immerse myself in this bizzare world of ones and zeros.
                    Numerous levels of abstracion behind the scenes not only kindled my curiosity but also made me an avid student who has always
                    balanced on the brink of both scientific and humanistic realities. Now being a young apprentice I eagerly broaden knowledge of the coding order.
                    <br />     <br />
                    In the past I worked as a musician as well as in a recording studio. Now an English teacher who is awaiting a new chapter in his life.
                </p>
            </div>
            {pageLoaded && <div className="aboutme-icons-container">
                <div className='about-me-icon'>
                    <p className="about-me-icon-text">
                        Education: The graduation in English Philology has opened me the door to worldwide learning. I have completed a few online courses regarding
                        web development, which gave me a good starting point to explore this world as well as to create a few projects of my own.
                    </p>
                </div>
                <div className='about-me-icon icon-2'>
                    <p className="about-me-icon-text">
                        Hobbies: Exploring the diversity of music genres by playing instruments. Learning about the universe and its mysteries.
                        Watching and reading sci-fiction and fantasy.
                    </p>
                </div>
            </div>}
            <MainText setPageLoaded={setPageLoaded} pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} buttonText="ABOUT" />
        </div>
    );
}

export default AboutMe;