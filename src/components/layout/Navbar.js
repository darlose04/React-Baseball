import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  // state = {
  //   hitters: [],
  //   loading: false
  // };

  // search baseball players
  // searchPlayers = async text => {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://baseballapi.herokuapp.com/api/batting/2014/players/${text}`
  //   );

  //   this.setState({ hitters: res.data.items, loading: false });
  // };

  render() {
    return (
      <nav
        className='navbar navbar-expand-sm navbar-dark bg-primary'
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
            <li className='nav-item dropdown'>
              <a
                href='!#'
                className='nav-link dropdown-toggle text-light'
                data-toggle='dropdown'
              >
                Players
              </a>
              <div className='dropdown-menu'>
                <Link to='/hitters' className='dropdown-item'>
                  Hitters
                </Link>
                <Link to='/pitchers' className='dropdown-item'>
                  Pitchers
                </Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-light' to='/standings'>
                Standings
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                href='!#'
                className='nav-link dropdown-toggle text-light'
                data-toggle='dropdown'
              >
                Links
              </a>
              <div className='dropdown-menu'>
                <a
                  href='https://www.reddit.com/r/baseball/'
                  className='dropdown-item'
                >
                  r/baseball
                </a>
                <a href='https://www.fangraphs.com' className='dropdown-item'>
                  Fangraphs
                </a>
                <a
                  href='https://www.baseball-reference.com/'
                  className='dropdown-item'
                >
                  Baseball Reference
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-light mr-2' to='/about'>
                About
              </Link>
            </li>
            {/* <Search searchPlayers={this.searchPlayers} /> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
