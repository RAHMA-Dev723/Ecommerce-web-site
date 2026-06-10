import React from "react";
import Divider from "@mui/material/Divider";

function PopularProducts({ img, title }) {
  return (
    <>
      <div>
        <div>
          <img src={img} alt="" />
          <h4>{title}</h4>
          <p>UI Kit</p>
        </div>
        <p>$5461</p>
      </div>
      <Divider variant="middle" component="li" />
    </>
  );
}

export default PopularProducts;
