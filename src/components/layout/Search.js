import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchHitters: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchHitters(this.state.text);
    this.setState({ text: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='my-5'>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              name='text'
              placeholder='Search Players...'
              value={this.state.text}
              onChange={this.onChange}
            />
          </div>

          <input
            type='submit'
            value='Search Hitters'
            className='btn btn-primary btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
