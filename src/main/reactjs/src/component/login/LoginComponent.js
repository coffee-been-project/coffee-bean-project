import React, { Component } from 'react';
import "../../css/userRegister/style.css";

class LoginComponent extends Component{

    constructor (props){
        super(props);

        this.state= {
            ID:''
        }
    }

    setID = e => {
        this.setState({
            ID : e.target.value
        })
        console.log("하이");
        console.log(this.state.ID);
    }

    setLocalID = e =>{
        window.sessionStorage.setItem("user_id",this.state.ID);
    }




    render(){
        return (
            <React.Fragment>
            <form action="/loginProc"   method="post">
            <div className="login-flex-container">
                <div className="login-container">
                    <div className="login-wrap">
                        <p className="login-title">Login</p>
                        <section className="login-input-section-wrap">
                            <div className="login-input-wrap">
                                <input placeholder="ID" type="text" name="username" onChange={this.setID}/>
                            </div>
                            <div className="login-input-wrap password-wrap">
                                <input placeholder="Password" type="password" name="password"/>
                            </div>
                            <div className="login-button-wrap">
                                <button type="submit" onClick={this.setLocalID}>Sign in</button>
                            </div>
                        </section>

                        <section className="Easy-sign-in-wrap">
                            <h2 className="temp">OR</h2>
                            <div className="sign-button-list">
                                <button className="fab fa-naver-square">Naver로 로그인</button>
                                <button className="fab fa-kakao-square">Kakao로 로그인</button>
                            </div>
                            <p className="forget-msg"><a href={"http://localhost:8080/find"}>Forgot your ID</a> or
                                <a href={"http://localhost:8080/find"}>Password?</a> |
                                <a href={"http://localhost:8080/join"}> Sign up</a></p>
                        </section>
                    </div>
                </div>
            </div>
        </form>
                <div></div>
                <div></div>
            </React.Fragment>
        );
    }
}

export default LoginComponent;
