import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { IconButton, Box, Divider } from "@mui/material";

function Productcard({ img, title }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="" />
        <Box
          className="card-hover"
          sx={{
            width: "232px",
            height: "48px",
            display: "none",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "999px",
            padding: "12px 16px",
            gap: 1,
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            justifyContent: "center",
          }}
        >
          <IconButton>
            <ShoppingBagOutlinedIcon
              sx={{ color: "var(--text-secondary)", opacity: "100%" }}
            />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "var(--border-color)" }}
          />

          <IconButton>
            <FavoriteBorderOutlinedIcon
              sx={{ color: "var(--text-color)", opacity: "50%" }}
            />
          </IconButton>
        </Box>
      </div>
      <div className="card-details">
        <h3>{title}</h3>
        <div className="star">
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon style={{ color: "#323334" }} />
        </div>
        <p className="card-price">30$</p>
      </div>
    </div>
  );
}

export default Productcard;
