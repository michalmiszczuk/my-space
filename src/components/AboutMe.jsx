import React from 'react';
import './aboutMe.css'

function AboutMe({ pageEngaged, setPageEngaged }) {

    return (
        <div
            onMouseEnter={() => setPageEngaged(true)}
            onMouseLeave={() => setPageEngaged(false)}
            className="page-background center about-me">
            <div onClick={() => setPageEngaged(false)} className={pageEngaged ? "main-text-hidden" : "main-text"}>ABOUT ME</div>
        </div>
    );
}

export default AboutMe;