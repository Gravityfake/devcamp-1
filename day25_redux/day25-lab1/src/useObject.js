import { useState } from "react";

const useStateObj = (initialValue) => {
  let [objValue, setObjValue] = useState(initialValue);

  let setValue = (value) => {
    let newValue = { ...objValue };

    Object.entries(value).forEach((entry) => {
      console.log(entry);
      const [key, value] = entry;
      newValue[key] = value;
    });

    setObjValue(newValue);
  };

  return [objValue, setValue];
};

export default useStateObj;
