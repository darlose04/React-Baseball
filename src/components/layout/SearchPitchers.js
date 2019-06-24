import React, { useState, useContext } from "react";
import StatsContext from "../../context/stats/statsContext";

const PitcherSearch = () => {
  const statsContext = useContext(StatsContext);

  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    statsContext.searchPitchers(text);

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
      {statsContext.searchPitchers.length > 0 && (
        <button
          className='btn btn-block btn-light'
          onClick={statsContext.clearPlayers}
        >
          Clear Player
        </button>
      )}
    </div>
  );
};

export default PitcherSearch;
