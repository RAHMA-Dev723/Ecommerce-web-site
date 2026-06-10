import React from "react";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function ProductOverview() {
  return (
    <div className="product-overview">
      <div className="container">
        <div className="product">
          <img src="/img/Rectangle 83.png" alt="" />
          <img src="/img/Rectangle 82.png" alt="" />
          <div className="checked">
            <h2>Checked Duvet Cover Set</h2>
            <p>39.99 $</p>
            <span>Light khaki green/white checks</span>
            <img src="/img/Rectangle 84.png" alt="" />
            <div className="stores">
              <LocationOnIcon />
              <p> Not available in stores</p>
            </div>
            <select>
              <option>select size</option>
            </select>
            <Button className="paragraph-base" variant="contained">
              load more products
            </Button>
          </div>
        </div>
        <img src="/img/Rectangle 97.png" alt="" />
      </div>
    </div>
  );
}

export default ProductOverview;
