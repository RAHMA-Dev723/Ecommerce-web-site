import React from "react";
import CustomerCard from "./CustomerCard";
import OrdersStatics from "./OrdersStatics";
import Divider from "@mui/material/Divider";
import PopularProducts from "./PopularProducts";

function MainArea() {
  const cards = [
    { id: 1, img: "/img/Ellipse 7.png", title: "Johnson D." },
    { id: 2, img: "/img/Ellipse 8.png", title: "Didinya J." },
    { id: 3, img: "/img/Ellipse 9.png", title: "Penny L." },
    { id: 4, img: "/img/Ellipse 10.png", title: "Elon M." },
  ];
  const cardlist = cards.map((card) => {
    return <CustomerCard key={card.id} img={card.img} title={card.title} />;
  });
  const products = [
    { id: 1, img: "/img/image 1.png", title: "Product A" },
    { id: 2, img: "/img/image 2 (1).png", title: "Product B" },
    { id: 3, img: "/img/image 3 (2).png", title: "Product C" },
    { id: 4, img: "/img/image 4(1).png", title: "Product D" },
  ];
  const productslist = products.map((product) => {
    return (
      <PopularProducts
        key={product.id}
        img={product.img}
        title={product.title}
      />
    );
  });
  return (
    <div className="main-area">
      <h2>Dashboard</h2>
      <div className="overview">
        <div>
          <div>
            {" "}
            <h3>Overview</h3>
            <select name="" id="">
              <option value="">All Time</option>
            </select>
          </div>
          <div>
            <div>
              <p>Customers</p>
              <span>10,243</span>
              <div>8%</div>
            </div>
            <div>
              <p>Income</p>
              <span>$39,403,450</span>
              <div>8%</div>
            </div>
          </div>
        </div>
        <div>
          <p>Welcome to our new online experience</p>
          {cardlist}
        </div>
      </div>
      <div className="orders-statics">{/* <OrdersStatics /> */}</div>
      <div className="Popular-Products">
        <div>
          <h4>Product</h4>
          <h4>Earnings</h4>
        </div>
        {productslist}
        <button>All Products</button>
      </div>
      <div className="comments">
        <div>
          <h4>Comments</h4>
          <h4>Date</h4>
          <Divider variant="middle" component="li" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainArea;
