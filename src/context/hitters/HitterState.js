import React, { useReducer } from "react";
import axios from "axios";
import HitterContext from "./hitterContext";
import HitterReducer from "./hitterReducer";
import {
  SEARCH_HITTERS,
  GET_HITTER_YEAR,
  CLEAR_PLAYERS,
  CLEAR_YEAR,
  SET_LOADING
} from "../types";

const HitterState = props => {
  const initialState = {
    hitters: [],
    hitterSearch: [],
    loading: false
  };

  const [state, dispatch] = useReducer(HitterReducer, initialState);

  // Get hitters by year

  // Search hitters by name

  // Clear hitters from name search

  // Clear year

  // Set loading

  return (
    <HitterContext.Provider
      value={{
        hitters: state.hitters,
        hitterSearch: state.hitterSearch,
        loading: state.loading
      }}
    >
      {props.children}
    </HitterContext.Provider>
  );
};

export default HitterState;
