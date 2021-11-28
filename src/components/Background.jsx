import React from 'react';

function Background({ pageIsChanging, picture, pageLoaded }) {

    const isMobile = window.innerWidth < 768

    let image = []

    for (let y = 1; y < 100; y += 10) {
        let row = []
        for (let x = 1; x < 100; x += 10) {
            row.push({ y, x })
        }
        image.push(row)
    }

    if (pageLoaded) return null;
    if (isMobile) return <div className="img-container" style={{ backgroundImage: `url(${picture})` }}></div>
    return (
        <>
            {!pageIsChanging && <div className="img-container ">
                {image.map(row => row.map(img => {
                    return <div className="img-part" key={`${img.x}${img.y}`}
                        style={{
                            backgroundImage: `url(${picture})`,
                            backgroundPosition: `${img.x}% ${img.y}% `,
                            animation: `drop-tiles 0.5s ${img.y * 10 + img.x * 10}ms ease forwards`,
                            opacity: "0",
                        }}
                    />
                }))}
            </div>}
            {pageIsChanging && <div className="img-container ">
                {image.map(row => row.map(img => {
                    return <div className="img-part" key={`${img.x}${img.y}`}
                        style={{
                            backgroundImage: `url(${picture})`,
                            backgroundPosition: `${img.x}% ${img.y}% `,
                            animation: `drop-tiles 0.5s ${img.y * 10 + img.x * 10}ms ease forwards reverse`,
                            opacity: "1",
                        }}
                    />
                }))}
            </div>}
        </>
    );
}

export default Background;