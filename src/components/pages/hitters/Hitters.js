import React, { Component } from "react";
import HitterItem from "./HitterItem";

class Hitters extends Component {
  render() {
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
          {this.props.hitters.map(hitter => (
            <HitterItem key={hitter.player_id} hitter={hitter} />
          ))}
        </table>
      </div>
    );
  }
}

export default Hitters;
