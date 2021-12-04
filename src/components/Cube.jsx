import React from 'react';

function Cube({ cube, setCube, setSkillsTable }) {

    const handleCubeAndTable = () => {
        setCube(true);
        setSkillsTable(true)
    }

    return (
        <div
            onMouseEnter={handleCubeAndTable} onMouseLeave={() => setCube(false)}
            className={cube ? "cube-container cube-background" : "cube-container"}
        >
            <div className="cube">
                <div className="side front">HTML</div>
                <div className="side left">CSS</div>
                <div className="side right">JavaScript</div>
                <div className="side bottom">React / Redux</div>
                <div className="side top">TypeScript</div>
                <div className="side back">Node.js/Express</div>
            </div>
        </div>

    )
}
export default Cube;