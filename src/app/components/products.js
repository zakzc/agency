import React from "react";
//
import data from "../data/data.json";

const Products = () => {
  const ProductDescription = ({ name, price, status }) => (
    <>
      <h4>{name}</h4>
      <p>{price}</p>
      <p>{status}</p>
    </>
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
