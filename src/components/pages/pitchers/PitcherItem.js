import React from "react";

const PitcherItem = props => {
  const {
    name,
    year,
    team,
    wins,
    losses,
    saves,
    games,
    starts,
    innings_pitched,
    k_per_nine,
    bb_per_nine,
    hr_per_nine,
    babip,
    lob_perc,
    gb_perc,
    hr_per_fb,
    era,
    whip,
    fip,
    xfip,
    war
  } = props.pitcher;

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{year}</td>
        <td>{team}</td>
        <td>{wins}</td>
        <td>{losses}</td>
        <td>{saves}</td>
        <td>{games}</td>
        <td>{starts}</td>
        <td>{innings_pitched}</td>
        <td>{k_per_nine}</td>
        <td>{bb_per_nine}</td>
        <td>{hr_per_nine}</td>
        <td>{babip}</td>
        <td>{lob_perc}</td>
        <td>{gb_perc}</td>
        <td>{hr_per_fb}</td>
        <td>{era}</td>
        <td>{whip}</td>
        <td>{fip}</td>
        <td>{xfip}</td>
        <td>{war}</td>
      </tr>
    </tbody>
  );
};

export default PitcherItem;
