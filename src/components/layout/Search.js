import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ""
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
          <input type='submit' value='Search' className='btn btn-dark' />
        </form>
      </div>
    );
  }
}

export default Search;
