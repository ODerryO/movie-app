import React from "react";
import "./star.css";
import ReactStars from "react-rating-stars-component";

const secondExample = {
  size: 50,
  count: 5,
  color: "black",
  activeColor: "red",
  value: 7.5,
  a11y: true,
  isHalf: true,
  emptyIcon: <i className="far fa-star" />,
  halfIcon: <i className="fa fa-star-half-alt" />,
  filledIcon: <i className="fa fa-star" />,
  onChange: (newValue) => {
    console.log(`Example 2: new value is ${newValue}`);
  }
};

export default function Star() {
  return (
    <div className="Star">
      <ReactStars {...secondExample} />
    </div>
  );
}
