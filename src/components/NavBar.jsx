import React, { useState } from 'react';
import '../styles/nav-bar.scss'

function NavBar({ navbar, setNavbar, setPage }) {

    return (
        <div className="navbar-container">
            <div className={navbar ? "navbar-item nav-item1" : "nav-hidden nav-item1"} onClick={() => setPage(1)}>About Me</div>
            <div className={navbar ? "navbar-item nav-item2" : "nav-hidden nav-item2"} onClick={() => setPage(2)}>My Projects</div>
            <div className={navbar ? "navbar-item nav-item3" : "nav-hidden nav-item3"} onClick={() => setPage(3)}>Skills</div>
            <div className={navbar ? "navbar-item nav-item4" : "nav-hidden nav-item4"} onClick={() => setPage(4)}>Contact</div>
            <div className={navbar ? "close-icon" : "menu-icon"} onClick={() => setNavbar(!navbar)} />
        </div>
    );
}

export default NavBar;