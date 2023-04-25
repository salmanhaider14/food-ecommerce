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
      {/* {user && (
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
      )} */}

      {user && (
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand ps-3" href="/">
              Foodie
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto pe-5">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/product"
                  >
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <Link href={"/profile"}>
                      <AiOutlineUser size={25} />
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <button
                      type="button"
                      className="cart-icon"
                      onClick={() => setShowCart(true)}
                    >
                      <span className="cart-item-qty">{totalQuantities}</span>
                      <AiOutlineShopping />
                    </button>
                    {showCart && <Cart />}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ">
                    <AiOutlineLogout
                      onClick={handleLogout}
                      color="red"
                      size={25}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
