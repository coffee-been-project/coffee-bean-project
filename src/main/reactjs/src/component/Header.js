import React from 'react';
import "../templates/headercss/style.css";

const Header = () => {
    return (
        <div>

                    <header>
                        <nav className="head-nav">
                            <a href="index.html">
                                <div className="logo">
                                    <h1 className="logo-font">Coffee</h1>
                                    <h1 className="logo-font">Beans</h1>
                                </div>
                            </a>

                            <div></div>
                            <div></div>
                            <div></div>

                            <a href="#">
                                <div className="host-page-btn">
                                    <h1>Go to host page</h1>
                                </div>
                            </a>
                            <a href="#" className="login-btn">
                                <div>
                                    <h1>Login</h1>
                                </div>
                            </a>
                        </nav>
                    </header>

        </div>
);
}


export default Header;
