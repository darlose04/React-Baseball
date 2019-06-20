import React, { Component } from "react";
import PropTypes from "prop-types";

class YearSelect extends Component {
  state = {
    year: ""
  };

  static propTypes = {
    getYear: PropTypes.func.isRequired,
    clearYear: PropTypes.func.isRequired,
    showTableClear: PropTypes.bool.isRequired
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
    const { showTableClear, clearYear } = this.props;
    return (
      <div className='my-3'>
        <form onSubmit={this.onSubmit} className='d-inline form-inline ml-auto'>
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
        {showTableClear && (
          <button
            className='d-inline btn btn-outline-dark ml-2'
            onClick={clearYear}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default YearSelect;
