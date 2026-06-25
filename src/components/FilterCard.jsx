import React from "react";
import { Link } from "react-router-dom";

function FilterCard({ images, title, price, children, id }) {
  return (
    <Link
      to={`/product/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="filler-card">
        <img src={images && images.length > 0 ? images[0] : ""} alt="" />
        <div className="details">
          <h3>{title}</h3>
          {children}
          <p>{price}$</p>
        </div>
      </div>
    </Link>
  );
}

export default FilterCard;
