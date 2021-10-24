import React from 'react';
import '../styles/home.scss'

function NavButton({ setPage, pageLoaded, direction, pageNumber, title }) {

    return (
        <div
            onClick={() => setPage(pageNumber)}
            className={pageLoaded ? `item${pageNumber} new-item${pageNumber} altered-${direction}` : `item${pageNumber}`}>
            <div className={`nav-link nav-${direction}`}>{title}</div>
        </div>
    );
}

export default NavButton;