import React, { Component } from "react";
import PropTypes from "prop-types";

class YearSelect extends Component {
  state = {
    year: ""
  };

  static propTypes = {
    getYear: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.getYear(this.state.year);
    // this.setState({ year: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form-inline ml-auto my-3'>
          <input
            className='form-control mr-2'
            type='text'
            name='year'
            placeholder='Input Year (2014-2018)'
            value={this.state.year}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Submit'
            className='btn btn-outline-primary'
          />
        </form>
      </div>
    );
  }
}

export default YearSelect;
