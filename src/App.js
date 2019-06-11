import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/pages/Home";
import About from "./components/pages/About";

import Hitters from "./components/pages/hitters/Hitters";

// import "./App.css";

class App extends Component {
  state = {
    hitters2014: [],
    hitters2015: [],
    hitters2015: [],
    hitters2016: [],
    hitters2018: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("http://localhost:4000/api/batting/2014");

    this.setState({ hitters2014: res.data, loading: false });
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("http://localhost:4000/api/batting/2015");

    this.setState({ hitters2015: res.data, loading: false });
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("http://localhost:4000/api/batting/2016");

    this.setState({ hitters2016: res.data, loading: false });
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("http://localhost:4000/api/batting/2017");

    this.setState({ hitters2017: res.data, loading: false });
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("http://localhost:4000/api/batting/2018");

    this.setState({ hitters2018: res.data, loading: false });
  }

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
                  <Hitters
                    loading={this.state.loading}
                    hitters2014={this.state.hitters2014}
                    hitters2015={this.state.hitters2015}
                    hitters2016={this.state.hitters2016}
                    hitters2017={this.state.hitters2017}
                    hitters2018={this.state.hitters2018}
                  />
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
