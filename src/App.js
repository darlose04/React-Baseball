import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
