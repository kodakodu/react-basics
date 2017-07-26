//console.log("It works !");

import React from "react";
import { render } from "react-dom";
//import "node_modules/materialize-css/dist/css/materialize.css";
//import "./materialize.min.css";
//import { Button, Icon } from "react-materialize"

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render(){
        return(
          <div className="container">
                <div className="row">
                  <div >
                    <Header/>
                  </div>
                </div>
                <div className="row">
                  <div >
                    <Home/>
                  </div>
                </div>
          </div>
        );   
    }
}

render(<App/>, window.document.getElementById("app"));