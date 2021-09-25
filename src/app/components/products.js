import React from "react";
// assets
import outriders from "../assets/img/outriders.png";
import cyberpunk from "../assets/img/cyberpunk.png";
import kong from "../assets/img/kong.png";
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
  const ProductDescription = ({ name, price, status, imageRef }) => {
    console.log(imageRef, typeof imageRef);
    return (
      <div
        className="card"
        style={{
          width: "180px",
        }}
      >
        <div style={{ margin: "auto" }}>
          <img
            src={imageRef}
            alt={name}
            style={{
              width: "120px",
            }}
          />
          <div
            className="card-container"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <p>{name}</p>
            <h4 style={{ textDecoration: "bold" }}>{price}</h4>
            <p>{status ? "Comprado" : "Comprar"}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="products">
      <h3>Produtos em Destaque</h3>
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
  );
};
export default Products;
