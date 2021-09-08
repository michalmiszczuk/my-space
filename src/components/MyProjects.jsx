import React from 'react';
import comp from '../static/projects.jpeg'
import '../styles/my-projects.scss'

function MyProjects({ pageEngaged, setPageEngaged }) {

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
            className={pageEngaged ? "page-background my-projects" : "page-background"}>
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
            <div class="projects-container">
                <div className="projects-item">Website / App - online business card where students can book English lessons.</div>
                <div className="projects-item">Tile Wars - a board game </div>
                <div className="projects-item">Sorting Alogrithm</div>
                <div className="projects-item">Calculator - a simple project using vanilla JS</div>
            </div>
            <div onClick={() => setPageEngaged(false)} className={pageEngaged ? "main-text-hidden" : "main-text"}>My Projects</div>
        </div>
    );
}

export default MyProjects;