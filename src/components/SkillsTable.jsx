import React from 'react';

function SkillsTable({ cube }) {
    return (
        <div className={cube ? "skills-container" : "skills-container-hidden"}>
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
        </div>
    );
}

export default SkillsTable;