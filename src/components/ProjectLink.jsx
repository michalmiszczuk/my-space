import React from 'react';
import '../styles/my-projects.scss'

function ProjectLink({ skills, description, gitLink, liveLink }) {
    return (
        <>
            <div className={skills ? "projects-item-visible" : "projects-item"}>{description}</div>
            <div className={skills ? "link-container-visible" : "link-container"}>
                <a className={skills ? "link-visible" : "link"} href={gitLink}>GitHub</a>
                <a className={skills ? "link-visible-2" : "link-2"} href={liveLink}>Live</a>
            </div>
        </>
    );
}

export default ProjectLink;