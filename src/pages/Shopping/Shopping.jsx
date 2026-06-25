import React from "react";
import ShoppingBag from "./components/ShoppingBag";
import RelatedProducts from "../single-products/components/RelatedProducts";
import "./Shopping.css";
import { useSearchParams, useParams } from "react-router-dom";
import items from "../../Data/Items";

function Shopping() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const { id } = useParams();
  const item = items.find((p) => p.id === Number(id));
  console.log(searchTerm);
  return (
    <div>
      <ShoppingBag item={item} />
      <RelatedProducts />
    </div>
  );
}

export default Shopping;
