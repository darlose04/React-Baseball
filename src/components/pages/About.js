import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>App to display MLB Statistics</p>
      <p>Version: 1.0.0</p>
      <a href='https://baseballapi.herokuapp.com/'>
        Statistics pulled from this API
      </a>
    </Fragment>
  );
};

export default About;
