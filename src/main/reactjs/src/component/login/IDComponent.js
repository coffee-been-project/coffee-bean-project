import React, { Component } from 'react';
import "../../css/userRegister/findIdPw.css";
class IDComponent extends Component{
    render(){
        return (
            <div>
                <section className="find-input-section-wrap">
                    <div className="find-input-wrap">
                        <input placeholder="ID" type="text"/>
                    </div>
                    <div className="find-input-wrap password-wrap">
                        <input placeholder="E-mail" type="password"/>
                    </div>
                    <div className="find-button-wrap">
                        <button>아이디 찾기</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default IDComponent;