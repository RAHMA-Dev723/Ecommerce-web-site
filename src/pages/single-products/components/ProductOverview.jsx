import React, { useState } from "react";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Handle from "rc-slider/lib/Handles/Handle";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function ProductOverview({ item }) {
  const [selectedSize, setselectedSize] = useState(item.sizes[0]);
  const [activeImage, setactiveImage] = useState(item.images[2]);
  const [open, setOpen] = React.useState(false);
  const handleAddToCart = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const Handleclick = (image) => {
    setactiveImage(image);
  };
  const { AddToCart } = useContext(CartContext);
  return (
    <div className="product-overview">
      <div className="container">
        <div className="product">
          <img
            src={item.images[0]}
            alt=""
            onClick={() => Handleclick(item.images[0])}
          />
          <img
            src={item.images[1]}
            alt=""
            onClick={() => Handleclick(item.images[1])}
          />
          <div className="checked">
            <h2>{item.title}</h2>
            <p>{item.price}$</p>
            <span>Light khaki green/white checks</span>
            <img src={item.images[0]} alt="" />
            <div className="stores">
              <LocationOnIcon />
              <p> Not available in stores</p>
            </div>
            <select
              value={selectedSize}
              onChange={(e) => setselectedSize(e.target.value)}
            >
              {item.sizes?.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <div>
              {" "}
              <Button
                className="paragraph-base"
                variant="contained"
                onClick={() => {
                  AddToCart(item, selectedSize);
                  handleAddToCart();
                }}
              >
                Add to shopping bag
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <Alert
                  severity="success"
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  Added to cart!{" "}
                </Alert>
              </Snackbar>
            </div>
          </div>
        </div>
        <img className="product-image" src={activeImage} alt="" />
      </div>
    </div>
  );
}

export default ProductOverview;
