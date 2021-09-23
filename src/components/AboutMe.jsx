import React, { useState } from 'react';
import '../styles/aboutMe.scss'
import '../styles/page.scss'
import picture from '../static/aboutme.jpg'
import Background from './Background';

function AboutMe({ pageEngaged, setPageEngaged }) {

    const [info, setInfo] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })


    const mouse = (e) => {
        let x = e.clientX
        let y = e.clientY
        setMousePos({ x: x, y: y })
    }


    return (
        <div
            onMouseEnter={() => setPageEngaged(true)}
            // onMouseLeave={() => setPageEngaged(false)}
            onMouseMove={(e) => mouse(e)}
            className={pageEngaged && info ? " page-background about-me magnified-2 " : pageEngaged ? "page-background about-me" : "page-background"}>
            <Background pageEngaged={pageEngaged} picture={picture} />
            <div onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)} className={pageEngaged ? "me-text" : "me-text-hidden"}>

                Engulfed by the discovery of my latent passion to computer since in 2020 I started to immerse myself in this bizzare world of ones and zeros.
                Not only did logic gates kindled my curiosity but also they made me aware of the numerous levels of abstracion behind the scenes.
                Intermingling of a scientific and humanistic mind pushed me towards both front-end and back-end developement. Being a young apprentice
                of the coding order I know that I still "must unlearn what I have learned".

            </div>
            {pageEngaged && <div className="aboutme-info-container">
                <div className='about-me-icon'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse dolores minima reprehenderit officia ad.</div>
                <div className='about-me-icon-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id et labore explicabo doloremque tenetur tempora eos architecto consequuntur cum nam.</div>
            </div>}
            <div onClick={() => setPageEngaged(false)} className={pageEngaged ? "main-text-hidden" : "main-text"}>{pageEngaged ? "MENU" : "ABOUT ME"}</div>
            {pageEngaged && <div style={{ top: mousePos.y + 2, left: mousePos.x + 2 }} className="mouse"></div>}
        </div>
    );
}

export default AboutMe;