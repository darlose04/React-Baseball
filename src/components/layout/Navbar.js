import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h2>
          <i className='fas fa-baseball-ball mr-2' />
          Baseball Stats
        </h2>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/teams'>Teams</Link>
          </li>
          <li>
            <Link to='/players'>Players</Link>
          </li>
          <li>
            <Link to='/standings'>Standings</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
