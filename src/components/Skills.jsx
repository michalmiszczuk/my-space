import React, { useState } from 'react';
import '../styles/skills.scss'
import '../styles/page.scss'
import picture from '../static/tech.jpg'

function Skills({ pageEngaged, setPageEngaged }) {

    const [cube, setCube] = useState(true)
    let image = []

    for (let y = 0; y < 100; y += 10) {
        let row = []
        for (let x = 0; x < 100; x += 10) {
            row.push({ y: y, x: x })
        }
        image.push(row)
    }

    return (
        <div
            onMouseEnter={() => setPageEngaged(true)}
            // onMouseLeave={() => setPageEngaged(false)}
            className={pageEngaged && cube ? "page-background transformed skills " : pageEngaged ? "page-background skills" : "page-background"}>


            {/* <img className="img-container" alt="" src={comp} /> */}
            <div className="img-container ">
                {image.map(row => row.map(img => {
                    return <div key={`${img.x}${img.y}`}
                        style={{
                            backgroundImage: `url(${picture})`,
                            backgroundPosition: `${img.x}% ${img.y}% `,
                            animation: !pageEngaged ? `drop-tiles 1s ${img.x * 10 + img.y * 10}ms ease forwards` :
                                'change-img 2s ease forwards',
                            animationFillMode: "forwards",
                            backgroundSize: "1000%",
                            opacity: "0"
                        }}
                        className="img-part center"></div>
                }))}

            </div>
            {pageEngaged && <div className={cube ? "skills-container" : "skills-container-hidden"}>
                {cube && <div style={{ width: "100%" }}>
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
            {pageEngaged && <div onMouseEnter={() => setCube(true)} onMouseLeave={() => setCube(false)} className="cube-container">
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