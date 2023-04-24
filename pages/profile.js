import React, { useState } from "react";
import { useStateContext } from "../contexts/StateContext";
import LoginPage from "../pages/login";

const profile = () => {
  const { user } = useStateContext();

  return (
    <>
      {user ? (
        <div>
          <h1 style={{ textAlign: "center" }}>User Profile</h1>
          <div>
            <label>Username</label>
            <p>{user && user.displayName}</p>
          </div>
          <div>
            <label>Email</label>
            <p>{user && user.email}</p>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default profile;
