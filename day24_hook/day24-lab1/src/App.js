import "./App.css";
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  useReducer,
} from "react";
import { ProfileContext, ProfileContextProvider } from "./Provider";

// function App() {
//   let [number, setNumber] = useState(1);
//   return (
//     <>
//       <h1>{number}</h1>
//       <input
//         type="button"
//         value="click"
//         onClick={() => setNumber(number + 1)}
//       />
//     </>
//   );
// }

// function App() {
//   const [state, setState] = useState("initialState");

//   const onSetStatefunc = (data) => {
//     console.log(data); // initialState
//     // ตรง return จะไม่ใช้คำว่า data ก็ได้ ใช้คำว่า state ก็ได้
//     return data + 1; // initialState1
//   };

//   // หรือจะเขียนแบบนี้ก็ได้ ค่าเท่ากับฟังก์ชั่นบน (แค่ไม่ได้ log ค่าออกมา)
//   const onSetStatefunc2 = () => {
//     setState(state + "1");
//   };

//   return (
//     <>
//       <p>{state}</p>
//       <input
//         type="button"
//         value="click"
//         onClick={() => setState(onSetStatefunc2)}
//       />
//     </>
//   );
// }

// ในกรณีที่ initial Value ต้องถูกไป Process ก่อนตั้งเป็น Initial Value เราสามารถเขียนเป็น Function ได้ ------------------
// function App() {
//   return <Data value="2" />;
// }

// function Data(props) {
//   const calculation = (data) => {
//     return data * 2 + 10;
//   };

//   const [state, setState] = useState(() => {
//     const initialValue = calculation(props.value);
//     return initialValue;
//   });

//   return (
//     <>
//       <p>{state}</p>
//     </>
//   );
// }

// useEffect เป็น Hook ที่ จะทำงานเมื่อเกิดการเปลี่ยนแปลงค่า ของ State ที่เรากำหนดเอาไว้ แต่ถ้าไม่มีการกำหนด State ตัว useEffect จะทำงานเพียงครั้งเดียว
// function App() {
//   // จริงๆ  header ควรประกาศเป็น constant ธรรมดา เพราะค่าไม่มีการเปลี่ยนแปลง
//   const [header, setHeader] = useState("This is HEADER");
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     console.log("onetime useEffect");
//   }, []);

//   useEffect(() => {
//     console.log("Multi useEffect", counter);
//   }, [counter]);

//   return (
//     <>
//       <h1>{header}</h1>
//       <h3>count : {counter}</h3>
//       <input
//         type="button"
//         value="ADD COUNT"
//         onClick={() => setCounter(() => counter + 1)}
//       />
//     </>
//   );
// }

// In-class Code #1 ---------------------------------------------------------------------------------------
// function App() {
//   const header = "This is HEADER";
//   const [counter, setCounter] = useState(0);
//   const [counter2, setCounter2] = useState(0);

//   useEffect(() => {
//     console.log("onetime useEffect");
//   }, []);

//   useEffect(() => {
//     console.log("Multi useEffect", counter, counter2);
//   }, [counter, counter2]);

//   return (
//     <>
//       <h1>{header}</h1>
//       <h3>
//         count1 : {counter} | count2 : {counter2}
//       </h3>
//       <input
//         type="button"
//         value="ADD COUNT1"
//         onClick={() => setCounter(counter + 1)}
//       />
//       <input
//         type="button"
//         value="ADD COUNT2"
//         onClick={() => setCounter2(counter2 + 1)}
//       />
//     </>
//   );
// }

// In-class Code #2 ---------------------------------------------------------------------------------------
// function App() {
//   const carsListSpecs = [
//     {
//       id: "001",
//       Name: "chevrolet chevelle malibu",
//       Miles_per_Gallon: 18,
//       Cylinders: 8,
//       Displacement: 307,
//       Horsepower: 130,
//       Weight_in_lbs: 3504,
//       Acceleration: 12,
//       Year: "1970-01-01",
//       Origin: "USA",
//     },
//     {
//       id: "002",
//       Name: "buick skylark 320",
//       Miles_per_Gallon: 15,
//       Cylinders: 8,
//       Displacement: 350,
//       Horsepower: 165,
//       Weight_in_lbs: 3693,
//       Acceleration: 11.5,
//       Year: "1970-01-01",
//       Origin: "USA",
//     },
//     {
//       id: "003",
//       Name: "plymouth satellite",
//       Miles_per_Gallon: 18,
//       Cylinders: 8,
//       Displacement: 318,
//       Horsepower: 150,
//       Weight_in_lbs: 3436,
//       Acceleration: 11,
//       Year: "1970-01-01",
//       Origin: "USA",
//     },
//     {
//       id: "004",
//       Name: "amc rebel sst",
//       Miles_per_Gallon: 16,
//       Cylinders: 8,
//       Displacement: 304,
//       Horsepower: 150,
//       Weight_in_lbs: 3433,
//       Acceleration: 12,
//       Year: "1970-01-01",
//       Origin: "USA",
//     },
//   ];

//   const [currentCar, setCurrentCar] = useState();
//   const [carDetail, setCarDetail] = useState();

//   useEffect(() => {
//     let getCarDetail = carsListSpecs.find((x) => x.id === currentCar);
//     setCarDetail(getCarDetail);
//   }, [currentCar]);

//   return (
//     <>
//       <h1>Select CAR</h1>
//       <select onChange={(e) => setCurrentCar(e.target.value)} defaultValue={""}>
//         <option value="" disabled>
//           Select Your Car
//         </option>
//         <option value="001">Volvo</option>
//         <option value="002">Saab</option>
//         <option value="003">Mercedes</option>
//         <option value="004">Audi</option>
//       </select>
//       <hr />
//       <h3>CAR DETAIL</h3>
//       {carDetail ? <p>{JSON.stringify(carDetail.Name)}</p> : <p></p>}
//     </>
//   );
// }

// แยกไฟล์แล้ว
// let ProfileContext = createContext();
// function ProfileContextProvider(props) {
//   const data = "test";
//   let [firstname, setFirstName] = useState("Steve");
//   let [lastname, setLastname] = useState("Roger");
//   let setName = (firstname, lastname) => {
//     setFirstName(firstname);
//     setLastname(lastname);
//   };
//   return (
//     <ProfileContext.Provider value={{ data, firstname, lastname, setName }}>
//       {/* {props.children} */}
//       <InformationPage />
//       <ChangeValuePage />
//     </ProfileContext.Provider>
//   );
// }

// useContext ---------------------------------------------------------------------------
// createContext() อยู่ในไฟล์ Provider
// function InformationPage() {
//   let profile = useContext(ProfileContext);
//   console.log(profile);
//   return (
//     <>
//       <h1>Profile</h1>
//       <h3>First Name: {profile.firstname}</h3>
//       <h3>Last Name: {profile.lastname}</h3>
//     </>
//   );
// }
// function ChangeValuePage() {
//   let profile = useContext(ProfileContext);
//   console.log(profile);
//   return (
//     <input
//       type="button"
//       value="Set Ironman"
//       onClick={() => profile.setName("Tony", "Stark")}
//     />
//   );
// }

// function App() {
//   return (
//     <ProfileContextProvider>
//       <InformationPage />
//       <ChangeValuePage />
//     </ProfileContextProvider>
//   );
// }

// useContext ---------------------------------------------------------
// let demoContext = createContext();
// function App() {
//   let demoHeader = "DemoHeader";
//   let [name, setName] = useState("Steve");
//   return (
//     <demoContext.Provider value={{ demoHeader, name, setName }}>
//       <Data />
//     </demoContext.Provider>
//   );
// }

// function Data() {
//   let context = useContext(demoContext);
//   console.log(context);
//   return (
//     <>
//       <Data2 />
//     </>
//   );
// }

// function Data2() {
//   let context = useContext(demoContext);
//   console.log(context);
//   return (
//     <>
//       <p>TEST DATA2</p>
//     </>
//   );
// }

//useRef --------------------------------------------------------
// function App() {
//   let mutable = useRef("start");
//   const formRef = useRef();

//   const [name, setName] = useState("Initial Name");

//   const onClickFunc = () => {
//     // console.log(mutable.current); // start
//     // mutable.current = "endddd";
//     // console.log(formRef.current.value); // คำที่พิมพ์เข้าไป
//     mutable.current = formRef.current.value;
//     formRef.current.focus();
//     setName(formRef.current.value);
//   };

//   return (
//     <>
//       <h1>
//         {name} {mutable.current}
//       </h1>
//       <input type="text" ref={formRef} />
//       <input type="button" value="click" onClick={onClickFunc} />
//     </>
//   );
// }

// useReducer -------------------------------------------------------------------
// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//   }
// }
// function Counter() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <>
//       <h1>Count: {state.count}</h1>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//     </>
//   );
// }
// function App() {
//   return <Counter />;
// }

// Lab useReduce ----------------------------------------------------------------------------
// function reduce(countNum, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: countNum.count + 1, count2: countNum.count2 + 2 };
//     case "decrement":
//       return { count: countNum.count - 1, count2: countNum.count2 - 2 };
//     case "multiplyBy2":
//       return { count: countNum.count * 2 };
//     case "divideBy2":
//       return { count: countNum.count / 2 };
//   }
// }
// function Counter() {
//   const [countNum, dispatch] = useReducer(reduce, { count: 1, count2: 2 });

//   return (
//     <>
//       <h1>
//         Count: {countNum.count} | Count2: {countNum.count2}
//       </h1>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "multiplyBy2" })}>*</button>
//       <button onClick={() => dispatch({ type: "divideBy2" })}>/</button>
//     </>
//   );
// }
// function App() {
//   return <Counter />;
// }

// Custom Hook
// import useStateObj from "./useObject";

// function App() {
//   let [value, setValue] = useStateObj({
//     firstname: "Steve",
//     lastname: "Roger",
//     age: 50,
//   });
//   const onClickFunc = () => {
//     setValue({ age: 2000 });
//   };
//   return (
//     <>
//       <h1>{JSON.stringify(value)}</h1>
//       <input type="button" value="Click" onClick={onClickFunc} />
//     </>
//   );
// }

export default App;
