import React, { Component } from 'react';
import "../../css/userRegister/style.css";
class JoinComponent extends Component{



    render(){
        return (
            <React.Fragment>
            <form action="/user/save" method="post">
            <div className="join-container">
                <div className="join-wrap">
                    <p className="join-title">Join</p>

                    <div className="row">
                        <div className="col-md-5 mb-3">
                            <select name="user_ishost"  className="custom-select d-block w-100" id="root">
                                <option value="0">== Host/Guest ==</option>
                                <option value="H">Host</option>
                                <option value="G">Guest</option>
                            </select>
                            <div className="invalid-feedback">
                                호스트인지 게스트인지 선택해주세요.
                            </div>
                        </div>
                        <div className="col-md-5 mb-3">
                            <select name="user_gender"  className="custom-select d-block w-100" id="root">
                                <option value="none">== 성별 ==</option>
                                <option value="M">Man</option>
                                <option value="W">Woman</option>
                            </select>
                            <div className="invalid-feedback">
                                남자인지 여자인지 선택해주세요.
                            </div>
                        </div>
                        <div className="col-md-5 mb-3">
                            <div className="join-input-wrap">
                                <input placeholder="UserName" type="text" name="user_name"/>
                            </div>
                        </div>
                        <div className="col-md-5 mb-3">
                            <div className="join-input-wrap">
                                <input placeholder="Age" type="int" name="user_age"/>
                            </div>
                        </div>
                    </div>

                    <section className="join-input-section-wrap">
                        <div className="join-input-wrap2">
                            <input placeholder="ID" type="text" name="user_id"/>
                        </div>
                        <div className="join-input-wrap2">
                            <input placeholder="Password" type="text" name="user_password"/>
                        </div>
                        <div className="join-input-wrap2">
                            <input placeholder="E-mail" type="text" name="user_email"/>
                        </div>
                        <div className="col-md-8 mb-2">
                            <select name="user_password_question" className="custom-select d-block w-100" id="root">
                                <option value="none">== 비밀번호 찾기 질문 ==</option>
                                <option value="가장 좋아하는 동물은?">가장 좋아하는 동물은?</option>
                                <option value="어렸을 때 장래희망은?">어렸을 때 장래희망은?</option>
                                <option value="가장 좋아하는 취미는?">가장 좋아하는 취미는?</option>
                                <option value="가장 좋아하는 음식은?">가장 좋아하는 음식은?</option>
                            </select>
                            <div className="invalid-feedback">
                                비밀번호 찾기 질문을 적어주세요.
                            </div>
                        </div>
                        <div className="join-input-wrap2">
                            <input name="user_password_answer" placeholder="질문에 대한 대답" type="text"/>
                        </div>
                        <div className="join-button-wrap">
                            <button type="submit">Join in</button>
                            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />

                        </div>
                    </section>
                    {/*
                csrf token을 같이 보내줘야 함 security 는
*/}
                </div>
            </div>

    </form>
                <div></div>
                <div></div>
            </React.Fragment>
        );
    }
}


export default JoinComponent;
