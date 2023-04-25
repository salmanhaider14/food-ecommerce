import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../contexts/StateContext";
import { runFireworks } from "../lib/utils";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <head>
        <title>Success</title>
      </head>
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You For Your Order</h2>
        <p className="email-msg">Check Your Email Inbox For Receipt</p>
        <p className="description">
          If You have any questions please email{" "}
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn" width="300px">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
