import React from 'react';
import './css/header/style.css';
import Chip from "@material-ui/core/Chip";

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <nav className="head-nav">
                    <a href="http://localhost:8080/">
                        <div className="logo">
                            <h1 className="logo-font">Coffee</h1>
                            <h1 className="logo-font">Beans</h1>
                        </div>
                    </a>

                    <div></div>
                    <div></div>
                    <div></div>

                    <a href="http://localhost:8080/mypage">
                        <div className="host-page-btn">
                            <h1 className = "logo-font2">Go to host page</h1>
                        </div>
                    </a>
                    {
                       !window.sessionStorage.getItem("user_id")
                           ?
                           <a href="http://localhost:8080/login" className="login-btn">
                               <div>
                                   <h1 className = "logo-font2">Login</h1>
                               </div>
                           </a>
                           :
                        <a href="http://localhost:8080/" className="login-btn">
                        <div>
                        <h1 className = "logo-font2" onClick={()=>window.sessionStorage.clear()}>Logout</h1>
                        </div>
                        </a>
                    }
                </nav>
            </header>
        </React.Fragment>
    );
}


export default Header;
