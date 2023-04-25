import React, { useState } from "react";
import { client } from "../../lib/client";
import { Product } from "../../components";
import Head from "next/head";

const Products = ({ products }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  return (
    <div>
      <head>
        <title>Products</title>
      </head>
      <h1 style={{ textAlign: "center", paddingTop: "1rem" }}>Our Products</h1>
      <div className="sidebar">
        <h1>Filteration</h1>

        <ul>
          <li>
            <input
              type="text"
              placeholder="search.."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </li>

          <li>
            <div>
              <span>Min price</span>
              <input
                type="range"
                min="0"
                max="100"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <span>${minPrice}</span>
            </div>
          </li>
          <li>
            <div>
              <span>Max price</span>
              <input
                type="range"
                min="0"
                max="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>${maxPrice}</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="items-container">
        {filteredProducts(products)?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};
export default Products;
