import React, { Component } from "react";
import HitterItem from "../../pages/hitters/HitterItem";

class HitterTitle extends Component {
  render() {
    return (
      <div>
        <h1>
          Hitters
          <small className='text-muted'>
            Search hitters by name or by year
          </small>
        </h1>
      </div>
    );
  }
}

export default HitterTitle;
