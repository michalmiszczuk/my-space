import React from 'react';
import '../styles/home.scss'

function NavButton({ setPage, pageEngaged, direction, pageNumber, title }) {

    return (
        <div onClick={() => setPage(pageNumber)} className={pageEngaged ? `new-item${pageNumber} altered-${direction}` : `item${pageNumber}`}>
            <div className={`nav-link nav-${direction}`}>{title}</div>
        </div>
    );
}

export default NavButton;