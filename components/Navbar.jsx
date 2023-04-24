import React from "react";

import Link from "next/link";
import { AiOutlineLogout, AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../contexts/StateContext";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import { StateContext } from "../contexts/StateContext";

function Navbar() {
  const { showCart, setShowCart, totalQuantities, setuser } = useStateContext();

  const handleLogout = () => {
    setuser(null);
    alert("User successfully signed out");
  };

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Salman Foods</Link>
      </p>

      <AiOutlineLogout onClick={handleLogout} color="red" size={25} />

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
}

export default Navbar;
