import React from "react";
import ShoppingBag from "./components/ShoppingBag";
import RelatedProducts from "../single-products/components/RelatedProducts";
import "./Shopping.css";
import { useSearchParams } from "react-router-dom";
function Shopping() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  console.log(searchTerm);
  return (
    <div>
      <ShoppingBag />
      <RelatedProducts />
    </div>
  );
}

export default Shopping;
