import React, { useState } from 'react';
import AboutMe from './AboutMe';
import './home.css'
import Skills from './Skills';

function Home(props) {
    const [page, setPage] = useState(1)
    const [pageEngaged, setPageEngaged] = useState(false)


    return (
        <div className="main-container">
            <div className="main-info">Something....</div>
            <div className="grid-container">
                <div onClick={() => setPage(1)} className={pageEngaged ? "item1 altered-left center" : "item1 center"}>
                    <div className="nav-link-left">About Me</div>
                </div>
                <div className={pageEngaged ? "item2 altered-left center" : "item2 center"}>
                    <div className="nav-link-left">My Projects</div>
                </div>
                <div className={pageEngaged ? "page-container-hover center" : "page-container center"}>
                    {page === 1 && <AboutMe setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                    {page === 3 && <Skills setPageEngaged={setPageEngaged} pageEngaged={pageEngaged} />}
                </div>
                <div className={pageEngaged ? "item3 altered-right center" : "item3 center"}>
                    <div onClick={() => setPage(3)} className="nav-link-right">Skills</div>
                </div>
                <div className={pageEngaged ? "item4 altered-right center" : "item4 center"}>
                    <div className="nav-link-right">Education</div>
                </div>
            </div>
            <div className="footer">Footer...</div>
        </div>

    );
}

export default Home;

