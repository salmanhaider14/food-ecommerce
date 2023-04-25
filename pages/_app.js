import "../styles/globals.css";
import React from "react";
import Layout from "../components/Layout";
import { StateContext } from "../contexts/StateContext";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
