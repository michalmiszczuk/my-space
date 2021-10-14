import React, { useState } from 'react';
import '../styles/skills.scss'
import '../styles/page.scss'
import picture from '../static/1.jpg'
import Background from './Background';
import Cube from './Cube';
import SkillsTable from './SkillsTable';

function Skills({ pageEngaged, setPageEngaged }) {

    const [cube, setCube] = useState(true)

    return (
        <div
            className={pageEngaged && cube ? "page-background transformed-2 skills " : pageEngaged ? "page-background skills" : "page-background"}>
            <Background pageEngaged={pageEngaged} picture={picture} />
            {pageEngaged && <SkillsTable cube={cube} />}
            {pageEngaged && <Cube cube={cube} setCube={setCube} />}
            <div onClick={() => setPageEngaged(!pageEngaged)} className={pageEngaged ? "main-text-hidden" : "main-text"}>{pageEngaged ? "MENU" : "SKILLS"}</div>
        </div>
    );
}

export default Skills;