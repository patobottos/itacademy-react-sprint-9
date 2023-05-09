import React, { useEffect, useState } from "react";
import { useMyContext } from "../../application/Provider";
import { Link, useNavigate } from "react-router-dom";

export const HandleLogout = () => {
  const [successfulLogin, setSuccessfulLogin] = useMyContext();
  const navigate = useNavigate();

  setSuccessfulLogin(false);
  localStorage.clear();

  console.log("Successfully logged out!");
  console.log("successfulLogin? ", successfulLogin);
  navigate("/");

  return (
    <div>
      <Link to="/">Successful login!</Link>
    </div>
  );
};
