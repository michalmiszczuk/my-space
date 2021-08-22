import React from 'react';
import './aboutMe.css'

function AboutMe({ pageEngaged, setPageEngaged }) {

    return (
        <div
            onMouseEnter={() => setPageEngaged(true)}
            onMouseLeave={() => setPageEngaged(false)}
            className="page-background about-me">
            <div className={pageEngaged ? "me-text" : "me-text-hidden"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, minima.
                <div className="me-icon-container">
                    <div className="me-icon">1</div>
                    <div className="me-icon">2</div>
                    <div className="me-icon">3</div>
                    <div className="me-icon">4</div>
                </div>
            </div>
            <div onClick={() => setPageEngaged(false)} className={pageEngaged ? "main-text-hidden" : "main-text"}>ABOUT ME</div>
        </div>
    );
}

export default AboutMe;