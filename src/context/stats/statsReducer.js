import {
  SEARCH_HITTERS,
  GET_HITTER_YEAR,
  SEARCH_PITCHERS,
  GET_PITCHER_YEAR,
  CLEAR_PLAYERS,
  CLEAR_YEAR,
  SET_LOADING
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_HITTERS:
      return {
        ...state,
        hitterSearch: action.payload,
        loading: false
      };
    case GET_HITTER_YEAR:
      return {
        ...state,
        hitters: action.payload,
        loading: false
      };
    case SEARCH_PITCHERS:
      return {
        ...state,
        pitcherSearch: action.payload,
        laoding: false
      };
    case GET_PITCHER_YEAR:
      return {
        ...state,
        pitchers: action.payload,
        loading: false
      };
    case CLEAR_PLAYERS:
      return {
        ...state,
        hitterSearch: [],
        pitcherSearch: [],
        loading: false
      };
    case CLEAR_YEAR:
      return {
        ...state,
        hitters: [],
        pitchers: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
