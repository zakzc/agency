import React from "react";
// assets
import outriders from "../assets/img/outriders.png";
// data
import data from "../data/data.json";

const Products = () => {
  const ProductDescription = ({ name, price, status }) => (
    <div className="w3-card-4">
      <img src={outriders} alt="Alps" style={{ width: "100px" }} />
      <div
        className="w3-container w3-center"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <h4>{name}</h4>
        <p>{price}</p>
        <p>{status}</p>
      </div>
    </div>
  );

  return (
    <div className="products">
      <h3>Produtos em Destaque</h3>
      {data.map((d, index) => (
        <div key={index}>
          <ProductDescription name={d.name} price={d.price} status={d.status} />
        </div>
      ))}
    </div>
  );
};
export default Products;
