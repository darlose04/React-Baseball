import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import StatsContext from "../../context/stats/statsContext";

const YearSelect = () => {
  const statsContext = useContext(StatsContext);

  const [year, setYear] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    statsContext.getYear(year);
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
      {statsContext.hitters.length > 0 && (
        <button
          className='d-inline btn btn-outline-dark ml-2'
          onClick={statsContext.clearYear}
        >
          Clear
        </button>
      )}
    </div>
  );
};
export default YearSelect;
