import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Promocard({ img, title, id }) {
  return (
    <div className="promocard">
      <img src={img} alt="" />
      <div className="overlay">
        <h2 className="text-base">{title}</h2>
        <p className="paragraph-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link
          to={`/productdetails/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button variant="outlined">VIEW NOW</Button>
        </Link>
      </div>
    </div>
  );
}

export default Promocard;
