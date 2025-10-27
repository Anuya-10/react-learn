import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/header/header.jsx";
import Footer from "./component/footer/footer.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
