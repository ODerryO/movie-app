import { useParams } from "react-router-dom";
import styles from './character.css';
import React, { useEffect, useState } from "react";
import axios from "axios";



function Character(props){
  let { id } = useParams()

console.log(props.character, "test karakter")
  return(
    <React.Fragment>
      <div className="characterDisplay">
        
        {props.character.map((character) => (
          <div className="characterSize" key={character.id}>
            <img
              className= "card-img-top"
              src={character.photo}
              alt="img"
            />
            <div className=" card-title h5 ">
              <p className="charaName">{character.name}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>      
  )
}

export default Character