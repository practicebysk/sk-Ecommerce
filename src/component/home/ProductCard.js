import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useParams } from "react-router-dom";
function ProductCard({ product }) {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 18 : 21,
    value: product.rating,
    isHalf: true,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.image[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />
        <span>{product.numOfReviews} Reviews</span>
      </div>
      <span>₹{product.price}</span>
    </Link>
  );
}

export default ProductCard;
