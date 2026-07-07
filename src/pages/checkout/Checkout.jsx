import React, { useState } from "react";
import ShoppingItem from "../Shopping/components/ShoppingItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Divider from "@mui/material/Divider";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const { cart, ClearCart } = useContext(CartContext);
  const Total = cart.reduce((sum, product) => {
    return sum + product.price * product.qty;
  }, 0);
  const listitems = cart.map((item) => {
    return <ShoppingItem key={item.id} product={item} Checkout={true} />;
  });
  const Navigate = useNavigate();
  const [form, setform] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipcode: "",
  });
  const [errors, seterrors] = useState({});
  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();

    const newErrors = {};
    if (!form.fullName) {
      newErrors.fullName = "Full name is required";
    }
    if (!form.email) {
      newErrors.email = "email is required";
    }
    if (!form.phone) {
      newErrors.phone = "phone is required";
    }
    if (!form.address) {
      newErrors.address = " address is required";
    }
    if (!form.city) {
      newErrors.city = " city is required";
    }
    if (!form.zipcode) {
      newErrors.zipcode = " zipcode is required";
    }

    seterrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      ClearCart();
      Navigate("/thankyou");
    }
  };

  return (
    <div className="checkout">
      <div className="container">
        <div className="sumarry-order">
          <h2>Order Summary</h2>
          <div className="card">{listitems}</div>
          <Divider
            sx={{ border: "1px solid var(--text-color)", margin: "10px 0" }}
          />
          <div className="details">
            <div>
              <p>Subtotal</p>
              <p>Shipping</p>
              <p>Discout</p>
            </div>
            <div>
              <p>{Total}$</p>
              <p>0.0 $</p>
              <p>0.0 $</p>
            </div>
          </div>
          <Divider
            sx={{ border: "1px solid var(--text-color)", margin: "10px 0" }}
          />
          <div className="details">
            <p>Total</p>
            <p>{Total}$</p>
          </div>
        </div>
        <div className="checkout-form">
          <h2>Checkout</h2>
          <form>
            <div className="form-group">
              <input
                placeholder="Full Name"
                type="text"
                value={form.fullName}
                onChange={(e) => setform({ ...form, fullName: e.target.value })}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>
            <div className="form-group">
              <input
                placeholder="Email"
                type="text"
                value={form.email}
                onChange={(e) => setform({ ...form, email: e.target.value })}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <input
                placeholder="Phone "
                type="number"
                value={form.phone}
                onChange={(e) => setform({ ...form, phone: e.target.value })}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className="form-group">
              <input
                placeholder="Address "
                type="text"
                value={form.address}
                onChange={(e) => setform({ ...form, address: e.target.value })}
              />
              {errors.adress && <p className="error">{errors.adress}</p>}
            </div>
            <div className="form-group">
              <input
                placeholder="City "
                type="text"
                value={form.city}
                onChange={(e) => setform({ ...form, city: e.target.value })}
              />
              {errors.city && <p className="error">{errors.city}</p>}
            </div>
            <div className="form-group">
              <input
                placeholder="ZIP Code "
                type="number"
                value={form.zipcode}
                onChange={(e) => setform({ ...form, zipcode: e.target.value })}
              />
              {errors.zipcode && <p className="error">{errors.zipcode}</p>}
            </div>
            <button variant="contained" onClick={handleSubmit}>
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
