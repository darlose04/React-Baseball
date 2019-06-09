import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Players from "./components/pages/Players";
import Hitters from "./components/pages/players/hitters/Hitters";

// import "./App.css";

class App extends Component {
  state = {
    hitters: [],
    starters: [],
    relievers: [],
    loading: false
  };

  // get hitters from api
  getHitters = async () => {
    this.setState({ loading: true });

    const res = await axios.get("http://localhost:4000/batting2018");

    this.setState({ hitters: res.data, loading: false });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/players' component={Players} />
              <Route exact path='/hitters' component={Hitters} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
