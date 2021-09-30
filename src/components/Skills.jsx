import React, { useState } from 'react';
import '../styles/skills.scss'
import '../styles/page.scss'
import picture from '../static/skills2.jpg'
import Background from './Background';
import Cube from './Cube';
import SkillsTable from './SkillsTable';

function Skills({ pageEngaged, setPageEngaged }) {

    const [cube, setCube] = useState(true)

    return (
        <div
            // onMouseLeave={() => setPageEngaged(false)}
            className={pageEngaged && cube ? "page-background transformed skills " : pageEngaged ? "page-background skills" : "page-background"}>
            <Background pageEngaged={pageEngaged} picture={picture} />
            {pageEngaged && <SkillsTable cube={cube} />}
            {pageEngaged && <Cube cube={cube} setCube={setCube} />}
            <div onClick={() => setPageEngaged(!pageEngaged)} className={pageEngaged ? "main-text-hidden" : "main-text"}>{pageEngaged ? "MENU" : "SKILLS"}</div>
        </div>
    );
}

export default Skills;