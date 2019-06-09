// this will be the page that maps through and displays a hitter item for each hitter. It will be a table
import React from "react";
import Spinner from "../../../layout/Spinner";
import HitterItem from "./HitterItem";
import PropTypes from "prop-types";

const Hitters = ({ hitters, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {hitters.map(hitter => {
          <HitterItem key={hitter.player_id} hitter={hitter} />;
        })}
      </div>
    );
  }
};

Hitters.propTypes = {
  hitters: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Hitters;
