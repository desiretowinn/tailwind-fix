import React from 'react';
import "./index.scss"

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <a href="#" className="header__link">Works</a>
                        <a href="#" className="header__link">Blog</a>
                        <a href="#" className="header__link">Contact</a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;