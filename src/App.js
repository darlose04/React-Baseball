import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/pages/Home";
import About from "./components/pages/About";

import Hitters from "./components/pages/hitters/Hitters";
import YearSelect from "./components/layout/YearSelect";

// import "./App.css";

class App extends Component {
  state = {
    hitters: [],
    loading: false
  };

  getYear = async year => {
    this.setState({ loading: true });
    const res = await axios.get(`http://localhost:4000/api/batting/${year}`);
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
              <Route
                exact
                path='/hitters'
                render={props => (
                  <Fragment>
                    <YearSelect getYear={this.getYear} />
                    <Hitters
                      loading={this.state.loading}
                      hitters={this.state.hitters}
                    />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
