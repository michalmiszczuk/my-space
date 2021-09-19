import React, { useState } from 'react';
import AboutMe from './AboutMe'
import '../styles/aboutMe.scss';
import '../styles/home.scss'
import Skills from './Skills';
import MyProjects from './MyProjects';
import Contact from './Contact';

function Home(props) {
    const [page, setPage] = useState(1)
    const [pageEngaged, setPageEngaged] = useState(false)


    return (
        <div className="main-container">
            <div className="main-info"> Hello ! I'm Michal, Web developer.</div>
            <div className="grid-container">
                <div onClick={() => setPage(1)} className={pageEngaged ? "item1 altered-left" : "item1"}>
                    <div className="nav-link nav-left">About Me</div>
                </div>
                <div onClick={() => setPage(2)} className={pageEngaged ? "item2 altered-left" : "item2"}>
                    <div className="nav-link nav-left">My Projects</div>
                </div>
                <div className={pageEngaged ? "page-container-hover" : "page-container"}>
                    {page === 1 && <AboutMe setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                    {page === 2 && <MyProjects setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                    {page === 3 && <Skills setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                    {page === 4 && <Contact setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                </div>
                <div className={pageEngaged ? "item3 altered-right" : "item3"}>
                    <div onClick={() => setPage(3)} className="nav-link nav-right">Skills</div>
                </div>
                <div onClick={() => setPage(4)} className={pageEngaged ? "item4 altered-right" : "item4"}>
                    <div className="nav-link nav-right">Contact</div>
                </div>
            </div>
        </div>

    );
}

export default Home;

