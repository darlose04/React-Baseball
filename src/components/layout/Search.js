import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <form className='form-inline ml-auto'>
          <input
            className='form-control mr-2'
            type='text'
            name='text'
            placeholder='Search Players...'
          />
          <input type='submit' value='Search' className='btn btn-dark' />
        </form>
      </div>
    );
  }
}

export default Search;
