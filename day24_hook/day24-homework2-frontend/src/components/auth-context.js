import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!localStorage.getItem("token");

  const [name, setName] = useState(null);
  // const token = localStorage.getItem("token");
  useEffect(() => {
    if (userIsLoggedIn) {
      var decoded = jwt_decode(localStorage.getItem("token"));
      console.log(decoded);
      const userName = decoded.username;
      setName(userName);
    }
  }, [userIsLoggedIn]);

  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    name: name,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
