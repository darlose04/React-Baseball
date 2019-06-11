import React from "react";
import HitterItem from "./HitterItem";
import Spinner from "../../layout/Spinner";
import PropTypes from "prop-types";

const Hitters = ({
  hitters2014,
  hitters2015,
  hitters2016,
  hitters2017,
  hitters2018,
  loading
}) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <table className='table' style={{ fontSize: "12px" }}>
          <thead>
            <tr>
              {/* <th>Rank</th> */}
              <th>Name</th>
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
          {hitters2015.map(hitter => (
            <HitterItem key={hitter.player_id} hitter={hitter} />
          ))}
        </table>
      </div>
    );
  }
};

Hitters.propTypes = {
  hitters2014: PropTypes.array.isRequired,
  hitters2015: PropTypes.array.isRequired,
  hitters2016: PropTypes.array.isRequired,
  hitters2017: PropTypes.array.isRequired,
  hitters2018: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Hitters;
