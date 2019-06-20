import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/pages/Home";
import About from "./components/pages/About";

import Hitters from "./components/pages/hitters/Hitters";
import HitterSearch from "./components/pages/searches/HitterSearch";
import YearSelect from "./components/layout/YearSelect";
import Search from "./components/layout/Search";

// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

// import "./App.css";

class App extends Component {
  state = {
    hitters: [],
    hitterSearch: [],
    pitcherSearch: [],
    loading: false
  };

  getYear = async year => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://baseballapi.herokuapp.com/api/batting/${year}`
    );
    this.setState({ hitters: res.data, loading: false });
  };

  searchHitters = async player => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://baseballapi.herokuapp.com/api/batting/players/${player}`
    );

    this.setState({ hitterSearch: res.data, loading: false });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search searchHitters={this.searchHitters} />
                    <HitterSearch
                      loading={this.state.loading}
                      hitterSearch={this.state.hitterSearch}
                    />
                  </Fragment>
                )}
              />
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
