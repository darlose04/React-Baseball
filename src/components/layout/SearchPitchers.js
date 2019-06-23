import React, { useState } from "react";
import PropTypes from "prop-types";

const PitcherSearch = ({ searchPitchers, clearPlayers, showClear }) => {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    searchPitchers(text);

    setText("");
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div className='my-5'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            name='text'
            placeholder='Search Players...'
            value={text}
            onChange={onChange}
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
};

PitcherSearch.propTypes = {
  searchPitchers: PropTypes.func.isRequired,
  clearPlayers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};

export default PitcherSearch;
