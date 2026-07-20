import React from "react";
import "./Dashboard.css";
import MainArea from "./components/Mainarea";
import SideBar from "./components/SideBar";
import Header from "./Header";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-main">
        <SideBar />
        <MainArea />
      </div>
    </div>
  );
}

export default Dashboard;
