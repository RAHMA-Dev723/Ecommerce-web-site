import React from "react";
import FilterCard from "../../../components/FilterCard";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const items = [
  {
    id: 1,
    img: "/img/Rectangle 67.png",
    title: "Flannel Duvet Cover Set",
    color1: "#DDEDD6",
    color2: "#F3DDD8",
    color3: "#C4BDB6",
    price: "30$",
  },
  {
    id: 2,
    img: "/img/Rectangle 76.png",
    title: "Ribbed Wool-blend Throw",
    color1: "#DDEDD6",
    color2: "",
    color3: "#C4BDB6",
    price: "30$",
  },
  {
    id: 3,
    img: "/img/Rectangle 1.png",
    title: "Fitted Cotton Sheet",
    color1: "#DDEDD6",
    color2: "#F3DDD8",
    color3: "#C4BDB6",
    price: "30$",
  },
  {
    id: 4,
    img: "/img/Rectangle 75.png",
    title: "Washed Linen Pillowcase",
    color1: "#DDEDD6",
    color2: "#F3DDD8",
    color3: "#C4BDB6",
    price: "30$",
  },
];
const listitems = items.map((item) => {
  return (
    <FilterCard
      key={item.id}
      img={item.img}
      title={item.title}
      price={item.price}
    >
      <div className="colors">
        <span
          className="color-dot"
          style={{ backgroundColor: item.color1 }}
        ></span>
        <span
          className="color-dot"
          style={{ backgroundColor: item.color2 }}
        ></span>
        <span
          className="color-dot"
          style={{ backgroundColor: item.color3 }}
        ></span>
      </div>
    </FilterCard>
  );
});
function RelatedProducts() {
  return (
    <div className="related-products">
      <div className="container">
        <h2>Also You May Like</h2>
        <div className="items">
          <ArrowBackIosNewOutlinedIcon
            sx={{
              fontSize: "40px",
              marginTop: "180px",
              color: "var(--text-color)",
            }}
          />
          {listitems}
          <ArrowForwardIosOutlinedIcon
            sx={{
              fontSize: "40px",
              marginTop: "180px",
              color: "var(--text-color)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
