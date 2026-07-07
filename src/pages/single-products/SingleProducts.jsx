import React from "react";
import ProductOverview from "./components/ProductOverview";
import ProductDescriprition from "./components/ProductDescriprition";
import RelatedProducts from "./components/RelatedProducts";
import "./SingleProducts.css";
import { useParams } from "react-router-dom";
import items from "../../Data/Items";
import { useEffect } from "react";
function SingleProducts() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);
  const item = items.find((p) => p.id === Number(id));
  if (!item) {
    return <h1>Product not found</h1>;
  }
  return (
    <div>
      <ProductOverview key={item.id} item={item} />
      <ProductDescriprition />
      <RelatedProducts item={item} />
    </div>
  );
}

export default SingleProducts;
