import React, { useState } from 'react';
import picture from '../static/pro2.jpg'
import '../styles/my-projects.scss'
import '../styles/page.scss'
import Background from './Background';
import ProjectLink from './ProjectLink';

function MyProjects({ pageEngaged, setPageEngaged }) {

    const [skills, setSkills] = useState(false)
    console.log(skills)

    return (
        <div

            className={pageEngaged && skills ? " page-background my-projects magnified" : pageEngaged ? "page-background my-projects " : "page-background"}>

            <Background pageEngaged={pageEngaged} picture={picture} />
            {pageEngaged && <div onClick={() => setSkills(true)} className={skills ? "projects-container-open" : "projects-container"}>my projects
                <ProjectLink skills={skills} liveLink="https://englishempowering.com/" gitLink="https://englishempowering.com/"
                    description="Website / App - my online business card where students can book English lessons." />
                <ProjectLink skills={skills} liveLink="https://englishempowering.com/" gitLink="https://englishempowering.com/"
                    description="Tile Wars - a board game" />
                <ProjectLink skills={skills} liveLink="https://englishempowering.com/" gitLink="https://englishempowering.com/"
                    description="- Sorting Alogrithm" />
                <ProjectLink skills={skills} liveLink="https://englishempowering.com/" gitLink="https://englishempowering.com/"
                    description="Calculator - a simple project using vanilla JS" />
                <div onMouseEnter={() => setSkills(false)} className={skills ? "project-close-icon" : "project-close-icon-hidden"} />
            </div>}
            <div onClick={() => setPageEngaged(!pageEngaged)} className={pageEngaged ? "main-text-hidden" : "main-text"}>{pageEngaged ? "MENU" : "MY PROJECTS"}</div>
        </div>
    );
}

export default MyProjects;