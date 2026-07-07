import Home from "./pages/Home/Home";
import Brand from "./pages/Brand/Brand";
import SingleProducts from "./pages/single-products/SingleProducts";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Shopping from "./pages/Shopping/Shopping";
import MainLayout from "./MainLayout";
import Dashboard from "./pages/Dashbord/Dashboard";
import Checkout from "./pages/checkout/Checkout";
import ThankYou from "./pages/ThankYou/ThankYou";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Brand" element={<Brand />} />
          <Route path="/product/:id" element={<SingleProducts />} />{" "}
          <Route path="/shopping/:id" element={<Shopping />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
