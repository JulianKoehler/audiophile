import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import GlobalHeader from "../components/Header/GlobalHeader";

const Root = () => {
  return (
    <>
      <GlobalHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
