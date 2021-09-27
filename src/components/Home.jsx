import React, { useState } from 'react';
import AboutMe from './AboutMe'
import '../styles/aboutMe.scss';
import '../styles/home.scss'
import Skills from './Skills';
import MyProjects from './MyProjects';
import Contact from './Contact';
import NavButton from './NavButton';
import NavBar from './NavBar';

function Home(props) {
    const [page, setPage] = useState(1)
    const [navbar, setNavbar] = useState(true)
    const [pageEngaged, setPageEngaged] = useState(false)


    return (
        <div className="main-container">
            <div className="main-info"> Hello ! I'm Michal, Web developer.</div>
            <div className="grid-container">
                <NavButton setPage={(page) => setPage(page)} direction="left" pageEngaged={pageEngaged} pageNumber={1} title="About me" />
                <NavButton setPage={(page) => setPage(page)} direction="left" pageEngaged={pageEngaged} pageNumber={2} title="My projects" />
                <div className={pageEngaged ? "page-container-hover" : "page-container"}>
                    {page === 1 && <AboutMe setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                    {page === 2 && <MyProjects setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                    {page === 3 && <Skills setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                    {page === 4 && <Contact setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                </div>
                <NavButton setPage={(page) => setPage(page)} direction="right" pageEngaged={pageEngaged} pageNumber={3} title="Skills" />
                <NavButton setPage={(page) => setPage(page)} direction="right" pageEngaged={pageEngaged} pageNumber={4} title="Contact" />
            </div>
            <NavBar setPage={(page) => setPage(page), () => setPageEngaged(false)} navbar={navbar} setNavbar={setNavbar} />
        </div>

    );
}

export default Home;

