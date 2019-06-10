import React, { Component } from "react";

class HitterItem extends Component {
  render() {
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
    } = this.props.hitter;

    return (
      <tbody>
        <tr>
          {/* <th>{i++}</th> */}
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
    );
  }
}

export default HitterItem;
