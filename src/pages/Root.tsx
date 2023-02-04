import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import GlobalHeader from "../components/Header/GlobalHeader";

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <GlobalHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
