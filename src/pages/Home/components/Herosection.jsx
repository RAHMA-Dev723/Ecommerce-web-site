import React from "react";
import Button from "@mui/material/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
function Herosection({ productRef }) {
  const handleScroll = () => {
    productRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="Hero-section">
        <div className="container">
          <div className="desktop-view">
            {" "}
            <div className="slide">
              {" "}
              <img src="/img/image 2.png" alt="" />
              <div className="Hot-deals">
                <p>HOT DEALS THIS WEEK</p>
                <h1>SALE UP 50% MODERN FURNITURE</h1>
                <Button variant="outlined" onClick={handleScroll}>
                  VIEW NOW
                </Button>
              </div>
            </div>
          </div>
          <div className="mobile-view">
            {" "}
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slide">
                  {" "}
                  <img src="/img/image 2.png" alt="" />
                  <div className="Hot-deals">
                    <p>HOT DEALS THIS WEEK</p>
                    <h1>SALE UP 50% MODERN FURNITURE</h1>
                    <Button variant="outlined" onClick={handleScroll}>
                      VIEW NOW
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide> </SwiperSlide>
              <SwiperSlide> </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
