import React from 'react';
import '../styles/nav-bar.scss'

function NavBar({ navbar, setNavbar, setPage, closePage, pageEngaged }) {

    return (
        <div className="navbar-container">
            <div className={navbar ? "navbar-item nav-item1" : "nav-hidden nav-item1"} onClick={() => setPage(1)}>about</div>
            <div className={navbar ? "navbar-item nav-item2" : "nav-hidden nav-item2"} onClick={() => setPage(2)}>projects</div>
            <div className={navbar ? "navbar-item nav-item3" : "nav-hidden nav-item3"} onClick={() => setPage(3)}>skills</div>
            <div className={navbar ? "navbar-item nav-item4" : "nav-hidden nav-item4"} onClick={() => setPage(4)}>contact</div>
            <div className={navbar ? "close-icon" : "menu-icon"} onClick={() => setNavbar(!navbar)} />
            <div className={pageEngaged ? "back-icon" : "back-icon-hidden"} onClick={() => closePage()} />
        </div>
    );
}

export default NavBar;