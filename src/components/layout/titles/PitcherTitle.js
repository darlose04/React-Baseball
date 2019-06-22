import React, { Component } from "react";

class PitcherTitle extends Component {
  render() {
    return (
      <div>
        <h1>
          Pitchers
          <small className='text-muted'>
            Search pitchers by name or by year
          </small>
        </h1>
      </div>
    );
  }
}

export default PitcherTitle;
