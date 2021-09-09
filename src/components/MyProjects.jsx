import React, { useState } from 'react';
import comp from '../static/projects.jpeg'
import '../styles/my-projects.scss'
import '../styles/page.scss'

function MyProjects({ pageEngaged, setPageEngaged }) {

    const [skills, setSkills] = useState(false)

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
            className={pageEngaged && skills ? " page-background my-projects magnified " : pageEngaged ? "page-background my-projects " : "page-background"}>
            {/* <img className="img-container" alt="" src={comp} /> */}
            <div className="img-container ">
                {image.map(row => row.map(img => {
                    return <div key={`${img.x}${img.y}`}
                        style={{
                            backgroundImage: `url(${comp})`,
                            backgroundPosition: `${img.x}% ${img.y}% `,
                            animation: !pageEngaged ? `drop-tiles 1s ${img.y * 10 + img.x * 10}ms ease forwards` :
                                'change-img 2s ease forwards',
                            backgroundSize: "1000%",
                            opacity: "0"
                        }}
                        className="img-part"></div>
                }))}

            </div>
            <div onMouseEnter={() => setSkills(true)} onMouseLeave={() => setSkills(false)} class="projects-container">
                <div className="projects-item">- Website / App - my online business card where students can book English lessons.</div>
                <a href="https://github.com/michalmiszczuk/english-empowering">GitHub</a>
                <a href="https://englishempowering.com/">Live</a>
                <div className="projects-item">- Tile Wars - a board game </div>
                <a href="https://github.com/michalmiszczuk/english-empowering">GitHub</a>
                <a href="https://englishempowering.com/">Live</a>
                <div className="projects-item">- Sorting Alogrithm</div>
                <a href="https://github.com/michalmiszczuk/english-empowering">GitHub</a>
                <div className="projects-item">- Calculator - a simple project using vanilla JS</div>
                <a href="https://github.com/michalmiszczuk/english-empowering">GitHub</a>
                <a href="https://englishempowering.com/">Live</a>
            </div>
            <div onClick={() => setPageEngaged(false)} className={pageEngaged ? "main-text-hidden" : "main-text"}>My Projects</div>
        </div>
    );
}

export default MyProjects;