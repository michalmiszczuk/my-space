import React, { useState } from 'react';
import picture from '../static/projects.jpeg'
import '../styles/my-projects.scss'
import '../styles/page.scss'
import Background from './Background';
import ProjectLink from './ProjectLink';

function MyProjects({ pageEngaged, setPageEngaged }) {

    const [skills, setSkills] = useState(false)

    return (
        <div
            onMouseLeave={() => setPageEngaged(false)}
            className={pageEngaged && skills ? " page-background my-projects magnified " : pageEngaged ? "page-background my-projects " : "page-background"}>

            <Background pageEngaged={pageEngaged} picture={picture} />
            {pageEngaged && <div onMouseEnter={() => setSkills(true)} onMouseLeave={() => setSkills(false)} className="projects-container">
                <ProjectLink liveLink="https://englishempowering.com/" gitLink="https://englishempowering.com/"
                    description="Website / App - my online business card where students can book English lessons." />
                <ProjectLink liveLink="https://englishempowering.com/" gitLink="https://englishempowering.com/"
                    description="Tile Wars - a board game" />
                <ProjectLink liveLink="https://englishempowering.com/" gitLink="https://englishempowering.com/"
                    description="- Sorting Alogrithm" />
                <ProjectLink liveLink="https://englishempowering.com/" gitLink="https://englishempowering.com/"
                    description="Calculator - a simple project using vanilla JS" />
            </div>}
            <div onClick={() => setPageEngaged(!pageEngaged)} className={pageEngaged ? "main-text-hidden" : "main-text"}>{pageEngaged ? "MENU" : "MY PROJECTS"}</div>
        </div>
    );
}

export default MyProjects;