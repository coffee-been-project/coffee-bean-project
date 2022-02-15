import React from 'react';
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import CafeListComponent from "./CafeListComponent";
import CafeInfoComponent from "./CafeInfoComponent";
import CafeReviewComponent from "./CafeReviewComponent";

import TestApp from "./Test/TestApp";

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <div style = {style} >
                    <Switch>
                        <Route exact path = "/cafe-list" component = {CafeListComponent} />
                        <Route path = "/cafe-info" component = {CafeInfoComponent} />
                        <Route path = "/cafe-review" component = {CafeReviewComponent} />
                        <Route path = "/test" component={TestApp}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default AppRouter;
