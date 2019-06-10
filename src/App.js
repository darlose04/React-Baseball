import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/pages/Home";
import About from "./components/pages/About";

import HitterItem from "./components/pages/hitters/HitterItem";

// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <HitterItem />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
