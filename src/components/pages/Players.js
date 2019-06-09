import React, { Component } from "react";
import { Link } from "react-router-dom";

class Players extends Component {
  render() {
    return (
      <div>
        <h1>Players page</h1>
        <p>
          There will be links to take a user to different stats pages for
          hitters, starters, or relievers
        </p>
        <Link to='/hitters' className='btn btn-dark mr-2'>
          Hitters
        </Link>
        <Link to='/starters' className='btn btn-dark mr-2'>
          Starters
        </Link>
        <Link to='/relievers' className='btn btn-dark'>
          Relievers
        </Link>
      </div>
    );
  }
}

export default Players;
