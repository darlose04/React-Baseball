import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchPlayers: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchPlayers(this.state.text);
    this.setState({ text: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form-inline ml-auto'>
          <input
            className='form-control mr-2'
            type='text'
            name='text'
            placeholder='Search Players...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-outline-light'
          />
        </form>
      </div>
    );
  }
}

export default Search;
