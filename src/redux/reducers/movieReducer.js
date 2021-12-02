import { ActionTypes } from "../constants/action-types";
const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIES:
      return { ...state, movies: payload };
    default:
      return state;
  }
};

export const selectedMoviesReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_MOVIE:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_MOVIE:
      return {};
    default:
      return state;
  }
};
