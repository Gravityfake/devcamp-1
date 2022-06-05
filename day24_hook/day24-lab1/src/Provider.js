import React, { useState, createContext, useContext } from "react";

let ProfileContext = createContext();

function ProfileContextProvider(props) {
  const data = "test";
  let [firstname, setFirstName] = useState("Steve");
  let [lastname, setLastname] = useState("Roger");
  let setName = (firstname, lastname) => {
    setFirstName(firstname);
    setLastname(lastname);
  };
  return (
    <ProfileContext.Provider value={{ data, firstname, lastname, setName }}>
      {props.children}
      {/* พอแยกไฟล์มาแล้วจะใช้แบบข้างล่างนี้ไม่ได้ ต้องเขียนเป็น {props.children} แบบข้างบน 
      (เพราะถ้าจะใช้ต้อง import file ???) */}
      {/* <InformationPage />
      <ChangeValuePage /> */}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileContextProvider };
