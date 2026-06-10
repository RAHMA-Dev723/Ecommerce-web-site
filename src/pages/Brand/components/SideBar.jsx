import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function SideBar() {
  const prices = [
    "0$ - 40$",
    "40$ - 100$",
    "100$ - 150$",
    "150$ - 175$",
    "175$ - 250$",
    "250$ - 350$",
  ];
  const colors = [
    " #FFFFFF",
    " #323334",
    "#C4C4C4",
    "#F2C94C",
    "#F2994A",
    "#EB5757",
    "#BB6BD9",
    "#56CCF2",
    "#6FCF97",
    "#219653",
    "#2F80ED",
    "#DF1313",
    "#770505",
    "#0A5D8B",
    "#AD5B12",
    "#4F0E8B",
    "#0A7090",
    "#156008",
  ];
  return (
    <div className="container">
      <div className="menu">
        <div className="new-arrival">
          <h3>New arrivals</h3>
          <p>New arrivals</p>
        </div>
        <div className="shop-byroom">
          <h3>shop by room</h3>
          <ul>
            <li>
              <span>bedroom</span>
              <ul className="sub-list">
                <Link to="/duvet cover sets">
                  <li> duvet cover sets</li>
                </Link>
                <li>sheets</li>
                <li>bedspreads & blankets</li>
                <li>blankets</li>
                <li>cutains</li>
                <li>pillowcases</li>
                <li>rugs</li>
              </ul>
            </li>
            <li>living room</li>
            <li>child room</li>
            <li>bathroom</li>
            <li>Outdoor</li>
          </ul>
        </div>
        <div className="shop-byconcept">
          <h3>shop by concept</h3>
          <ul>
            <li>Conscious</li>
            <li>premium quality</li>
            <li>classic collection</li>
          </ul>
        </div>
        <div className="gender">
          <h3>gender</h3>

          <ul>
            <li className="boxes">
              {" "}
              <Box className="box" />
              <label>Man</label>
            </li>
            <li className="boxes">
              {" "}
              <Box className="box" />
              <label>woman</label>
            </li>
          </ul>
        </div>
        <div className="color">
          <h3>Color</h3>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6,1fr)",
              gap: "10px",
            }}
          >
            {colors.map((color, i) => (
              <Box
                className="box"
                key={i}
                sx={{
                  backgroundColor: color,
                }}
              />
            ))}
          </Box>
        </div>
        <div className="price">
          <h3>Price</h3>

          {prices.map((price, i) => (
            <ul>
              <li key={i} className="boxes">
                <Box className="box" />
                <label>{price}</label>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
