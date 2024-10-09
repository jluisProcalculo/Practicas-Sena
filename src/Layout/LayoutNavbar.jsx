import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const LayoutNavbar = () => {
  return (
    <div className="layout_navbar">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutNavbar;
