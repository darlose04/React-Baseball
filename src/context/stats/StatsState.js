import React, { useReducer, useEffect } from "react";
import axios from "axios";
import StatsContext from "./statsContext";
import StatsReducer from "./statsReducer";
import {
  SEARCH_HITTERS,
  GET_HITTER_YEAR,
  SEARCH_PITCHERS,
  GET_PITCHER_YEAR,
  CLEAR_PLAYERS,
  CLEAR_YEAR,
  SET_LOADING
} from "../types";

const StatsState = props => {
  const initialState = {
    hitters: [],
    hitterSearch: [],
    pitchers: [],
    pitcherSearch: [],
    loading: false
  };

  const [state, dispatch] = useReducer(StatsReducer, initialState);

  // Get hitters by year
  const getYear = async year => {
    setLoading();
    const res = await axios.get(
      `https://baseballapi.herokuapp.com/api/batting/${year}`
    );
    dispatch({
      type: GET_HITTER_YEAR,
      payload: res.data
    });
  };

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

  // Get pitchers by year
  const getPitcherYear = async year => {
    setLoading();
    const res = await axios.get(
      `https://baseballapi.herokuapp.com/api/pitching/pitchers/${year}`
    );
    dispatch({
      type: GET_PITCHER_YEAR,
      payload: res.data
    });
  };

  // Get pitchers by name
  const searchPitchers = async pitcher => {
    setLoading(true);
    const res = await axios.get(
      `https://baseballapi.herokuapp.com/api/pitching/pitchers/players/${pitcher}`
    );
    dispatch({
      type: SEARCH_PITCHERS,
      payload: res.data
    });
  };

  // Clear players
  const clearPlayers = () => {
    dispatch({ type: CLEAR_PLAYERS });
  };

  // Clear year
  const clearYear = () => {
    dispatch({ type: CLEAR_YEAR });
  };

  // Set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <StatsContext.Provider
      value={{
        hitters: state.hitters,
        hitterSearch: state.hitterSearch,
        pitchers: state.pitchers,
        pitcherSearch: state.pitcherSearch,
        loading: state.loading,
        searchHitters,
        getYear,
        getPitcherYear,
        searchPitchers,
        clearPlayers,
        clearYear
      }}
    >
      {props.children}
    </StatsContext.Provider>
  );
};

export default StatsState;
