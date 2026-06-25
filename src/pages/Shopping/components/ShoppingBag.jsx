import React from "react";
import ShoppingItem from "./ShoppingItem";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
function ShoppingBag({ item }) {
  if (!item) {
    return <h1>Product not found</h1>;
  }

  // const items = [
  //   {
  //     id: 1,

  //     img: "/img/Rectangle 88.png",
  //     title: "Checked Duvet Cover Set",
  //     price: "39.99 $",
  //     ArtNo: "54637253 ",
  //     color: "Mint",
  //     size: "21*45",
  //     total: "39.99 $",
  //     option: "1",
  //   },
  //   {
  //     id: 2,

  //     img: "/img/Rectangle 96.png",
  //     title: "Tasseled Throw",
  //     price: "42.99 $",
  //     ArtNo: "54633464 ",
  //     color: "Beige",
  //     size: "45*64",
  //     total: "42.99 $",
  //     option: "4",
  //   },
  // ];
  // const listitems = items.map((item) => {
  //   return <ShoppingItem key={item.id} product={item} />;
  // });

  return (
    <div className="shopping-bag">
      <h2>Shopping bag</h2>

      <div className="container">
        <div className="card">
          {/* {listitems} */}
          <ShoppingItem product={item} />
          <div className="total">
            {" "}
            <p>Total</p>
            <Divider
              sx={{ border: "1px solid var(--text-color)", margin: "10px 0" }}
            />
            <p>82.98 $</p>
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
              <p>82.98 $</p>

              <p>0.0 $</p>
              <p className="total">82.98 $</p>
            </div>
          </div>
          <div>
            {" "}
            <Button variant="contained" className="checkout-button">
              Continue to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingBag;
