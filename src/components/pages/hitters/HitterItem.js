import React, { Component } from "react";

class HitterItem extends Component {
  state = {
    hitters: [
      {
        player_id: 393,
        name: "Victor Martinez",
        team: "Tigers",
        games: 133,
        plate_appearances: 508,
        homeruns: 9,
        runs: 32,
        rbi: 54,
        sb: 0,
        bb_perc: "6.3 %",
        k_perc: "9.6 %",
        iso: "0.103",
        babip: "0.260",
        avg: "0.251",
        obp: "0.297",
        slg: "0.353",
        ops: "0.651",
        wOBA: "0.281",
        wRC_plus: 75,
        bsr: "-4.1",
        off: "-19.5",
        def: "-13.3",
        war: "-1.6"
      },
      {
        player_id: 639,
        name: "Adrian Beltre",
        team: "Rangers",
        games: 119,
        plate_appearances: 481,
        homeruns: 15,
        runs: 49,
        rbi: 65,
        sb: 1,
        bb_perc: "7.1 %",
        k_perc: "20.0 %",
        iso: "0.162",
        babip: "0.312",
        avg: "0.273",
        obp: "0.328",
        slg: "0.434",
        ops: "0.763",
        wOBA: "0.327",
        wRC_plus: 99,
        bsr: "-2.2",
        off: "-3.0",
        def: "-1.6",
        war: "1.2"
      },
      {
        player_id: 785,
        name: "Todd Frazier",
        team: "Mets",
        games: 115,
        plate_appearances: 472,
        homeruns: 18,
        runs: 54,
        rbi: 59,
        sb: 9,
        bb_perc: "10.2 %",
        k_perc: "23.7 %",
        iso: "0.176",
        babip: "0.241",
        avg: "0.213",
        obp: "0.303",
        slg: "0.390",
        ops: "0.693",
        wOBA: "0.302",
        wRC_plus: 93,
        bsr: "-0.3",
        off: "-4.4",
        def: "3.9",
        war: "1.5"
      },
      {
        player_id: 1159,
        name: "Andrew Romine",
        team: "Mariners",
        games: 75,
        plate_appearances: 131,
        homeruns: 0,
        runs: 15,
        rbi: 2,
        sb: 1,
        bb_perc: "5.3 %",
        k_perc: "29.8 %",
        iso: "0.034",
        babip: "0.313",
        avg: "0.210",
        obp: "0.260",
        slg: "0.244",
        ops: "0.504",
        wOBA: "0.228",
        wRC_plus: 44,
        bsr: "1.7",
        off: "-7.1",
        def: "3.5",
        war: "0.1"
      }
    ]
  };

  render() {
    let i = 1;
    const {
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
    } = this.state;

    return (
      <div className='container'>
        <table className='table' style={{ fontSize: "12px" }}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Team</th>
              <th>Games</th>
              <th>PA</th>
              <th>Runs</th>
              <th>HR</th>
              <th>RBI</th>
              <th>SB</th>
              <th>bb_perc</th>
              <th>k_perc</th>
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
            {this.state.hitters.map(hitter => (
              <tr>
                <th>{i++}</th>
                <td>{hitter.name}</td>
                <td>{hitter.team}</td>
                <td>{hitter.games}</td>
                <td>{hitter.plate_appearances}</td>
                <td>{hitter.runs}</td>
                <td>{hitter.homeruns}</td>
                <td>{hitter.rbi}</td>
                <td>{hitter.sb}</td>
                <td>{hitter.bb_perc}</td>
                <td>{hitter.k_perc}</td>
                <td>{hitter.iso}</td>
                <td>{hitter.babip}</td>
                <td>{hitter.avg}</td>
                <td>{hitter.obp}</td>
                <td>{hitter.slg}</td>
                <td>{hitter.ops}</td>
                <td>{hitter.wOBA}</td>
                <td>{hitter.wRC_plus}</td>
                <td>{hitter.bsr}</td>
                <td>{hitter.off}</td>
                <td>{hitter.def}</td>
                <td>{hitter.war}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HitterItem;
