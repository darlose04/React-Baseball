import React, { useContext } from "react";

import HitterSearchItem from "./HitterSearchItem";
import Spinner from "../../layout/Spinner";
import PropTypes from "prop-types";
import StatsContext from "../../../context/stats/statsContext";

const HitterSearch = ({ hitterSearch, loading }) => {
  const statsContext = useContext(StatsContext);

  if (hitterSearch.length === 0) {
    return <div />;
  } else if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <h2>{hitterSearch[0].name}</h2>
        <table
          className='table table-sm table-striped table-bordered table-hover table-responsive-sm'
          style={{ fontSize: "12px" }}
        >
          <thead className='thead-dark'>
            <tr>
              <th>Year</th>
              <th>Team</th>
              <th>Games</th>
              <th>PA</th>
              <th>Runs</th>
              <th>HR</th>
              <th>RBI</th>
              <th>SB</th>
              <th>BB%</th>
              <th>K%</th>
              <th>ISO</th>
              <th>BABIP</th>
              <th>AVG</th>
              <th>OBP</th>
              <th>SLG</th>
              <th>OPS</th>
              <th>wOBA</th>
              <th>wRC+</th>
              <th>BsR</th>
              <th>Off</th>
              <th>Def</th>
              <th>WAR</th>
            </tr>
          </thead>

          {hitterSearch.map(hitter => (
            <HitterSearchItem key={hitter.player_id} hitter={hitter} />
          ))}
        </table>
      </div>
    );
  }
};

HitterSearch.propTypes = {
  hitterSearch: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default HitterSearch;
