import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import "./Header.css";
import { Link } from "react-router-dom";

function BtmHeader() {
  return (
    <header className="btm-header">
      <div className="container">
        <ul className="nav-links">
          <li>
            <Link to="/"> HOME</Link>
          </li>

          <li>STORE</li>
          <li>ACCESSORIES</li>
          <li>
            <Link to="/Brand"> BRAND</Link>
          </li>
          <li>PAGES</li>
          <li>ABOUT US</li>
          <li>NEWS</li>
          <li>CONTACT US </li>
        </ul>
        <Divider
          sx={{
            borderColor: "var(--text-color)",
          }}
        />
      </div>
    </header>
  );
}

export default BtmHeader;
