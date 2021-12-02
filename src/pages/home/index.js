import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMovies } from "../../redux/actions/movieActions";
import Detail from "../movieDetail/filmDetail";

const Homepage = () => {
  const movies = useSelector((state) => state.allMovies.movies);
  const dispatch = useDispatch();

  const BaseUrl = "https://testminiproject.herokuapp.com/api/movie";
  const [config, setConfig] = useState({
    genre: "",
  });
  const genres = [
    "action",
    "adventure",
    "comedy",
    "Science Fiction",
    "Animation",
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMovies = () => {
    axios
      .get(`${BaseUrl}`)
      .then((res) => {
        dispatch(setMovies(res.data));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeGenre = (genre) => {
    setConfig({ ...config, genre: genre });
  };

  const renderMovieCard = (movie) => {
    return (
      <div key={movie.id} className="movie">
        <Link to={`detail/${movie.id}`}>
          <img
            src={`${movie.poster}`}
            alt={movie.title}
            className="movie__img"
          />
        </Link>
        <h2 className="movie__title">{movie.title}</h2>
      </div>
    );
  };

  return (
    <main>
      {movies?.data && (
        <div>
          <h2 className="category-title">Browse by category</h2>
          <div className="genre-container">
            <button
              onClick={() => changeGenre("")}
              className={`button-category ${
                "" === config.genre ? "btn-active" : null
              }`}
            >
              All
            </button>
            {genres.map((genre) => (
              <button
                key={Math.ceil(Math.random() * 1000 + 1)}
                onClick={() => changeGenre(genre)}
                className={`button-category ${
                  genre === config.genre ? "btn-active" : null
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="movies">
        {movies?.data &&
          movies.data.length &&
          movies.data.map((movie) => renderMovieCard(movie))}
      </div>
      {movies?.data ? (
        <ReactPaginate
          pageCount={6}
          nextLabel="Next >>"
          previousLabel="<< Previous"
          // onPageChange={changePage}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          nextClassName={`page-item ${
            movies.hasNextPage === false ? "disabled" : null
          }`}
          previousClassName={`page-item ${
            movies.hasPrevPage === false ? "disabled" : null
          }`}
          disabledClassName={"pagination-disabled"}
          activeClassName={"active"}
        />
      ) : null}
    </main>
  );
};

export default Homepage;
