import React from 'react';

function Background({ picture, pageEngaged }) {

    let image = []

    for (let y = 0; y < 100; y += 10) {
        let row = []
        for (let x = 0; x < 100; x += 10) {
            row.push({ y: y, x: x })
        }
        image.push(row)
    }

    return (
        <div className="img-container ">
            {image.map(row => row.map(img => {
                return <div className="img-part" key={`${img.x}${img.y}`}
                    style={{
                        backgroundImage: `url(${picture})`,
                        backgroundPosition: `${img.x - 1}% ${img.y - 1}% `,
                        animation: !pageEngaged ? `drop-tiles 1s ${img.y * 10 + img.x * 10}ms ease forwards` :
                            'change-img 2s ease forwards',
                        opacity: "0"
                    }}
                    className="img-part"></div>
            }))}

        </div>
    );
}

export default Background;