import React from "react";
import { useContext } from "react";
import AuthContext from "./auth-context";

const Warehouse = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <>
      {isLoggedIn ? (
        <div style={{ margin: "100px" }}>Warehouse</div>
      ) : (
        <div style={{ margin: "100px" }}>You need to log in first.</div>
      )}
    </>
  );
};

export default Warehouse;
