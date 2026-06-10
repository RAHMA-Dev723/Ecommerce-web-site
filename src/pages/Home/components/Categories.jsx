import React from "react";
import Button from "@mui/material/Button";
function Categories() {
  return (
    <div className="Categories">
      <div className="container">
        <div className="chair">
          <img src="/img/image 3 (1).png" alt="" />
          <div className="details">
            <h2>INY VINTAGE CHAIR</h2>
            <Button variant="outlined">VIEW NOW</Button>
          </div>
        </div>
        <div className=" terracota">
          <img src="/img/image 4.png" alt="" />
          <div className="details">
            <h2>
              LARGE TERRACOTA
              <br /> VASE
            </h2>
            <Button variant="outlined">VIEW NOW</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
