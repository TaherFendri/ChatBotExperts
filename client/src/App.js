import React, { Component } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import SideBar_Right from "./components/layout/SideBar_Right";
import { Login } from './components/Login/Login.js';
import Loginn  from './components/pages/Login';
import Profile from "./components/profile/Index";
import Facial from "./components/FacialRec/facial";
import Forum from "./components/pages/Forum";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          {window.location.pathname !== "/login"
            ? [<Sidebar />, <SideBar_Right />, <Header />]
            : null}
          <Switch>
            <Route exact path="/" component={Forum} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Loginn} />
              <Route exact path="/facial" component={Facial} />
          </Switch>
          {window.location.pathname !== "/login" ? (
            <a class="back-to-top" href="#">
              <img
                src="svg-icons/back-to-top.svg"
                alt="arrow"
                class="back-icon"
              />
            </a>
          ) : null}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
