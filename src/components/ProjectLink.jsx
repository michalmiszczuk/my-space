import React from 'react';
import '../styles/my-projects.scss'

function ProjectLink({ description, gitLink, liveLink }) {
    return (
        <div>
            <div className="projects-item">{description}</div>
            <div className="link-container">
                <a className="link" href={gitLink}>GitHub</a>
                <a className="link trans-2" href={liveLink}>Live</a>
            </div>
        </div>
    );
}

export default ProjectLink;