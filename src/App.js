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

  const showHitterFields = () => {
    if (hitterSearch.length === 0 && hitters.length === 0) {
      return (
        <Route
          exact
          path='/hitters'
          render={props => (
            <Fragment>
              <HitterTitle />
              <Search />
              <HitterSearch />
              <YearSelect />
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
              <Search />
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
              <YearSelect />
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
              <SearchPitchers />
              <PitcherSearch />
              <PitcherYearSelect />
              <Pitchers />
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
              <SearchPitchers />
              <PitcherSearch />
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
              <PitcherYearSelect />
              <Pitchers />
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
