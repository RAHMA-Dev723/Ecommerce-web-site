import React from "react";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
function ProductOverview({ item, id }) {
  return (
    <div className="product-overview">
      <div className="container">
        <div className="product">
          <img src={item.images[0]} alt="" />
          <img src={item.images[1]} alt="" />
          <div className="checked">
            <h2>{item.title}</h2>
            <p>{item.price}$</p>
            <span>Light khaki green/white checks</span>
            <img src={item.images[0]} alt="" />
            <div className="stores">
              <LocationOnIcon />
              <p> Not available in stores</p>
            </div>
            <select>
              <option>select size</option>
            </select>
            <Link to={`/shopping/${id}`}>
              <Button className="paragraph-base" variant="contained">
                Add to shopping bag
              </Button>
            </Link>
          </div>
        </div>
        <img className="product-image" src={item.images[2]} alt="" />
      </div>
    </div>
  );
}

export default ProductOverview;
