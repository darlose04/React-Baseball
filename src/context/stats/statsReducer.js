import {
  SEARCH_HITTERS,
  GET_HITTER_YEAR,
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
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
