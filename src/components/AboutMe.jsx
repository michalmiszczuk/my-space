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
            {/* <img className="img-container" alt="" src={comp} /> */}
            <Background pageEngaged={pageEngaged} picture={picture} />
            <div onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)} className={pageEngaged ? "me-text" : "me-text-hidden"}>
                <div className="me-icon-container">
                    <div className="me-icon">1</div>
                    <div className="me-icon">2</div>
                    <div className="me-icon">3</div>
                    <div className="me-icon">4</div>
                </div>
            </div>

            <div onClick={() => setPageEngaged(false)} className={pageEngaged ? "main-text-hidden" : "main-text"}>{pageEngaged ? "MENU" : "ABOUT ME"}</div>
            {pageEngaged && <div style={{ top: mousePos.y + 2, left: mousePos.x + 2 }} className="mouse"></div>}
        </div>
    );
}

export default AboutMe;