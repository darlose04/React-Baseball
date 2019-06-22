import React, { Component } from "react";
import PropTypes from "prop-types";

class PitcherSearch extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchPitchers: PropTypes.func.isRequired,
    clearPlayers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchPitchers(this.state.text);

    this.setState({ text: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { clearPlayers, showClear } = this.props;
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
            value='Search Players'
            className='btn btn-primary btn-block mb-2'
          />
        </form>
        {showClear && (
          <button className='btn btn-block btn-light' onClick={clearPlayers}>
            Clear Player
          </button>
        )}
      </div>
    );
  }
}

export default PitcherSearch;
