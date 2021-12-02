import { Link, useParams} from "react-router-dom";
import React from "react";
// import Star from "../../component/addStar/star";
import styles from './review.css';




function Review(props){
  let { id } = useParams()
  // let [fullName, setFullName] = useState([])


console.log(props.review, "tes reviewwwwww")
  return (
    <React.Fragment>

      <div className="reviewDisplay">
        {props.review.map((reviews) => (
            <div className="userReview" key={reviews.id}>
              <img className="imgPoster" src={reviews.user.profilePicture} alt="img"/>
              <p>Name: {reviews.user.fullName}</p>
              <p>Rating: {reviews.rating}</p>
              <p>Comment: {reviews.comment} </p>
            </div>
          ))}
      </div>
    </React.Fragment>  
  )




}
export default Review