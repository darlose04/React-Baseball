import React, { Component } from "react";
import { Link } from "react-router-dom";

class YearSelect extends Component {
  render() {
    return (
      <div className='dropdown mt-3 mb-3'>
        <button
          className='btn btn-primary dropdown-toggle'
          type='button'
          data-toggle='dropdown'
        >
          Select Year
        </button>
        <div className='dropdown-menu'>
          <Link to='/hitters/2014' className='dropdown-item'>
            2014
          </Link>
          <Link to='/hitters/2015' className='dropdown-item'>
            2015
          </Link>
          <Link to='/hitters/2016' className='dropdown-item'>
            2016
          </Link>
          <Link to='/hitters/2017' className='dropdown-item'>
            2017
          </Link>
          <Link to='/hitters/2018' className='dropdown-item'>
            2018
          </Link>
        </div>
      </div>
    );
  }
}

export default YearSelect;
