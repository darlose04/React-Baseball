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
    // hitters2014: [],
    // hitters2015: [],
    // hitters2016: [],
    // hitters2017: [],
    // hitters2018: [],
    loading: false
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res14 = await axios.get("http://localhost:4000/api/batting/2014");
  //   const res15 = await axios.get("http://localhost:4000/api/batting/2015");
  //   const res16 = await axios.get("http://localhost:4000/api/batting/2016");
  //   const res17 = await axios.get("http://localhost:4000/api/batting/2017");
  //   const res18 = await axios.get("http://localhost:4000/api/batting/2018");

  //   this.setState({
  //     hitters2014: res14.data,
  //     hitters2015: res15.data,
  //     hitters2016: res16.data,
  //     hitters2017: res17.data,
  //     hitters2018: res18.data,
  //     loading: false
  //   });
  // }

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
                      // hitters2014={this.state.hitters2014}
                      // hitters2015={this.state.hitters2015}
                      // hitters2016={this.state.hitters2016}
                      // hitters2017={this.state.hitters2017}
                      // hitters2018={this.state.hitters2018}
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
