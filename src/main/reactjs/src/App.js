import React from "react";
import Container from "@material-ui/core/Container";

import AppRouter from './component/RouterComponent';
import Header from "./component/Header";

function App() {
    return (
        <div>
            <Header/>
        <div>
            <Container>
                <AppRouter/>
            </Container>
        </div>
        </div>
    );
}

export default App;
