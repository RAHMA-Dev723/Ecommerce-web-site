import Home from "./pages/Home/Home";
import Brand from "./pages/Brand/Brand";
import SingleProducts from "./pages/single-products/SingleProducts";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Shopping from "./pages/Shopping/Shopping";
import MainLayout from "./MainLayout";
import Dashboard from "./pages/Dashbord/Dashboard";
import ProductDetails from "./pages/Home/components/ProductDetails";
import { ProductContext } from "./pages/Home/components/Context";
const cards = [
  { id: 1, img: "/img/Rectangle 6.png", title: "LINEN BEACH TOWEL" },
  { id: 2, img: "/img/Group 232.png", title: "Square Clear Glass Box" },
  {
    id: 3,
    img: "/img/toa-heftiba-sHgXu7DWUX4-unsplash.jpg",
    title: "4-pack Small Ceramic Plates",
  },
  { id: 4, img: "/img/Rectangle 10.png", title: "Large Clear Glass Box" },
  { id: 5, img: "/img/Rectangle 11.png", title: "Round Jute Placemat" },
  { id: 6, img: "/img/Rectangle 12.png", title: "Metal Wire Basket" },
];

function App() {
  return (
    <div>
      <ProductContext.Provider value={cards}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Brand" element={<Brand />} />
            <Route path="/duvet cover sets" element={<SingleProducts />} />
            <Route path="/shopping" element={<Shopping />} />
          </Route>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/Productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
