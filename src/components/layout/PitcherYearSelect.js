import React, { useState } from "react";
import PropTypes from "prop-types";

const PitcherYearSelect = ({ getPitcherYear, clearYear, showTableClear }) => {
  const [year, setYear] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    getPitcherYear(year);
  };

  const onChange = e => {
    setYear(e.target.value);
  };

  return (
    <div className='my-3'>
      <form onSubmit={onSubmit} className='d-inline form-inline ml-auto'>
        <input
          className='form-control mr-2'
          type='text'
          name='year'
          placeholder='Input Year (2014-2018)'
          value={year}
          onChange={onChange}
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
};

PitcherYearSelect.propTypes = {
  getPitcherYear: PropTypes.func.isRequired,
  clearYear: PropTypes.func.isRequired,
  showTableClear: PropTypes.bool.isRequired
};

export default PitcherYearSelect;
