import React from 'react';
import './header.scss';

const HeaderComponent = ({
    fixHeader
}) => {
    return (
        <div className={`header-container ${(fixHeader) ? 'fixed' : ''}`} >
            <div className="nav">
            </div>
        </div>
    )
}

export default HeaderComponent;