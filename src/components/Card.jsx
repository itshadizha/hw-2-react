import React from "react";
import "./Card.css";
import rating0 from "../assets/rating-0.png";
import rating05 from "../assets/rating-05.png";
import rating10 from "../assets/rating-10.png";
import rating15 from "../assets/rating-15.png";
import rating20 from "../assets/rating-20.png";
import rating25 from "../assets/rating-25.png";
import rating30 from "../assets/rating-30.png";
import rating35 from "../assets/rating-35.png";
import rating40 from "../assets/rating-40.png";
import rating45 from "../assets/rating-45.png";
import rating50 from "../assets/rating-50.png";
import Button from "./Button";

const Card = ({ product }) => {
  const RATING = (stars) => {
    if (stars <= 0) return rating0;
    else if (stars <= 0.5) return rating05;
    else if (stars <= 1) return rating10;
    else if (stars <= 1.5) return rating15;
    else if (stars <= 2) return rating20;
    else if (stars <= 2.5) return rating25;
    else if (stars <= 3) return rating30;
    else if (stars <= 3.5) return rating35;
    else if (stars <= 4) return rating40;
    else if (stars <= 4.5) return rating45;
    else return rating50;
  };

  return (
    <div className="cont" key={product.id}>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.name}</p>
      <div className="body">
        <img
          src={RATING(product.rating.stars)}
          alt={`Rating: ${product.rating.stars} stars`}
          className="rating"
        />
        <p>{product.priceCents}</p>
      </div>
      <Button />
    </div>
  );
};

export default Card;
