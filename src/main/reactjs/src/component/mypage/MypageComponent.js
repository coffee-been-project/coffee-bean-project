import React, { Component } from 'react';
import MainMypageComponent from "./MainMypageComponent";
import FooterMypageComponent from "./FooterMypageComponent";

class MyPageComponent extends Component{

    render(){
        return(
            <React.Fragment>
                <MainMypageComponent/>
                <FooterMypageComponent/>
            </React.Fragment>
        );
    }
}

export default MyPageComponent;
