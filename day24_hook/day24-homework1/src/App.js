import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  let firstname = useRef();
  let lastname = useRef();
  let gender = useRef();

  const [maleList, setMaleList] = useState([]);
  const [femaleList, setFemaleList] = useState([]);
  const [NAList, setNAList] = useState([]);

  const submitForm = () => {
    if (gender.current.value === "male") {
      // setMaleList(`${firstname.current.value} ${lastname.current.value}`);
      // let tempMaleList = [...maleList];
      // console.log(tempMaleList);
      // tempMaleList.push(`${firstname.current.value} ${lastname.current.value}`);
      // setMaleList(tempMaleList);
      setMaleList([
        ...maleList,
        {
          firstname: firstname.current.value,
          lastname: lastname.current.value,
        },
      ]);
    } else if (gender.current.value === "female") {
      setFemaleList([
        ...femaleList,
        {
          firstname: firstname.current.value,
          lastname: lastname.current.value,
        },
      ]);
    } else if (gender.current.value === "na") {
      setNAList([
        ...NAList,
        {
          firstname: firstname.current.value,
          lastname: lastname.current.value,
        },
      ]);
    }
  };

  // useEffect(() => {
  //   console.log(maleList.length);
  // }, [maleList, femaleList, NAList]);

  return (
    <>
      <input type="text" ref={firstname} />
      <input type="text" ref={lastname} />
      <select ref={gender}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="na">NA</option>
      </select>
      <input type="button" value="submit" onClick={submitForm} />

      <hr />
      <h2>Male List</h2>
      {maleList &&
        maleList.map((x) => {
          return (
            <ul>
              <li>
                {x.firstname} {x.lastname}
              </li>
            </ul>
          );
        })}
      {/* <p>{JSON.stringify(maleList)}</p> */}
      <p>Total: {maleList.length}</p>
      <h2>Female List</h2>
      {femaleList &&
        femaleList.map((x) => {
          return (
            <ul>
              <li>
                {x.firstname} {x.lastname}
              </li>
            </ul>
          );
        })}
      {/* <p>{JSON.stringify(femaleList)}</p> */}
      <p>Total: {femaleList.length}</p>
      <h2>NA List</h2>
      {NAList &&
        NAList.map((x) => {
          return (
            <ul>
              <li>
                {x.firstname} {x.lastname}
              </li>
            </ul>
          );
        })}
      {/* <p>{JSON.stringify(NAList)}</p> */}
      <p>Total: {NAList.length}</p>
    </>
  );
}

export default App;
