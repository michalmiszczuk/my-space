import React, { useState } from 'react';
import Background from './Background';
import Cube from './Cube';
import MainText from './MainText';
import SkillsTable from './SkillsTable';
import picture from '../static/skills.jpg'
import pictureSmall from '../static/skills-small.jpg'
import '../styles/skills.scss'


function Skills({ pageIsChanging, pageLoaded, setPageLoaded }) {

    const [cube, setCube] = useState(false)
    const [skillsTable, setSkillsTable] = useState(false)
    const isMobile = window.innerWidth < 768

    const handlePageChange = () => {
        setPageLoaded(!pageLoaded);
        setSkillsTable(false);
    }

    return (
        <>
            <div
                className={pageLoaded && cube ? "page-background transformed-2 skills " : pageLoaded ? "page-background skills" : "page-background"}>
                <Background pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} picture={isMobile ? pictureSmall : picture} />
                {pageLoaded && <Cube cube={cube} setCube={setCube} setSkillsTable={setSkillsTable} />}
                {pageLoaded && <SkillsTable skillsTable={skillsTable} />}
            </div>
            <MainText setPageLoaded={handlePageChange} pageIsChanging={pageIsChanging} pageLoaded={pageLoaded} buttonText="SKILLS" />
        </>
    );
}

export default Skills;