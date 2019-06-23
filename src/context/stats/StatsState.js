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
  const searchHitters = async hitter => {
    setLoading();
    const res = await axios.get(
      `https://baseballapi.herokuapp.com/api/batting/players/${hitter}`
    );
    dispatch({
      type: SEARCH_HITTERS,
      payload: res.data
    });
  };

  // Clear hitters from name search

  // Clear year

  // Set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

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
