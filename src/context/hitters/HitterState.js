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
};
