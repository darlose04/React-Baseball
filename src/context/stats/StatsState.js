import React, { useReducer } from "react";
import axios from "axios";
import StatsContext from "./statsContext";
import StatsReducer from "./statsReducer";
import {
  SEARCH_HITTERS,
  GET_HITTER_YEAR,
  CLEAR_PLAYERS,
  CLEAR_YEAR,
  SET_LOADING
} from "../types";

const StatsState = props => {
  const initialState = {
    hitters: [],
    hitterSearch: [],
    loading: false
  };

  const [state, dispatch] = useReducer(StatsReducer, initialState);

  // Get hitters by year

  // Search hitters by name

  // Clear hitters from name search

  // Clear year

  // Set loading

  return (
    <StatsContext.Provider
      value={{
        hitters: state.hitters,
        hitterSearch: state.hitterSearch,
        loading: state.loading
      }}
    >
      {props.children}
    </StatsContext.Provider>
  );
};

export default StatsState;
