import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../pages/Home/components/CartContext";
function TopHeader() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const handlesearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/shopping?q=${searchTerm}`);
    }
  };
  return (
    <div className="top-header">
      <div className="container">
        <div className="desktop-view">
          {" "}
          <div className="top-header-content">
            <div className="logo">MOODY STUDIO</div>
            <div className="icons">
              <div className="header-search">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handlesearch}
                />
                <SearchIcon
                  sx={{ fontSize: "34px", color: "var(--text-color)" }}
                />
              </div>

              <PersonOutlinedIcon
                sx={{ fontSize: "34px", color: "var(--text-color)" }}
              />
              <div className="icon">
                {" "}
                <ShoppingBagOutlinedIcon
                  sx={{ fontSize: "34px", color: "var(--text-color)" }}
                />
                <span className="count">{cart.length}</span>
              </div>

              <FavoriteBorderOutlinedIcon
                sx={{ fontSize: "34px", color: "var(--text-color)" }}
              />
            </div>
          </div>
          <Divider
            sx={{
              borderColor: "var(--text-color)",
              // margin: "0 auto",
            }}
            className="divider"
          />
        </div>
        <div className="mobile-view">
          <div className="top-header-content">
            <div className="logo">URBAN OUTFITTERS </div>
            <div className="icons">
              <PersonOutlinedIcon
                sx={{ fontSize: "15px", color: "var(--text-color)" }}
              />
              <div className="icon">
                <ShoppingBagOutlinedIcon
                  sx={{ fontSize: "17px", color: "var(--text-color)" }}
                />
              </div>
              <div className="icon">
                <MenuIcon
                  sx={{ fontSize: "16px", color: "var(--text-color)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
