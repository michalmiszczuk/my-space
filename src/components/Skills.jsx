import React, { useState } from 'react';
import '../styles/skills.scss'
import '../styles/page.scss'
import picture from '../static/skills2.jpg'
import Background from './Background';

function Skills({ pageEngaged, setPageEngaged }) {

    const [cube, setCube] = useState(true)

    return (
        <div
            onMouseEnter={() => setPageEngaged(true)}
            // onMouseLeave={() => setPageEngaged(false)}
            className={pageEngaged && cube ? "page-background transformed skills " : pageEngaged ? "page-background skills" : "page-background"}>


            {/* <img className="img-container" alt="" src={comp} /> */}
            <Background pageEngaged={pageEngaged} picture={picture} />
            {pageEngaged && <div className={cube ? "skills-container" : "skills-container-hidden"}>
                {cube && <div className={cube ? "skills-tab" : "skills-tab-hidden"}>
                    <div id="skills-title">Skills acquired:</div>
                    <div className="skills-item" id="html">HTML</div>
                    <div className="skills-item" id="css">CSS (sass/scss)</div>
                    <div className="skills-item" id="javascript">Javascript</div>
                    <div className="skills-item" id="react">React</div>
                    <div className="skills-item" id="node">Node.js / Express</div>
                    <div className="skills-item" id="mongo">MongoDB</div>
                    <div className="skills-item" id="git">Git</div>
                </div>}
            </div>}
            {pageEngaged && <div onMouseEnter={() => setCube(true)} onMouseLeave={() => setCube(false)} className={cube ? "cube-container cube-background" : "cube-container"}>
                <div className="cube">
                    <div className="side front">HTML</div>
                    <div className="side left">CSS</div>
                    <div className="side right">JavaScript</div>
                    <div className="side bottom">React</div>
                    <div className="side top">TypeScript</div>
                    <div className="side back">Node.js/Express</div>
                </div>
            </div>
            }
            <div onClick={() => setPageEngaged(false)} className={pageEngaged ? "main-text-hidden" : "main-text"}>SKILLS</div>
        </div>
    );
}

export default Skills;