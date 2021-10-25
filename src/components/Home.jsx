import React, { useState } from 'react';
import AboutMe from './AboutMe'
import Contact from './Contact';
import MyProjects from './MyProjects';
import NavBar from './NavBar';
import NavButton from './NavButton';
import Skills from './Skills';

import '../styles/home.scss'

function Home(props) {
    const [page, setPage] = useState(1)
    const [navbar, setNavbar] = useState(false)
    const [pageLoaded, setPageLoaded] = useState(false)
    const [pageIsChanging, setPageIsChanging] = useState(false)

    const handlePageChange = (page) => {
        if (pageIsChanging) return
        setPageLoaded(false)
        setPageIsChanging(true)
        setNavbar(false)
        setTimeout(() => {
            setPage(page)
            setPageIsChanging(false)
        }, 2000)
    }

    const handleNavBar = (page) => {
        if (pageIsChanging) return
        if (pageLoaded) {
            setPage(page)
            setNavbar(false)
            return
        }
        handlePageChange(page)
    }



    return (
        <>
            <div className="main-container">
                <div className="main-info"> Hello ! I'm Michal, Web developer.</div>
                <div className="grid-container">
                    <NavButton setPage={handlePageChange} direction="left" pageLoaded={pageLoaded} pageNumber={1} title="about" />
                    <NavButton setPage={handlePageChange} direction="left" pageLoaded={pageLoaded} pageNumber={2} title="projects" />
                    <div className={pageLoaded ? "page-container-open" : "page-container"}>
                        {page === 1 && <AboutMe pageIsChanging={pageIsChanging} setPageLoaded={setPageLoaded} pageLoaded={pageLoaded} />}
                        {page === 2 && <MyProjects pageIsChanging={pageIsChanging} setPageLoaded={setPageLoaded} pageLoaded={pageLoaded} />}
                        {page === 3 && <Skills pageIsChanging={pageIsChanging} setPageLoaded={setPageLoaded} pageLoaded={pageLoaded} />}
                        {page === 4 && <Contact pageIsChanging={pageIsChanging} setPageLoaded={setPageLoaded} pageLoaded={pageLoaded} />}
                    </div>
                    <NavButton setPage={handlePageChange} direction="right" pageLoaded={pageLoaded} pageNumber={3} title="skills" />
                    <NavButton setPage={handlePageChange} direction="right" pageLoaded={pageLoaded} pageNumber={4} title="contact" />
                </div>
            </div>
            <NavBar pageLoaded={pageLoaded} closePage={() => setPageLoaded(false)} setPage={handleNavBar} navbar={navbar} setNavbar={setNavbar} />
        </>

    );
}

export default Home;

