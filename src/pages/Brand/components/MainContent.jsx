import React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterCard from "../../../components/FilterCard";
import Button from "@mui/material/Button";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import items from "../../../Data/Items";
import { useSearchParams } from "react-router-dom";

function MainContent() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const [active, setActive] = useState("All");
  const filteredItems =
    active === "All" ? items : items.filter((item) => item.category === active);
  const filterBySearch = !searchTerm
    ? filteredItems
    : filteredItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );

  const handlerange = filterBySearch.filter(
    (item) => item.price >= priceRange[0] && item.price <= priceRange[1],
  );

  const [sortOrder, setSortOrder] = useState("All");
  const sortedItems = [...handlerange].sort((a, b) => {
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
        id={item.id}
        images={item.images}
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
                          <Slider
                            range
                            value={priceRange}
                            onChange={(value) => setPriceRange(value)}
                          />

                          <p>
                            ${priceRange[0]} - ${priceRange[1]}
                          </p>
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
                  <button
                    onClick={() => {
                      setopenfilter(false);
                    }}
                  >
                    {" "}
                    DONE
                  </button>
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
        <p className="avilable-product">
          Showing {sortedItems?.length} products
        </p>
        <div className="products">{listitems}</div>
        <Button className="paragraph-base load-button" variant="contained">
          load more products
        </Button>
      </div>
    </div>
  );
}

export default MainContent;
