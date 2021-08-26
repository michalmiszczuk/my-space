import React from 'react';
import './skills.css'
import './page.css'
import comp from '../static/tech.jpg'

function Skills({ pageEngaged, setPageEngaged }) {
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
            onMouseLeave={() => setPageEngaged(false)}
            className={pageEngaged ? "page-background about-me " : "page-background"}>


            {/* <img className="img-container" alt="" src={comp} /> */}
            <div className="img-container ">
                {image.map(row => row.map(img => {
                    return <div key={`${img.x}${img.y}`}
                        style={{
                            backgroundImage: `url(${comp})`,
                            backgroundPosition: `${img.x}% ${img.y}% `,
                            animation: !pageEngaged ? `drop-tiles 1s ${img.x * 20 + img.y * 5}ms ease` :
                                'change-img 2s ease forwards',
                            animationFillMode: "forwards",
                            backgroundSize: "1000%",
                        }}
                        className="img-part center"></div>
                }))}

            </div>
            <div className={pageEngaged ? "me-text" : "me-text-hidden"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, minima.
                <div className="me-icon-container">
                    <div className="me-icon">1</div>
                    <div className="me-icon">2</div>
                    <div className="me-icon">3</div>
                    <div className="me-icon">4</div>
                </div>
            </div>

            <div onClick={() => setPageEngaged(false)} className={pageEngaged ? "main-text-hidden" : "main-text"}>SKILLS</div>
        </div>
    );
}

export default Skills;