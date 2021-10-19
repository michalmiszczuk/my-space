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
    const [navbar, setNavbar] = useState(false)
    const [pageEngaged, setPageEngaged] = useState(false)
    const [pageChanged, setPageChanged] = useState(false)

    const handleNavBar = (page) => {
        if (pageChanged) return;
        setPage(page);
        setPageEngaged(false);
    }

    const handlePageChange = (page) => {
        if (pageChanged) return
        setNavbar(false)
        setPageEngaged(false)
        setPageChanged(true)
        setTimeout(() => {
            setPage(page)
            setPageChanged(false)
        }, 2500)
    }


    return (
        <div className="main-container">
            <div className="main-info"> Hello ! I'm Michal, Web developer.</div>
            <div className="grid-container">
                <NavButton setPage={handlePageChange} direction="left" pageEngaged={pageEngaged} pageNumber={1} title="about" />
                <NavButton setPage={handlePageChange} direction="left" pageEngaged={pageEngaged} pageNumber={2} title="projects" />
                <div className={pageEngaged ? "page-container-hover" : "page-container"}>
                    {page === 1 && <AboutMe pageChanged={pageChanged} setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                    {page === 2 && <MyProjects pageChanged={pageChanged} setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                    {page === 3 && <Skills pageChanged={pageChanged} setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                    {page === 4 && <Contact pageChanged={pageChanged} setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                </div>
                <NavButton setPage={handlePageChange} direction="right" pageEngaged={pageEngaged} pageNumber={3} title="skills" />
                <NavButton setPage={handlePageChange} direction="right" pageEngaged={pageEngaged} pageNumber={4} title="contact" />
            </div>
            <NavBar setPage={handlePageChange} navbar={navbar} setNavbar={setNavbar} />
        </div>

    );
}

export default Home;

