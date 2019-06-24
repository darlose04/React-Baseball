import React, { useContext } from "react";
// import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// import BootstrapTable from "react-bootstrap-table-next";

import PitcherItem from "./PitcherItem";
import Spinner from "../../layout/Spinner";
import StatsContext from "../../../context/stats/statsContext";

const Pitchers = () => {
  const statsContext = useContext(StatsContext);

  const { pitchers, loading } = statsContext;

  if (pitchers.length === 0) {
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
              <th>Wins</th>
              <th>Losses</th>
              <th>Saves</th>
              <th>Games</th>
              <th>Starts</th>
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

          {pitchers.map(pitcher => (
            <PitcherItem key={pitcher.player_id} pitcher={pitcher} />
          ))}
        </table>
      </div>
    );
  }
};

export default Pitchers;
