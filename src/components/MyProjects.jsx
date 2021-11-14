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
                    <ProjectLink skills={skills} liveLink="https://englishempowering.netlify.app/" gitLink="https://github.com/michalmiszczuk/english-empowering"
                        description="Website / App - an online business card where students can book English lessons." />
                    <ProjectLink skills={skills} liveLink="https://englishempowering.netlify.app/" gitLink="https://github.com/michalmiszczuk/english-empowering-backend"
                        description="Backend for English Empowering" />
                    <ProjectLink skills={skills} liveLink="https://tilewars.netlify.app/" gitLink="https://github.com/michalmiszczuk/tile-wars-typescript"
                        description="Tile Wars - a board game" />
                    <ProjectLink skills={skills} liveLink="https://bearsort.netlify.app/" gitLink="https://github.com/michalmiszczuk/bearsort-algo"
                        description="Sorting Alogrithm - live version built with vanilla JS" />
                    <ProjectLink skills={skills} liveLink="https://michalmiszczuk.netlify.app/" gitLink="https://github.com/michalmiszczuk/my-space"
                        description="This website / My portfolio" />
                    <div
                        onClick={(e) => handleCloseSkills(e)}
                        className={skills ? "project-close-icon" : "project-close-icon-hidden"} />
                </div>}
            </div>
            <div className={skills ? "menu-button-hidden" : "menu-button-visible"}>
                <MainText setPageLoaded={setPageLoaded} pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} buttonText="PROJECTS" />
            </div>
        </>
    );
}

export default MyProjects;