import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
function ShoppingItem({ product, Checkout }) {
  const { RemoveFromCart } = useContext(CartContext);
  const { updateQty } = useContext(CartContext);
  return (
    <div className="shopping-item">
      <img src={product.images[0]} alt="" />
      <div className="item">
        <h3>{product.title}</h3>
        <p>{product.price}$</p>
        {Checkout && <p>qty:{product.qty}</p>}

        <div className="item-details">
          <div>
            {!Checkout && <p> Art. No.:</p>}

            <p>Color: </p>
          </div>
          <div>
            {!Checkout && <p>{product.ArtNo}</p>}

            <p>{product.color}</p>
          </div>
          <div>
            <p>Size: </p>
            {!Checkout && <p> Total:</p>}
          </div>
          <div>
            <p>{product.selectedSize}</p>
            {!Checkout && <p>{product.price * product.qty}$</p>}
          </div>
        </div>
        {!Checkout && (
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

            <select
              value={product.qty}
              onChange={(e) => updateQty(product.id, Number(e.target.value))}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        )}
      </div>
      {!Checkout && (
        <CloseIcon
          sx={{
            color: "var(--text-color)",
            fontSize: "16PX",
            marginLeft: "auto",
          }}
          onClick={() => RemoveFromCart(product.id)}
        />
      )}
    </div>
  );
}

export default ShoppingItem;
