import React from "react";
import Button from "@mui/material/Button";
import Productcard from "../../../components/Productcard";
import Promocard from "../../../components/Promocard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { ProductContext } from "./Context";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
function ProductsSection({ productRef }) {
  const cards = useContext(ProductContext);

  const cardslist = cards.map((card) => {
    return (
      <Productcard
        key={card.id}
        id={card.id}
        img={card.img}
        title={card.title}
      />
    );
  });
  return (
    <div ref={productRef} className="ProductsSection">
      <div className="container">
        <div className="desktop-view ">
          <Promocard img="/img/Rectangle 5.png" title="DECOR" />
          {cardslist}
          <Promocard img="/img/Rectangle 9.png" title="BOHO CHIC" />
        </div>
        <div className="mobile-view">
          <h2>Hot deals</h2>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            slidesPerView={1.5}
            spaceBetween={20}
            className="mySwiper"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <Productcard img={card.img} id={card.id} title={card.title} />
              </SwiperSlide>
            ))}{" "}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
