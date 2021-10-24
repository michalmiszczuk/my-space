import React from 'react';
import '../styles/page.scss'

function MainText({ setPageLoaded, pageIsChanging, pageLoaded, buttonText }) {
    return (
        <div className={pageIsChanging ? "main-text-disappear" : "main-text-appear"}>
            <div onClick={() => setPageLoaded(!pageLoaded)} className={pageLoaded ? "main-text-hidden" : "main-text"}>{pageLoaded ? "MENU" : `${buttonText}`}</div>
        </div>
    );
}

export default MainText;