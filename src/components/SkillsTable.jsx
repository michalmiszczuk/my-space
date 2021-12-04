import React from 'react';

function SkillsTable({ skillsTable }) {
    return (
        <div className={skillsTable ? "skills-container" : "skills-container-mobile"}>
            <div className={skillsTable ? "skills-tab" : "skills-tab-hidden"}>
                <div id="skills-title">Skills acquired:</div>
                <div className="skills-item" id="html">HTML</div>
                <div className="skills-item" id="css">CSS (sass/scss)</div>
                <div className="skills-item" id="javascript">Javascript / Typescript</div>
                <div className="skills-item" id="react">React / Redux</div>
                <div className="skills-item" id="node">Node.js / Express</div>
                <div className="skills-item" id="mongo">MongoDB</div>
                <div className="skills-item" id="git">Git</div>
            </div>
        </div>
    );
}

export default SkillsTable;