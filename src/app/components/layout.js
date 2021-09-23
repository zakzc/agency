import React from "react";
// comps
import Banner from "./banner";
import Display from "./display";
import Footer from "./footer";
import NavBar from "./navBar";
import Products from "./products";

const Layout = () => {
  return (
    <div class="wrapper grid-container">
      <div class="header">
        <NavBar />
        <Banner />
      </div>

      <div class="left"></div>
      <div class="middle">
        <Display />
        <Products />
      </div>
      <div class="right"></div>

      <div class="footer">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
