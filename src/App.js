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

import StatsState from "./context/stats/StatsState";

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

  const getPitcherYear = async year => {
    setLoading(true);
    const res = await axios.get(
      `https://baseballapi.herokuapp.com/api/pitching/pitchers/${year}`
    );
    setPitchers(res.data);
    setLoading(false);
  };

  const searchPitchers = async pitcher => {
    setLoading(true);
    const res = await axios.get(
      `https://baseballapi.herokuapp.com/api/pitching/pitchers/players/${pitcher}`
    );
    setPitcherSearch(res.data);
    setLoading(false);
  };

  const clearPlayers = () => {
    setHitterSearch([]);
    setPitcherSearch([]);
    setLoading(false);
  };

  const clearYear = () => {
    setHitters([]);
    setPitchers([]);
    setLoading(false);
  };

  const showHitterFields = () => {
    if (hitterSearch.length === 0 && hitters.length === 0) {
      return (
        <Route
          exact
          path='/hitters'
          render={props => (
            <Fragment>
              <HitterTitle />
              <Search
                clearPlayers={clearPlayers}
                showClear={hitterSearch.length > 0 ? true : false}
              />
              <HitterSearch />
              <YearSelect
                clearYear={clearYear}
                showTableClear={hitters > 0 ? true : false}
              />
              <Hitters />
            </Fragment>
          )}
        />
      );
    } else if (hitterSearch.length > 0) {
      return (
        <Route
          exact
          path='/hitters'
          render={props => (
            <Fragment>
              <HitterTitle />
              <Search
                clearPlayers={clearPlayers}
                showClear={hitterSearch.length > 0 ? true : false}
              />
              <HitterSearch />
            </Fragment>
          )}
        />
      );
    } else if (hitters.length > 0) {
      return (
        <Route
          exact
          path='/hitters'
          render={props => (
            <Fragment>
              <HitterTitle />
              <YearSelect
                clearYear={clearYear}
                showTableClear={hitters.length > 0 ? true : false}
              />
              <Hitters />
            </Fragment>
          )}
        />
      );
    }
  };

  const showPitcherFields = () => {
    if (pitcherSearch.length === 0 && pitchers.length === 0) {
      return (
        <Route
          exact
          path='/pitchers'
          render={props => (
            <Fragment>
              <PitcherTitle />
              <SearchPitchers
                searchPitchers={searchPitchers}
                clearPlayers={clearPlayers}
                showClear={pitcherSearch.length > 0 ? true : false}
              />
              <PitcherSearch loading={loading} pitcherSearch={pitcherSearch} />
              <PitcherYearSelect
                getPitcherYear={getPitcherYear}
                clearYear={clearYear}
                showTableClear={pitchers > 0 ? true : false}
              />
              <Pitchers loading={loading} pitchers={pitchers} />
            </Fragment>
          )}
        />
      );
    } else if (pitcherSearch.length > 0) {
      return (
        <Route
          exact
          path='/pitchers'
          render={props => (
            <Fragment>
              <PitcherTitle />
              <SearchPitchers
                searchPitchers={searchPitchers}
                clearPlayers={clearPlayers}
                showClear={pitcherSearch.length > 0 ? true : false}
              />
              <PitcherSearch loading={loading} pitcherSearch={pitcherSearch} />
            </Fragment>
          )}
        />
      );
    } else if (pitchers.length > 0) {
      return (
        <Route
          exact
          path='/pitchers'
          render={props => (
            <Fragment>
              <PitcherTitle />
              <PitcherYearSelect
                getPitcherYear={getPitcherYear}
                clearYear={clearYear}
                showTableClear={pitchers.length > 0 ? true : false}
              />
              <Pitchers loading={loading} pitchers={pitchers} />
            </Fragment>
          )}
        />
      );
    }
  };

  return (
    <StatsState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/teams' component={Teams} />
              <Route exact path='/standings' component={Standings} />
              <Route exact path='/about' component={About} />
              {showHitterFields()}
              {showPitcherFields()}
            </Switch>
          </div>
        </div>
      </Router>
    </StatsState>
  );
};

export default App;
