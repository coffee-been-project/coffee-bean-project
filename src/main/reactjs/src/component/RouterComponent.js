import React, {Component} from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import CafeListComponent from "./CafeList/CafeListComponent";
import CafeInfoComponent from "./CafeInfo/CafeInfoComponent";
import CafeReviewListComponent from "./CafeReview/CafeReviewListComponent";
import MyPageComponent from "./mypage/MypageComponent";
import CafeReviewDetailComponent from "./CafeReview/CafeReviewDetailComponent";
import CafeRegisterComponent from "./mypage/CafeRegisterComponent";
import LoginComponent from "./login/LoginComponent";
import JoinComponent from "./login/JoinComponent";
import FindIDPWComponent from "./login/FindIDPWComponent";
import CafeReviewWriteComponent from "./CafeReview/CafeReviewWriteComponent";
import IndexComponents from "./index/IndexComponents";


class RouterComponent extends Component{
    render(){
        return(

                <BrowserRouter>

                        <Switch>
                            <Route path="/cafe-list" component={CafeListComponent}/>
                            <Route path="/cafe-info" component={CafeInfoComponent}/>
                            <Route path="/cafe-review-list" component={CafeReviewListComponent}/>
                            <Route path="/cafe-review-detail" component={CafeReviewDetailComponent}/>
                            <Route path="/cafe-review-write" component={CafeReviewWriteComponent}/>
                            <Route path="/mypage" component={MyPageComponent}/>
                            <Route path="/cafe-register" component={CafeRegisterComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/join" component={JoinComponent}/>
                            <Route path="/find" component={FindIDPWComponent}/>
                            <Route path ="/" component={IndexComponents}/>
                        </Switch>

                </BrowserRouter>

        )
    }
}

const style = {
    margin: '10px'
}

export default RouterComponent;