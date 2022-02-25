import React, { Component } from 'react';
import "../../css/mypage/mainmypage.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {ThemeProvider} from "@mui/material/styles";
import Button from "@mui/material/Button";
import SubjectIcon from "@mui/icons-material/Subject";
class MainMypageComponent extends Component{

    constructor (props){
        super(props);

        this.state= {
            userCode:"",
            userName:"",
            userAge:"",
            userId:"",
            userEmail:"",
            userGender:"",
            userHostCafe:"",
            prefers:[],
            hostcafe:""
        }
    }

    componentDidMount(){
        this.loadUserInfo();
        this.loadPrefer();
        this.loadUserCafe();
    }

    loadUserInfo = () => {
        fetch("http://localhost:8080/cafe_user/"+window.sessionStorage.getItem("user_id")) // login 이후 '1'을 param 변경.
            .then((response) => response.json())
            .then(response =>{
                let user = response;
                this.setState({
                    user_name: user.user_name,
                    user_id: user.user_id,
                    user_age: user.user_age,
                    user_email: user.user_email,
                    user_gender: user.user_gender,
                    user_ishost: user.user_ishost

                })
            })

            .catch(err => {
                console.log('loadUserInfo() Error!',err);
            })
    }

    loadPrefer = () =>{
        fetch("http://localhost:8080/cafe_user/"+window.sessionStorage.getItem("user_id")+"/prefer")
            .then((response)=>response.json())
            .then(response=>{
                this.setState({
                    prefers:response
                })
            })
    }

    loadUserCafe = () =>{
        fetch("http://localhost:8080/cafe_user/"+window.sessionStorage.getItem("user_id")+"/userCafe")
            .then((response)=>response.json())
            .then(response=>{
                let cafe = response;
                this.setState({
                    hostcafe:cafe.cafe_name
                })
            })
    }


    render()
    {
        return (
            <main className="main-info">
                <form className="info-container">
                    <div className="about-user">
                        <div className="user-avatar-info">
                            <div className="input-container">
                                <h4 className="info-text">Name</h4>
                                <input disabled className="info-input" type="text" value={this.state.user_name}/>
                            </div>
                            <div className="input-container">
                                <h4 className="info-text">Age</h4>
                                <input disabled className="info-input" type="Number" value={this.state.user_age}/>
                            </div>
                            <div className="input-container">
                                <h4 className="info-text">Gender</h4>
                                <h3 className="h3-font">{this.state.user_gender}</h3>
                            </div>
                        </div>
                        <div className="user-sub-info">
                            <div className="input-container">
                                <h4 className="info-text">User Id</h4>
                                <input disabled className="info-input" type="text" value={this.state.user_id}/>
                            </div>
                            <div className="input-container">
                                <h4 className="info-text">Email</h4>
                                <input disabled className="info-input" type="email" value={this.state.user_email}/>
                            </div>
                            <div className="input-container">
                                <h4 className="info-text">Host Cafe</h4>
                                <input disabled className="info-input" type="text" value={this.state.hostcafe}/>
                                {/*<a className="a-font" href={this.state.user_ishost}>Please register your cafe</a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="info-child-container">
                        <button className="edit-btn">
                            <h1 className="info-font">Edit Profile</h1>
                        </button>
                        <a href="#">
                            <div className="cafe-btn">
                                <h1 className="info-font yellow-font"><a href={"http://localhost:8080/cafe-register"}>카페 등록하기</a></h1>
                            </div>
                        </a>
                    </div>
                </form>

                <div className="info-container">
                    <div className="about-cafe">
                        <div className="prefer-cafe-container">
                            <h4 className="info-text">My favorite cafe</h4>
                            <div className="favorite-cafe-link">

                                    {this.state.prefers.map ( prefer =>
                                        <text key={prefer.cafe_name}>{prefer.cafe_name} / </text>
                                        )}
                            </div>
                        </div>
                        <div className="bar"></div>
                        <div className="my-review-container">
                            <h4 className="info-text">My reviews</h4>
                            <ul>
                                <li className="review-list">
                                    <a href="#"> x </a>
                                </li>
                                <li className="review-list">
                                    <a href="#"> x </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        );
    }
}


export default MainMypageComponent;