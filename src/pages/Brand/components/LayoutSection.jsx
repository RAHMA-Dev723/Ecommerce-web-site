import React from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

function LayoutSection() {
  return (
    <div className="layout">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default LayoutSection;
