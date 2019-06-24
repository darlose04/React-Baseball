import React, { useContext } from "react";
// import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// import BootstrapTable from "react-bootstrap-table-next";

import HitterItem from "./HitterItem";
import Spinner from "../../layout/Spinner";

import StatsContext from "../../../context/stats/statsContext";

const Hitters = () => {
  const statsContext = useContext(StatsContext);

  const { loading, hitters } = statsContext;

  if (hitters.length === 0) {
    return <div />;
  } else if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <table
          className='table table-sm table-striped table-bordered table-hover table-responsive-sm'
          style={{ fontSize: "12px" }}
        >
          <thead className='thead-dark'>
            <tr>
              <th>Name</th>
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

          {hitters.map(hitter => (
            <HitterItem key={hitter.player_id} hitter={hitter} />
          ))}
        </table>
      </div>
    );
  }
};

export default Hitters;
