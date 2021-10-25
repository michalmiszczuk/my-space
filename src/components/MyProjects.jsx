import React, { useState } from 'react';
import Background from './Background';
import MainText from './MainText';
import ProjectLink from './ProjectLink';
import picture from '../static/my-projects.jpg'
import '../styles/my-projects.scss'

function MyProjects({ pageIsChanging, pageLoaded, setPageLoaded }) {

    const [skills, setSkills] = useState(false)

    const handleCloseSkills = (e) => {
        e.stopPropagation()
        setSkills(false)
    }

    return (
        <>
            <div

                className={pageLoaded && skills ? " page-background my-projects magnified" : pageLoaded ? "page-background my-projects " : "page-background"}>

                <Background pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} picture={picture} />
                {pageLoaded && <div onClick={() => setSkills(true)} className={skills ? "projects-container-open" : "projects-container"} >
                    <span className={skills ? "text-my-projects-open" : "text-my-projects"}>my projects</span>
                    <ProjectLink skills={skills} liveLink="https://englishempowering.com/" gitLink="https://englishempowering.com/"
                        description="Website / App - my online business card where students can book English lessons." />
                    <ProjectLink skills={skills} liveLink="https://englishempowering.com/" gitLink="https://englishempowering.com/"
                        description="Tile Wars - a board game" />
                    <ProjectLink skills={skills} liveLink="https://englishempowering.com/" gitLink="https://englishempowering.com/"
                        description="Sorting Alogrithm" />
                    <ProjectLink skills={skills} liveLink="https://englishempowering.com/" gitLink="https://englishempowering.com/"
                        description="Calculator - a simple project using vanilla JS" />
                    <div
                        onClick={(e) => handleCloseSkills(e)}
                        className={skills ? "project-close-icon" : "project-close-icon-hidden"} />
                </div>}
            </div>
            <MainText setPageLoaded={setPageLoaded} pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} buttonText="PROJECTS" />
        </>
    );
}

export default MyProjects;