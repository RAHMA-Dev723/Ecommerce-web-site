import React from "react";
import Herosection from "./components/Herosection";
import "./Home.css";
import Categories from "./components/Categories";
import ProductsSection from "./components/ProductsSection";
import Productpreview from "./components/Productpreview";
import TopRating from "./components/TopRating";
import Newslatter from "./components/Newslatter";
import ServicesSection from "./components/ServicesSection";
import { useRef } from "react";

function Home() {
  const productRef = useRef(null);

  return (
    <>
      <ServicesSection />
      <Herosection productRef={productRef} />
      <Categories />
      <ProductsSection productRef={productRef} />
      <Productpreview />
      <TopRating />
      <Newslatter />
    </>
  );
}

export default Home;
