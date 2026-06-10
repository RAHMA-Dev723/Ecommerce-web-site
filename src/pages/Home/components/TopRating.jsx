import React from "react";
import Button from "@mui/material/Button";
import TopRatingCard from "../../../components/TopRatingCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
// import required modules
import { Grid, Pagination } from "swiper/modules";
function TopRating() {
  const cards = [
    { id: 1, img: "/img/Rectangle 26.png", title: "Tray with foot  " },
    { id: 2, img: "/img/Rectangle 27.png", title: "Twill seat cashion" },
    {
      id: 3,
      img: "/img/Rectangle 28.png",
      title: "Fluted Beverage Glass",
    },
    { id: 4, img: "/img/Rectangle 29.png", title: "Ceramic Egg Cup" },
    { id: 5, img: "/img/Rectangle 33.png", title: "Small Bamboo Box" },
    { id: 6, img: "/img/Rectangle 34.png", title: "Metal Cutlery Basket" },
    { id: 7, img: "/img/Rectangle 30.png", title: "4-pack Ceramic Cups" },
    { id: 8, img: "/img/Rectangle 31.png", title: "2-pack Linen Napkins" },
    { id: 9, img: "/img/Rectangle 32.png", title: "Glazed Stoneware Plate" },
  ];
  const cardslist = cards.map((card) => {
    return <TopRatingCard key={card.id} img={card.img} title={card.title} />;
  });
  const groupedCards = [];

  for (let i = 0; i < cards.length; i += 3) {
    groupedCards.push(cards.slice(i, i + 3));
  }
  return (
    <div className="toprating">
      <div className="container">
        <div className="desktop-view">
          <h2 className="section-title">TOP RATING</h2>
          <div className=" top-rating-products"> {cardslist}</div>
          <Button className="paragraph-base" variant="contained">
            load more products
          </Button>
        </div>
        <div className="mobile-view">
          <h2>TOP RATING</h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {groupedCards.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="mobile-cards">
                  {group.map((card) => (
                    <TopRatingCard
                      key={card.id}
                      img={card.img}
                      title={card.title}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TopRating;
