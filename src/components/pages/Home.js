import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2 className='mt-2'>Site Features:</h2>
      <div className='list-group'>
        <Link to='/teams' className='list-group-item list-group-item-action'>
          <div className='d-flex w-100 justify-content-between'>
            <h3 className='mb-1'>Teams</h3>
          </div>
          <p className='mb-1'>
            Features team statistical information. Search teams by name or by
            year. Displays team totals as well as players stats.
          </p>
          <small>Not implemented yet.</small>
        </Link>
        <Link to='/hitters' className='list-group-item list-group-item-action'>
          <div className='d-flex w-100 justify-content-between'>
            <h3 className='mb-1'>Hitters</h3>
          </div>
          <p className='mb-1'>
            Features hitter statistics. Search hitters by name or by year.
            Searching by name returns the individual's stats for every year that
            is accounted for in the database. Searching by year returns the
            statistics of all hitters for that season.
          </p>
        </Link>
        <Link to='/pitchers' className='list-group-item list-group-item-action'>
          <div className='d-flex w-100 justify-content-between'>
            <h3 className='mb-1'>Pitchers</h3>
          </div>
          <p className='mb-1'>
            Features pitcher statistics. Search pitchers by name or by year.
            Searching by name returns the individual's stats for every year that
            is accounted for in the database. Searching by year returns the
            statistics of all pitchers for that season.
          </p>
          <small className='text-muted'>Includes starters and relievers.</small>
        </Link>
        <Link
          to='/standings'
          className='list-group-item list-group-item-action'
        >
          <div className='d-flex w-100 justify-content-between'>
            <h3 className='mb-1'>Standings</h3>
          </div>
          <p className='mb-1'>
            Features division standings at the end of the regular season, as
            well as playoff series.
          </p>
          <small className='text-muted'>Not implemented yet.</small>
        </Link>
      </div>
    </div>
  );
};

export default Home;
