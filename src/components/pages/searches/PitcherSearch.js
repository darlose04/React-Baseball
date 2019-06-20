import React from "react";

import PitcherSearchItem from "./PitcherSearchItem";
import Spinner from "../../layout/Spinner";
import PropTypes from "prop-types";

const PitcherSearch = ({ pitcherSearch, loading }) => {
  if (pitcherSearch.length === 0) {
    return <div />;
  } else if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <h2>{pitcherSearch[0].name}</h2>
        <table
          className='table table-sm table-striped table-bordered table-hover table-responsive-sm'
          style={{ fontSize: "12px" }}
        >
          <thead className='thead-dark'>
            <tr>
              <th>Year</th>
              <th>Team</th>
              <th>W</th>
              <th>L</th>
              <th>SV</th>
              <th>G</th>
              <th>GS</th>
              <th>IP</th>
              <th>K/9</th>
              <th>BB/9</th>
              <th>HR/9</th>
              <th>BABIP</th>
              <th>LOB %</th>
              <th>GB %</th>
              <th>HR/FB</th>
              <th>ERA</th>
              <th>WHIP</th>
              <th>FIP</th>
              <th>xFIP</th>
              <th>WAR</th>
            </tr>
          </thead>

          {pitcherSearch.map(pitcher => (
            <PitcherSearchItem key={pitcher.player_id} hitter={pitcher} />
          ))}
        </table>
      </div>
    );
  }
};

PitcherSearch.propTypes = {
  pitcherSearch: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default PitcherSearch;
