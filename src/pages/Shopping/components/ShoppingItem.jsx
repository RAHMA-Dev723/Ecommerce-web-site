import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

function ShoppingItem({ product }) {
  return (
    <div className="shopping-item">
      <img src={product.images[0]} alt="" />
      <div className="item">
        <h3>{product.title}</h3>
        <p>{product.price}$</p>
        <div className="item-details">
          <div>
            <p> Art. No.:</p>
            <p>Color: </p>
          </div>
          <div>
            <p>{product.ArtNo}</p>

            <p>{product.color}</p>
          </div>
          <div>
            <p>Size: </p>
            <p> Total:</p>
          </div>
          <div>
            <p>{product.size}</p>

            <p>{product.price}$</p>
          </div>
        </div>
        <div className="actions">
          <Box
            sx={{
              width: "31px",
              height: "31px",
              border: "1px solid var(--text-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <FavoriteBorderIcon
              sx={{
                fontSize: "12px",
                color: "var(--text-color)",
              }}
            />
          </Box>

          <select>
            <option>{product.option}</option>
          </select>
        </div>
      </div>
      <CloseIcon
        sx={{
          color: "var(--text-color)",
          fontSize: "16PX",
          marginLeft: "auto",
        }}
      />
    </div>
  );
}

export default ShoppingItem;
