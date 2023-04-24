import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";
import { useStateContext } from "../contexts/StateContext";
import LoginPage from "./login";

const Home = ({ products, bannerData }) => {
  const { user } = useStateContext();
  return (
    <>
      {user ? (
        <div>
          <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

          <div className="products-heading">
            <h2>Top Selling Products</h2>
            <p>Delicous Meal For Every Time</p>
          </div>
          <div className="products-container">
            {products?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <FooterBanner footerBanner={bannerData && bannerData[0]} />
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
