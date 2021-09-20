import React, { useState } from 'react';
import picture from '../static/projects.jpeg'
import '../styles/my-projects.scss'
import '../styles/page.scss'
import Background from './Background';

function MyProjects({ pageEngaged, setPageEngaged }) {

    const [skills, setSkills] = useState(false)
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
            className={pageEngaged && skills ? " page-background my-projects magnified " : pageEngaged ? "page-background my-projects " : "page-background"}>

            {pageEngaged && <div style={{ top: mousePos.y, left: mousePos.x }} className={skills ? "mouse-projects-hidden" : "mouse-projects"}></div>}
            <Background pageEngaged={pageEngaged} picture={picture} />
            <div onMouseEnter={() => setSkills(true)} onMouseLeave={() => setSkills(false)} class="projects-container">
                <div className="projects-item">- Website / App - my online business card where students can book English lessons.</div>
                <div className="link-container">
                    <div className="link"><a href="https://github.com/michalmiszczuk/english-empowering">GitHub</a></div>
                    <div className="link trans-2"><a href="https://englishempowering.com/">Live</a></div>
                </div>
                <div className="projects-item">- Tile Wars - a board game </div>
                <div className="link-container">
                    <div className="link"><a href="https://github.com/michalmiszczuk/english-empowering">GitHub</a></div>
                    <div className="link trans-2"><a href="https://englishempowering.com/">Live</a></div>
                </div>
                <div className="projects-item">- Sorting Alogrithm</div>
                <div className="link-container">
                    <div className="link"><a href="https://github.com/michalmiszczuk/english-empowering">GitHub</a></div>
                    <div className="link trans-2"><a href="https://englishempowering.com/">Live</a></div>
                </div>
                <div className="projects-item">- Calculator - a simple project using vanilla JS</div>
                <div className="link-container">
                    <div className="link"><a href="https://github.com/michalmiszczuk/english-empowering">GitHub</a></div>
                    <div className="link trans-2"><a href="https://englishempowering.com/">Live</a></div>
                </div>
            </div>
            <div onClick={() => setPageEngaged(false)} className={pageEngaged ? "main-text-hidden" : "main-text"}>My Projects</div>

        </div>
    );
}

export default MyProjects;