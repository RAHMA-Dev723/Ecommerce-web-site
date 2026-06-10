import React from "react";
import Button from "@mui/material/Button";

function Productpreview() {
  return (
    <div className="ProductPreview">
      <div className="container">
        <h2 className="text-base">BEDSHEET SETS</h2>
        <div className="price">
          <span className="new-price text-base">$50.00</span>
          <span className="old-price paragraph-base">$220.00</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <Button variant="outlined">VIEW DETAILS</Button>
      </div>
    </div>
  );
}

export default Productpreview;
