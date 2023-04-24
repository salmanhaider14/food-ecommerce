import React, { useState } from "react";
import { useStateContext } from "../contexts/StateContext";

const profile = () => {
  const { user } = useStateContext();

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <label>Username</label>
        <p>{user && user.displayName}</p>
      </div>
      <div>
        <label>Email</label>
        <p>{user && user.email}</p>
      </div>
    </div>
  );
};

export default profile;
