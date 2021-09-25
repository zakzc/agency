import React from "react";
// assets
import cyberpunk from "../assets/img/cyberpunk.png";
import kong from "../assets/img/kong.png";
import outriders from "../assets/img/outriders.png";
import squares from "../assets/img/squares.png";
// data
// import data from "../data/data.json";

const Products = () => {
  // * data
  const ProductData = [
    {
      name: "Outriders",
      imageRef: outriders,
      price: "200,00",
      status: true,
    },
    {
      name: "Cyberpunk",
      imageRef: cyberpunk,
      price: "200,00",
      status: false,
    },
    {
      name: "Donkey Kong Country Tropical",
      imageRef: kong,
      price: "200,00",
      status: false,
    },
  ];

  // * view

  const ProductHeader = () => {
    return (
      <div className="product-header">
        <img
          src={squares}
          alt="icon"
          style={{ width: "20px", marginRight: "10px" }}
        />
        <h3>Produtos em Destaque</h3>
      </div>
    );
  };

  const BuyButton = (buyingStatus) => {
    return (
      <button className="buyingButton" type="button">
        {buyingStatus.buyingStatus === true ? "Comprado" : "Comprar"}
      </button>
    );
  };

  const ProductDescription = ({ name, price, status, imageRef }) => {
    console.log(imageRef, typeof imageRef);
    return (
      <div
        className="card"
        style={{
          width: "180px",
          height: "250px",
        }}
      >
        <div style={{ margin: "auto" }}>
          <img src={imageRef} alt={name} className="card-image" />
          <div
            className="card-container"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <p>{name}</p>
            <h4 style={{ textDecoration: "bold" }}>{price}</h4>
            <BuyButton buyingStatus={status} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="products">
      <ProductHeader />
      <div className="product-list">
        {ProductData.map((d, index) => (
          <div key={index}>
            <ProductDescription
              name={d.name}
              price={d.price}
              status={d.status}
              imageRef={d.imageRef}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
