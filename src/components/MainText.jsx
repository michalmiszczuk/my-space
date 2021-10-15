import React from 'react';
import '../styles/page.scss'

function MainText({ setPageEngaged, pageChanged, pageEngaged, buttonText }) {
    return (
        <div className={pageChanged ? "main-text-disappear" : "main-text-appear"}>
            <div onClick={() => setPageEngaged(!pageEngaged)} className={pageEngaged ? "main-text-hidden" : "main-text"}>{pageEngaged ? "MENU" : `${buttonText}`}</div>
        </div>
    );
}

export default MainText;