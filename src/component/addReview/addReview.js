import styles from './styles/review.module.css';
import kucing from './kucing.jpg';
import lupi from './lupi.jpg';
import React from 'react';
import { connect } from 'react-redux'
import {changeReview, addReview} from './reviewAction'
import {useState} from 'react'

function Review(props) {

  const runCallback = (cb) => {
    return cb();
  };

  let [review, setReview]= useState([])

  function handleChange(review){
    const value = review.target.value
     setReview(value)
 }

 function handleSubmit (e){
     e.preventDefault();
     props.addReview(review);
     
 };

 function handleClick(e){
     e.preventDefault()
     props.addReview(review)
     document.querySelector('form').reset()
     console.log(e,'ini tombol clixk')
 }



  return(
    <React.Fragment>
    <div className={styles.reviewContainer}>
        <form className={styles.reviewUpdate} onSubmir={handleSubmit}>
          <div className={styles.avaContainer}>
            <img className={styles.avaImg} src={kucing} alt="avatar"/>
          </div>
          
          <div className={styles.reviewInput}>
            <p className={styles.userName}>Yudi Kaka</p>
            {
                runCallback(() => {
                  const row = [];
                  for (var i = 0; i < 5; i++) {
                    row.push( <svg className={styles.star} width="22" height="22" viewBox="0 0 49 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5 0L30.2251 14.5106H48.7519L33.7634 23.4787L39.4885 37.9894L24.5 29.0213L9.51148 37.9894L15.2366 23.4787L0.248058 14.5106H18.7749L24.5 0Z" fill= "#C4C4C4"/>
                    </svg>);
                  }
                  return row;
                })
            }
            <div className={styles.divReview} onClick = {handleClick} >
            <input className={styles.textareaInput} type = "text" placeholder="Leave a review" onChange={handleChange}/>
              {/* <button type="submit" onClick={handleClick}> */}
                <svg className={styles.svg} width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.125 40H21.875V21.875H40V18.125H21.875V0H18.125V18.125H0V21.875H18.125V40Z" fill="#777676"/>
                </svg>
              {/* </button> */}
            </div>
          </div>
        </form>
    </div>

    {props.add.map((review) => 
            
            <div key = {review}className={styles.reviewContainer}>
            <div className={styles.reviewUpdate}>
              <div className={styles.avaContainer}>
                <img className={styles.avaImg} src={lupi} alt="avatar"/>
              </div>
              
              <div className={styles.reviewInput}>
                <p className={styles.userName}>Monkey D Luffy</p>
              <p className={styles.reviewValue}>{review}</p>
            
              </div>
            </div>
        </div>
      
  )}
  
    </React.Fragment>
  )
}
const mapStateToProps = (store)  => ({
  add : store.ReviewReducer.review
});

const mapDispatchToProps = dispatch => {
return({
changeReview : (text) => dispatch(changeReview(text)),
addReview: (review)=> dispatch(addReview(review))

});
}

export default connect (mapStateToProps, mapDispatchToProps)(Review)