import React, { useState } from 'react';
import '../styles/skills.scss'
import '../styles/page.scss'
import picture from '../static/2.jpg'
import Background from './Background';
import Cube from './Cube';
import SkillsTable from './SkillsTable';
import MainText from './MainText';

function Skills({ pageChanged, pageEngaged, setPageEngaged }) {

    const [cube, setCube] = useState(true)

    return (
        <div
            className={pageEngaged && cube ? "page-background transformed-2 skills " : pageEngaged ? "page-background skills" : "page-background"}>
            <Background pageChanged={pageChanged} pageEngaged={pageEngaged} picture={picture} />
            {pageEngaged && <SkillsTable cube={cube} />}
            {pageEngaged && <Cube cube={cube} setCube={setCube} />}
            <MainText setPageEngaged={setPageEngaged} pageChanged={pageChanged} pageEngaged={pageEngaged} buttonText="SKILLS" />
        </div>
    );
}

export default Skills;