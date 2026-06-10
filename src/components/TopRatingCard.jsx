import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function TopRatingCard({ img, title }) {
  return (
    <div className="top-rating-card">
      <img src={img} alt="" />
      <div className="discription">
        {" "}
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

export default TopRatingCard;
