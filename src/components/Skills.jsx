import React, { useState } from 'react';
import Background from './Background';
import Cube from './Cube';
import MainText from './MainText';
import SkillsTable from './SkillsTable';
import picture from '../static/skills.jpg'
import '../styles/skills.scss'


function Skills({ pageIsChanging, pageLoaded, setPageLoaded }) {

    const [cube, setCube] = useState(false)

    return (
        <>
            <div
                className={pageLoaded && cube ? "page-background transformed-2 skills " : pageLoaded ? "page-background skills" : "page-background"}>
                <Background pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} picture={picture} />
                {pageLoaded && <Cube cube={cube} setCube={setCube} />}
                {pageLoaded && <SkillsTable cube={cube} />}
            </div>
            <MainText setPageLoaded={setPageLoaded} pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} buttonText="SKILLS" />
        </>
    );
}

export default Skills;