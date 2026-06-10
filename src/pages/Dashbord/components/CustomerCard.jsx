import React from "react";

function CustomerCard({ img, title }) {
  return (
    <div className="customercard">
      <img src={img} alt="" />
      <h3>{title}</h3>
    </div>
  );
}

export default CustomerCard;
