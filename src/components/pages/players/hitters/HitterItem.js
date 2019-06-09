// This will be a table that has the stats from the api. The name will link to a player profile that has year by year stats.
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HitterItem = ({
  hitter: {
    player_id,
    name,
    team,
    games,
    plate_appearances,
    homeruns,
    runs,
    rbi,
    sb,
    bb_perc,
    k_perc,
    iso,
    babip,
    avg,
    obp,
    slg,
    ops,
    wOBA,
    wRC_plus,
    bsr,
    off,
    def,
    war
  }
}) => {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Games</th>
            <th>PA</th>
            <th>Runs</th>
            <th>Homeruns</th>
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
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>{name}</td>
            <td>{team}</td>
            <td>{games}</td>
            <td>{plate_appearances}</td>
            <td>{runs}</td>
            <td>{homeruns}</td>
            <td>{rbi}</td>
            <td>{sb}</td>
            <td>{bb_perc}</td>
            <td>{k_perc}</td>
            <td>{iso}</td>
            <td>{babip}</td>
            <td>{avg}</td>
            <td>{obp}</td>
            <td>{slg}</td>
            <td>{ops}</td>
            <td>{wOBA}</td>
            <td>{wRC_plus}</td>
            <td>{bsr}</td>
            <td>{off}</td>
            <td>{def}</td>
            <td>{war}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HitterItem;
