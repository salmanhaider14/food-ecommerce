import React from "react";

import Link from "next/link";
import {
  AiOutlineLogout,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../contexts/StateContext";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import { StateContext } from "../contexts/StateContext";

function Navbar() {
  const { showCart, setShowCart, totalQuantities, setUser, user } =
    useStateContext();
  const route = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    localStorage.removeItem("user");
    setUser(null);
    route.push("/login");

    alert("User successfully signed out");
  };

  return (
    <>
      {user && (
        <div className="navbar-container">
          <p className="logo">
            <Link href="/">Salman Foods</Link>
          </p>

          <AiOutlineLogout onClick={handleLogout} color="red" size={25} />
          <Link href={"/profile"}>
            <AiOutlineUser size={25} />
          </Link>

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
      )}
    </>
  );
}

export default Navbar;
