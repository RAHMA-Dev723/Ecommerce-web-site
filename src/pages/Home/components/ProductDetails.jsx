import React from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./Context";
import { useContext } from "react";
function ProductDetails() {
  const { id } = useParams();
  const Cards = useContext(ProductContext);
  const card = Cards.find((card) => card.id === Number(id));
  if (!card) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <div>Product Details for ID: {id}</div>
      <img src={card.img} alt="" />
      <h3>{card.title}</h3>
    </>
  );
}

export default ProductDetails;
