import React from "react";

const CarouselText = ({ bannerHeader, bannerText, itemPrice, itemCents }) => {
  // * data

  return (
    <div className="banner-text-container">
      <h1>{bannerHeader}</h1>
      <h2 className="price-stamp">
        <span className="sub">{itemPrice}</span>
        <span className="sup">,{itemCents}</span>
      </h2>
      <div className="banner-text-area">{bannerText}</div>
    </div>
  );
};
export default CarouselText;
