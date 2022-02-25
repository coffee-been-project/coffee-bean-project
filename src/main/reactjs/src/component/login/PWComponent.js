import React, { Component } from 'react';
import "../../css/userRegister/findIdPw.css";

class PWComponent extends Component{
    render(){
        return (
            <div>
                <section className="find-input-section-wrap">
                    <div className="find-input-wrap">
                        <input placeholder="ID" type="text"/>
                    </div>
                    <div className="col-md-8 mb-2">
                        <div className="password-question">
                            <select className="custom-select d-block w-100" id="root">
                                <option value="none">== 비밀번호 찾기 질문 ==</option>
                                <option>가장 좋아하는 동물은?</option>
                                <option>어렸을 때 장래희망은?</option>
                                <option>가장 좋아하는 취미는?</option>
                                <option>가장 좋아하는 음식은?</option>
                            </select>
                            <div className="invalid-feedback">
                                비밀번호 찾기 질문을 적어주세요.
                            </div>
                        </div>
                    </div>
                    <div className="find-input-wrap password-wrap">
                        <input placeholder="pw 찾기 답변" type="password"/>
                    </div>
                    <div className="find-button-wrap">
                        <button>비밀번호 찾기</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default PWComponent;
