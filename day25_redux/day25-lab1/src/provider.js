import React, { useState, createContext, useContext, useRef } from "react";

let ProfileContext = createContext();

function ProfileContextProvider(props) {
  const data = "TEST";
  let [firstname, setFirstName] = useState("Steve");
  let [lastname, setLastname] = useState("Roger");
  let setName = (firstname, lastname) => {
    setFirstName(firstname);
    setLastname(lastname);
  };
  return (
    <ProfileContext.Provider value={{ data, firstname, lastname, setName }}>
      {props.children}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileContextProvider };
