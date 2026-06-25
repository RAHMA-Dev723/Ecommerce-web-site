import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function Productcard({ img, title }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-details">
        <h3>{title}</h3>
        <div className="star">
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon style={{ color: "#323334" }} />
        </div>
        <p className="card-price">30$</p>
      </div>
    </div>
  );
}

export default Productcard;
