import Home from "./pages/Home/Home";
import Brand from "./pages/Brand/Brand";
import SingleProducts from "./pages/single-products/SingleProducts";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Shopping from "./pages/Shopping/Shopping";
import MainLayout from "./MainLayout";
import Dashboard from "./pages/Dashbord/Dashboard";
// import ProductDetails from "./pages/Home/components/ProductDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Brand" element={<Brand />} />
          <Route path="/product/:id" element={<SingleProducts />} />{" "}
          <Route path="/shopping/:id" element={<Shopping />} />
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/Productdetails/:id" element={<ProductDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
