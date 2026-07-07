import React from "react";
import ShoppingBag from "./components/ShoppingBag";
import RelatedProducts from "../single-products/components/RelatedProducts";
import "./Shopping.css";
import { useParams } from "react-router-dom";
import items from "../../Data/Items";

function Shopping() {
  const { id } = useParams();
  const item = items.find((p) => p.id === Number(id));

  return (
    <div>
      <ShoppingBag item={item} />
      <RelatedProducts />
    </div>
  );
}

export default Shopping;
