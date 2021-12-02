import { Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import styles from './overview.css';




function Overview(props){
  let { id } = useParams()
console.log(props.filmDetails, "tes overview")
  return (
    <React.Fragment>
      <div className="synopsis">
        <h2>Sinopsis</h2>
        <p className="filmSinopsis"> {props.filmDetails.synopsis} </p>

        <h2>Movie Detail</h2>
        <div className="movieDetail">
          <p>Release Date: {props.filmDetails.releaseDate } </p>
          <p>Director: {props.filmDetails.director } </p>
          <p>Budget: {props.filmDetails.budget } </p>
          <a href={props.filmDetails.featuredSong} target="_blank" rel="noreferrer">Soundtrack by Hans Zimmer</a>
          <p>Release Date: {props.filmDetails.releaseDate } </p>
          <p>Director: {props.filmDetails.director } </p>
          <p>Budget: {props.filmDetails.budget } </p>
          <p href={props.filmDetails.featuredSong} target="_blank" rel="noreferrer">Soundtrack by Hans Zimmer</p>
          

        </div>
        
      </div>

    </React.Fragment>
  )




}
export default Overview