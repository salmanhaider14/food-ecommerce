import React, { useState } from "react";
import { useStateContext } from "../contexts/StateContext";
import LoginPage from "../pages/login";
import { AiOutlineUser } from "react-icons/ai";

const profile = () => {
  const { user } = useStateContext();

  return (
    <>
      {user ? (
        <div>
          <h1 style={{ textAlign: "center" }}>User Profile</h1>
          <div className="profile-container">
            <AiOutlineUser size={50} />
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                value={user?.displayName}
                readOnly
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" value={user?.email} readOnly />
            </div>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default profile;
