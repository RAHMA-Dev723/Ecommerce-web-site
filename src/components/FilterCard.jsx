import React from "react";

function FilterCard({ img, title, price, children }) {
  return (
    <div className="filler-card">
      <img src={img} alt="" />
      <div className="details">
        <h3>{title}</h3>
        {children}
        <p>{price}"$"</p>
      </div>
    </div>
  );
}

export default FilterCard;
