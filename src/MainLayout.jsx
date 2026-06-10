import React from "react";
import BtmHeader from "./components/Header/BtmHeader";
import TopHeader from "./components/Header/TopHeader";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function MainLayout() {
  return (
    <>
      <TopHeader />
      <BtmHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
