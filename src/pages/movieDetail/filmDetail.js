import { Route,useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Overview from "./overview";
import Character from "./character";
import Review from "./review";
import styles from './filmDetail.css';
import StarRating from "../../component/starRating/startRating";



function Detail(){
  let { id } = useParams()
  let [film, setFilm] = useState([]);
  let [karakter, setKarakter] = useState([]);
  let [reviews, setReview] = useState([]);

  useEffect(() => {
    axios
      .get(`https://testminiproject.herokuapp.com/api/movie/${id}`)
      .then((response) => {
        console.log(response.data.data);
        setFilm(response.data.data)
        setKarakter(response.data.data.characters)
        setReview(response.data.data.reviews)
      });
  }, []);
  console.log(film, "test film")

  return(
      <React.Fragment>
        <div className="overview">
          <div className="poster-img"><img
              className="imgPoster"
              src={film.poster}
              alt="img"
            /></div>
          <div className="movieRate">
            <h1 className="filmTitle">{film.title}</h1>
            <p className="rating">Rating: {film.star}  </p>
            <StarRating />

            <p className="filmTitle">{film.synopsis}</p>
            <a href={film.trailer} target="_blank" rel="noreferrer" className="btn btn-primary"> Watch Trailer </a>
            <a className="btn btn-outline-primary"> Add to Watchlist </a>
          </div>
        </div>
        <div className="buttonChange">
          <Link className="button button2 btnOv" to={`/detail/${id}`}>Overview</Link>
          <Link className="button button2 btnCh" to={`/detail/${id}/character`}>Character</Link>
          <Link className="button button2 btnCh" to={`/detail/${id}/review`}>Review</Link>

          <Route path={`/detail/${id}`} exact render={() => <Overview filmDetails={film}/>}/>
          <Route path={`/detail/${id}/character`} render={() => <Character character={karakter}/>} />
          <Route path={`/detail/${id}/review`} render={() => <Review review={reviews}/>} />
        </div>
      </React.Fragment>
  )
}

export default Detail
