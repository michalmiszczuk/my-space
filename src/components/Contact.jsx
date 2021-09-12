import React, { useState } from 'react';
import comp from '../static/contact.jpg'
import '../styles/contact.scss'
import '../styles/page.scss'

function Contact({ pageEngaged, setPageEngaged }) {

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [skills, setSkills] = useState(false)

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
            // onMouseLeave={() => setPageEngaged(false)}
            onMouseMove={(e) => mouse(e)}
            className={pageEngaged && skills ? "page-background  contact magnified-contact" : pageEngaged ? "page-background contact " : "page-background"}>
            {pageEngaged && <div style={{ top: mousePos.y + 2, left: mousePos.x + 2 }} className="mouse"></div>}
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
            <div onMouseEnter={() => setSkills(true)} onMouseLeave={() => setSkills(false)} className="contact-info-container">lalala</div>


            {!skills && <div onClick={() => setPageEngaged(false)} className={pageEngaged ? "main-text-hidden" : "main-text"}>CONTACT</div>}

        </div >
    );
}

export default Contact;