import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import HitterItem from "./HitterItem";
import Spinner from "../../layout/Spinner";
import PropTypes from "prop-types";

const Hitters = ({ hitters, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    /*
    return (
      <div>
        <table
          className='table table-sm table-striped table-bordered table-hover table-responsive-sm'
          style={{ fontSize: "12px" }}
        >
          <thead className='thead-dark'>
            <tr>
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
          {hitters.map(hitter => (
            <HitterItem key={hitter.player_id} hitter={hitter} />
          ))}
        </table>
      </div>
    );
    */
    return (
      <BootstrapTable data={hitters} striped hover>
        <TableHeaderColumn isKey dataField='player_id'>
          Player ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='team'>Team</TableHeaderColumn>
        <TableHeaderColumn dataField='games'>Games</TableHeaderColumn>
        <TableHeaderColumn dataField='plate_appearances'>PA</TableHeaderColumn>
        <TableHeaderColumn dataField='runs'>Runs</TableHeaderColumn>
        <TableHeaderColumn dataField='homeruns'>HR</TableHeaderColumn>
        <TableHeaderColumn dataField='rbi'>RBI</TableHeaderColumn>
        <TableHeaderColumn dataField='sb'>SB</TableHeaderColumn>
        <TableHeaderColumn dataField='bb_perc'>BB %</TableHeaderColumn>
        <TableHeaderColumn dataField='k_perc'>K %</TableHeaderColumn>
        <TableHeaderColumn dataField='iso'>ISO</TableHeaderColumn>
        <TableHeaderColumn dataField='babip'>BABIP</TableHeaderColumn>
        <TableHeaderColumn dataField='avg'>AVG</TableHeaderColumn>
        <TableHeaderColumn dataField='obp'>OBP</TableHeaderColumn>
        <TableHeaderColumn dataField='slg'>SLG</TableHeaderColumn>
        <TableHeaderColumn dataField='ops'>OPS</TableHeaderColumn>
        <TableHeaderColumn dataField='wOBA'>wOBA</TableHeaderColumn>
        <TableHeaderColumn dataField='wRC_plus'>wRC+</TableHeaderColumn>
        <TableHeaderColumn dataField='bsr'>BsR</TableHeaderColumn>
        <TableHeaderColumn dataField='pff'>Off</TableHeaderColumn>
        <TableHeaderColumn dataField='def'>Def</TableHeaderColumn>
        <TableHeaderColumn dataField='war'>WAR</TableHeaderColumn>
      </BootstrapTable>
    );
  }
};

Hitters.propTypes = {
  hitters: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Hitters;
