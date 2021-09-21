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
            <div onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)} className={pageEngaged ? "me-text" : "me-text-hidden"}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, facilis?</div>
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