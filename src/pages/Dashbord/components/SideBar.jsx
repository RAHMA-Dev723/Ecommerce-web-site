import React from "react";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
function SideBar() {
  return (
    <div className="sidebar">
      <select name="home" id="home-select">
        <option value="home">Home</option>
      </select>

      <select name="products" id="products-select">
        <option value="products">Products</option>
      </select>

      <select name="customers" id="customers-select">
        <option value="customers">Customers</option>
      </select>

      <select name="shop" id="shop-select">
        <option value="shop">Shop</option>
      </select>

      <select name="income" id="income-select">
        <option value="income">Income</option>
      </select>
    </div>
  );
}

export default SideBar;
