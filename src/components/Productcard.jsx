import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";

function Productcard({ img, title, id }) {
  return (
    <Link
      to={`/Productdetails/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
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
    </Link>
  );
}

export default Productcard;
