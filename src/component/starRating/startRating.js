import React from "react";
import "./styles.css";
import ReactStars from "react-rating-stars-component";

const firstExample = {
  size: 30,
  value: 3,
  edit: false
};

export default function StarRating() {
  return (
    <div className="starRating">
      <ReactStars {...firstExample} />
    </div>
  );
}
