import React from "react";
import ShoppingItem from "./ShoppingItem";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
function ShoppingBag() {
  const { cart } = useContext(CartContext);
  const Total = cart.reduce((sum, product) => {
    return sum + product.price * product.qty;
  }, 0);
  const listitems = cart.map((item) => {
    return <ShoppingItem key={item.id} product={item} Checkout={false} />;
  });

  return (
    <div className="shopping-bag">
      <h2>Shopping bag</h2>

      <div className="container">
        <div className="card">
          {listitems}
          <div className="total">
            {" "}
            <p>Total</p>
            <Divider
              sx={{ border: "1px solid var(--text-color)", margin: "10px 0" }}
            />
            <p>{Total}$</p>
          </div>
        </div>
        <div className="log-in">
          <div className="add-input">
            <h3>ADD A DISCOUNT CODE</h3>
            <div className="add">
              <input />
              <button>ADD</button>
            </div>
          </div>

          <div className="login-button">
            <h3>Log in to use your member offers.</h3>
            <button>LOG IN</button>
          </div>

          <div className="details">
            <div>
              <p>Order value: </p>
              <p>Shipping:</p>
              <p className="total">Total</p>
            </div>
            <div>
              <p>{Total}$</p>

              <p>0.0 $</p>
              <p className="total">{Total}$</p>
            </div>
          </div>
          <div>
            {" "}
            <Link to={"/checkout"}>
              <Button variant="contained" className="checkout-button">
                Continue to checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingBag;
