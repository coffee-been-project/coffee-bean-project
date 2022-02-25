import React from "react";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import RouterComponent from "./component/RouterComponent";

function App() {
    return (
        <div  className="App">
            <Header/>
            <RouterComponent/>
        </div>


    );
}
const style = {
    paddingTop: '100px'
}
export default App;
