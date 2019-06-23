import React, { useState, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/pages/Home";
import Teams from "./components/pages/teams/Teams";
import Standings from "./components/pages/standings/Standings";
import About from "./components/pages/About";

import PitcherTitle from "./components/layout/titles/PitcherTitle";
import HitterTitle from "./components/layout/titles/HitterTitle";

import Hitters from "./components/pages/hitters/Hitters";
import HitterSearch from "./components/pages/searches/HitterSearch";
import YearSelect from "./components/layout/YearSelect";
import Pitchers from "./components/pages/pitchers/Pitchers";
import PitcherSearch from "./components/pages/searches/PitcherSearch";
import PitcherYearSelect from "./components/layout/PitcherYearSelect";

import Search from "./components/layout/Search";
import SearchPitchers from "./components/layout/SearchPitchers";

// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

// import "./App.css";

const App = () => {
  const [hitters, setHitters] = useState([]);
  const [hitterSearch, setHitterSearch] = useState([]);
  const [pitchers, setPitchers] = useState([]);
  const [pitcherSearch, setPitcherSearch] = useState([]);
  const [loading, setLoading] = useState(false);


  getYear = async year => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://baseballapi.herokuapp.com/api/batting/${year}`
    );
    this.setState({ hitters: res.data, loading: false });
  };

  getPitcherYear = async year => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://baseballapi.herokuapp.com/api/pitching/pitchers/${year}`
    );
    this.setState({ pitchers: res.data, loading: false });
  };

  searchHitters = async hitter => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://baseballapi.herokuapp.com/api/batting/players/${hitter}`
    );
    this.setState({ hitterSearch: res.data, loading: false });
  };

  searchPitchers = async pitcher => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://baseballapi.herokuapp.com/api/pitching/pitchers/players/${pitcher}`
    );
    this.setState({ pitcherSearch: res.data, loading: false });
  };

  clearPlayers = () => {
    this.setState({ hitterSearch: [], pitcherSearch: [], loading: false });
  };

  clearYear = () => {
    this.setState({ hitters: [], pitchers: [], loading: false });
  };

  showHitterFields = () => {
    if (
      this.state.hitterSearch.length === 0 &&
      this.state.hitters.length === 0
    ) {
      return (
        <Route
          exact
          path='/hitters'
          render={props => (
            <Fragment>
              <HitterTitle />
              <Search
                searchHitters={this.searchHitters}
                clearPlayers={this.clearPlayers}
                showClear={this.state.hitterSearch.length > 0 ? true : false}
              />
              <HitterSearch
                loading={this.state.loading}
                hitterSearch={this.state.hitterSearch}
              />
              <YearSelect
                getYear={this.getYear}
                clearYear={this.clearYear}
                showTableClear={this.state.hitters > 0 ? true : false}
              />
              <Hitters
                loading={this.state.loading}
                hitters={this.state.hitters}
              />
            </Fragment>
          )}
        />
      );
    } else if (this.state.hitterSearch.length > 0) {
      return (
        <Route
          exact
          path='/hitters'
          render={props => (
            <Fragment>
              <HitterTitle />
              <Search
                searchHitters={this.searchHitters}
                clearPlayers={this.clearPlayers}
                showClear={this.state.hitterSearch.length > 0 ? true : false}
              />
              <HitterSearch
                loading={this.state.loading}
                hitterSearch={this.state.hitterSearch}
              />
            </Fragment>
          )}
        />
      );
    } else if (this.state.hitters.length > 0) {
      return (
        <Route
          exact
          path='/hitters'
          render={props => (
            <Fragment>
              <HitterTitle />
              <YearSelect
                getYear={this.getYear}
                clearYear={this.clearYear}
                showTableClear={this.state.hitters.length > 0 ? true : false}
              />
              <Hitters
                loading={this.state.loading}
                hitters={this.state.hitters}
              />
            </Fragment>
          )}
        />
      );
    }
  };

  showPitcherFields = () => {
    if (
      this.state.pitcherSearch.length === 0 &&
      this.state.pitchers.length === 0
    ) {
      return (
        <Route
          exact
          path='/pitchers'
          render={props => (
            <Fragment>
              <PitcherTitle />
              <SearchPitchers
                searchPitchers={this.searchPitchers}
                clearPlayers={this.clearPlayers}
                showClear={this.state.pitcherSearch.length > 0 ? true : false}
              />
              <PitcherSearch
                loading={this.state.loading}
                pitcherSearch={this.state.pitcherSearch}
              />
              <PitcherYearSelect
                getPitcherYear={this.getPitcherYear}
                clearYear={this.clearYear}
                showTableClear={this.state.pitchers > 0 ? true : false}
              />
              <Pitchers
                loading={this.state.loading}
                pitchers={this.state.pitchers}
              />
            </Fragment>
          )}
        />
      );
    } else if (this.state.pitcherSearch.length > 0) {
      return (
        <Route
          exact
          path='/pitchers'
          render={props => (
            <Fragment>
              <PitcherTitle />
              <SearchPitchers
                searchPitchers={this.searchPitchers}
                clearPlayers={this.clearPlayers}
                showClear={this.state.pitcherSearch.length > 0 ? true : false}
              />
              <PitcherSearch
                loading={this.state.loading}
                pitcherSearch={this.state.pitcherSearch}
              />
            </Fragment>
          )}
        />
      );
    } else if (this.state.pitchers.length > 0) {
      return (
        <Route
          exact
          path='/pitchers'
          render={props => (
            <Fragment>
              <PitcherTitle />
              <PitcherYearSelect
                getPitcherYear={this.getPitcherYear}
                clearYear={this.clearYear}
                showTableClear={this.state.pitchers.length > 0 ? true : false}
              />
              <Pitchers
                loading={this.state.loading}
                pitchers={this.state.pitchers}
              />
            </Fragment>
          )}
        />
      );
    }
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/teams' component={Teams} />
              <Route exact path='/standings' component={Standings} />
              <Route exact path='/about' component={About} />
              {this.showHitterFields()}
              {this.showPitcherFields()}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
