import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav
        className='navbar navbar-expand-sm navbar-dark bg-primary mb-3'
        style={{ color: "#fff" }}
      >
        <div className='container'>
          <h2>
            <i className='fas fa-baseball-ball mr-2' />
            Baseball Stats
          </h2>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link text-light' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-light' to='/teams'>
                Teams
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-light' to='/players'>
                Players
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-light' to='/standings'>
                Standings
              </Link>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-light'
                href='https://www.reddit.com/r/baseball/'
              >
                r/baseball
              </a>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-light' to='/about'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
