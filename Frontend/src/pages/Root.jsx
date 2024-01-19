import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
const Root = () => {
  return (
    <>
      <NavbarTop />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
