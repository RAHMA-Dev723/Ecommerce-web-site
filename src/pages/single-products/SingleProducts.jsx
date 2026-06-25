import React from "react";
import ProductOverview from "./components/ProductOverview";
import ProductDescriprition from "./components/ProductDescriprition";
import RelatedProducts from "./components/RelatedProducts";
import "./SingleProducts.css";
import { useParams } from "react-router-dom";
import items from "../../Data/Items";
function SingleProducts() {
  const { id } = useParams();
  const item = items.find((p) => p.id === Number(id));
  if (!item) {
    return <h1>Product not found</h1>;
  }
  return (
    <div>
      <ProductOverview item={item} id={id} />
      <ProductDescriprition />
      <RelatedProducts item={item} />
    </div>
  );
}

export default SingleProducts;
