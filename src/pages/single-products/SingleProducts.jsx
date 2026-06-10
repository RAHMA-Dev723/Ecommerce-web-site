import React from "react";
import ProductOverview from "./components/ProductOverview";
import ProductDescriprition from "./components/ProductDescriprition";
import RelatedProducts from "./components/RelatedProducts";
import "./SingleProducts.css";

function SingleProducts() {
  return (
    <div>
      <ProductOverview />
      <ProductDescriprition />
      <RelatedProducts />
    </div>
  );
}

export default SingleProducts;
