import React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterCard from "../../../components/FilterCard";
import Button from "@mui/material/Button";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
function MainContent() {
  const items = [
    {
      id: 1,
      img: "/img/Rectangle 62.png",
      title: "Velvet Covvered",
      color1: " #9E6344",
      color2: "#8F8E73",
      price: 39,
      category: "Products",
    },
    {
      id: 2,
      img: "/img/Rectangle 47.png",
      title: "CANDLE IN GLASS HOLDER",
      color1: "#9F9189 ",
      price: 14,
      category: "Models",
    },
    {
      id: 3,
      img: "/img/Rectangle 48.png",
      title: "METAL PHOTO FRAME",
      color1: "#F2C94C ",
      color2: "#828282",
      price: 25,
      category: "Models",
    },
    {
      id: 4,
      img: "/img/Rectangle 65.png",
      title: "Round floor mat",
      color1: " #ACAD92",
      color2: "#D4CEBF",
      price: 34,
      category: "Products",
    },
    {
      id: 5,
      img: "/img/Rectangle 66.png",
      title: "Class light holder",
      color1: "#A04F48 ",
      color2: "#7B3D39",
      price: 22,
      category: "Models",
    },
    {
      id: 6,
      img: "/img/Rectangle 67.png",
      title: "Flannel Duvet Cover Set",
      color1: "#9B9A98 ",
      color2: "#A2A285",
      price: 44,
      category: "Products",
    },
    {
      id: 7,
      img: "/img/Rectangle 70.png",
      title: "Fitted Cotton Sheet ",
      color1: "#DDEDD6 ",
      color2: "#F3DDD8",
      color3: "#C4BDB6",
      price: 24,
      category: "Products",
    },
    {
      id: 8,
      img: "/img/Rectangle 71.png",
      title: "Small Candle in a Small Jar ",
      color1: "#633733 ",
      color2: "#BBBAC0",
      color3: "#D8B4A2",
      price: 14,
      category: "Models",
    },
    {
      id: 9,
      img: "/img/Rectangle 72.png",
      title: "Checked Duvet Cover Set",
      color1: "#81352D ",
      color2: "A7A689",
      price: 24,
      category: "Products",
    },
    {
      id: 10,
      img: "/img/Rectangle 75.png",
      title: "Washed Linen Pillowcase",
      color1: "#888687 ",
      color2: "#B6A899",
      color3: "#A6A68B",
      price: 18,
      category: "Products",
    },
    {
      id: 11,
      img: "/img/Rectangle 76.png",
      title: "Ribbed Wool-blend Throw",
      color1: "#D1C3B1 ",
      color2: "#DDC1B2",
      price: 24,
      category: "Products",
    },
    {
      id: 12,
      img: "/img/Rectangle 77.png",
      title: "Mini Porcelain Dish",
      color1: "#DDEDD6 ",
      color2: "#F3DDD8",
      color3: "#C4BDB6",
      price: 8,
      category: "Models",
    },
  ];
  const [active, setActive] = useState("All");
  const filteredItems =
    active === "All" ? items : items.filter((item) => item.category === active);
  const [sortOrder, setSortOrder] = useState("All");
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });
  const listitems = sortedItems.map((item) => {
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
  const [openfilter, setopenfilter] = useState(false);
  function valuetext(value) {
    return `${value}`;
  }

  const [min, max] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    max(newValue);
  };
  return (
    <div className="main-content">
      <div className="container">
        <div className="title">
          {" "}
          <h1>BEDROOM</h1>
          <p>
            its easy to transform your bedroom interior with our great selection
            of accessories{" "}
          </p>
          <div className="filter">
            <div
              className="filter-icon"
              onClick={() => {
                setopenfilter(true);
                // console.log("clicked");
              }}
            >
              <FilterAltOutlinedIcon />
              <p>filter & sort</p>
            </div>
            {openfilter && (
              <div className="drop-down">
                <div className="list-filter">
                  <ul className="filter-list">
                    <li>PRODUCT TYPE</li>
                    <li>Size</li>
                    <li>color</li>
                    <li>concept</li>
                    <li>collection</li>
                    <li>quality</li>
                    <li>
                      Price
                      <ul>
                        <li
                          onClick={() => {
                            setSortOrder("lowToHigh");
                          }}
                        >
                          Low to High
                        </li>

                        <li
                          onClick={() => {
                            setSortOrder("highToLow");
                          }}
                        >
                          High to Low
                        </li>
                        <li>
                          <Box sx={{ width: 300 }}>
                            <Slider
                              getAriaLabel={() => "Temperature range"}
                              value={min}
                              onChange={handleChange}
                              valueLabelDisplay="auto"
                              getAriaValueText={valuetext}
                            />
                          </Box>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <CloseIcon
                    onClick={() => {
                      setopenfilter(false);
                    }}
                    sx={{
                      color: "var(--text-color)",
                      fontSize: "19PX",
                      margin: "20px",
                    }}
                  />
                </div>
                <div className="dropdown-buttons">
                  <button> CLEAR ALL</button>
                  <button> DONE</button>
                </div>
              </div>
            )}

            <div className="filter-type">
              <p
                onClick={() => setActive("Models")}
                className={active === "Models" ? "active" : ""}
              >
                Models
              </p>
              <p
                onClick={() => setActive("Products")}
                className={active === "Products" ? "active" : ""}
              >
                products
              </p>
            </div>
          </div>
        </div>
        <div className="products">{listitems}</div>
        <Button className="paragraph-base load-button" variant="contained">
          load more products
        </Button>
      </div>
    </div>
  );
}

export default MainContent;
