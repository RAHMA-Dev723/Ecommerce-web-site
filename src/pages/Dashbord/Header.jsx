import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header-main">
        <div className="header-brand">
          <h2>MOODY STUDIO</h2>
        </div>
        <div className="header-search">
          <SearchIcon
            sx={{ fontSize: "27px", color: "#3C3939", margin: "20px" }}
          />
          <input type="text" placeholder="Search or type a command" />
        </div>
      </div>

      <div className="header-actions">
        <button className="create-btn">
          <AddIcon sx={{ fontSize: "24px", color: "var(--white-color)" }} />
          Create
        </button>
        <Avatar alt="profile" src="src/img/Ellipse 5.png" />
      </div>
    </div>
  );
}

export default Header;
