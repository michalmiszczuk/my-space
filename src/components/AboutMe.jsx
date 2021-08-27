import React, { useEffect, useState } from 'react';
import './aboutMe.css'
import './page.css'
import computer from '../static/komp.jpg'
import comp from '../static/33.jpg'

function AboutMe({ pageEngaged, setPageEngaged }) {

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    let image = []

    for (let y = 0; y < 100; y += 10) {
        let row = []
        for (let x = 0; x < 100; x += 10) {
            row.push({ y: y, x: x })
        }
        image.push(row)
    }

    const mouse = (e) => {
        let x = e.clientX
        let y = e.clientY
        setMousePos({ x: x, y: y })
    }


    return (
        <div
            onMouseEnter={() => setPageEngaged(true)}
            onMouseLeave={() => setPageEngaged(false)}
            onMouseMove={(e) => mouse(e)}
            className={pageEngaged ? "page-background about-me " : "page-background"}>


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
            <div className={pageEngaged ? "me-text" : "me-text-hidden"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, minima.
                <div className="me-icon-container">
                    <div className="me-icon">1</div>
                    <div className="me-icon">2</div>
                    <div className="me-icon">3</div>
                    <div className="me-icon">4</div>
                </div>
            </div>

            <div onClick={() => setPageEngaged(false)} className={pageEngaged ? "main-text-hidden" : "main-text"}>ABOUT ME</div>
            {pageEngaged && <div style={{ top: mousePos.y + 2, left: mousePos.x + 2 }} className="mouse"></div>}
        </div>
    );
}

export default AboutMe;