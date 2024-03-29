import React from "react";
// components
import Carousel from "./carousel";
import Display from "./display";
import Footer from "./footer";
import NavBar from "./navBar";
import Products from "./products";

const Layout = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <Carousel />
      <div className="grid-container">
        <div className="left"></div>
        <div className="middle">
          <Display />
          <br />
          <br />
          {/* <ProductList /> */}
          <Products />
        </div>
        <div className="right"></div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
