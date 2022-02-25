import React, { Component } from 'react';

import InedexMainComponent from "./IndexMainComponent";
import InedexFooterComponent from "./IndexFooterComponent";
import "../../css/header/index.css"

class IndexComponents extends Component{

    render(){
        return(
            <React.Fragment>
                <InedexMainComponent/>
                <InedexFooterComponent/>
                <script src="https://kit.fontawesome.com/6478f529f2.js" crossOrigin="anonymous"></script>
            </React.Fragment>
        );
    }
}

export default IndexComponents;
