import { combineReducers } from "redux";
import { moviesReducer, selectedMoviesReducer } from "./movieReducer";

const rootReducers = combineReducers({
  allMovies: moviesReducer,
  movie: selectedMoviesReducer,
});

export default rootReducers;
