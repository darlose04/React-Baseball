import React, { Component } from "react";

class HitterItem extends Component {
  state = {
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
  };
  render() {
    return <div>HitterItem</div>;
  }
}

export default HitterItem;
