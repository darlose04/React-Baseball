import React, { Component } from "react";
import HitterItem from "../../pages/hitters/HitterItem";

class HitterTitle extends Component {
  render() {
    return (
      <div>
        <h1 className='mt-2'>Hitters</h1>
        <p className='lead'>Search hitters by name or by year</p>
      </div>
    );
  }
}

export default HitterTitle;
