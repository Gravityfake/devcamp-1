import logo from "./logo.svg";
import "./App.css";
// import React from "react";
import ProfileFuncComp from "./ProfileFunc";
import ProfileClassComp from "./Profileclass";
import React, { useState } from "react";

// const people = [
//   {
//     firstname: "Poppie",
//     lastname: "Finney",
//   },
//   {
//     firstname: "Hollie",
//     lastname: "Chang",
//   },
// ];

// Example 1

// const person = {
//   firstname: "Poppie",
//   lastname: "Finney",
// };

// const ProfileFuncComp = (props) => {
//   console.log(props);
//   return (
//     <>
//       <p>Firstname : {props.firstname}</p>
//       <p>Lastname : {props.lastname}</p>
//     </>
//   );
// };

// class ProfileClassComp extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <>
//         <p>Firstname : {this.props.firstname}</p>
//         <p>Lastname : {this.props.lastname}</p>
//       </>
//     );
//   }
// }

// function App() {
//   return (
//     <>
//       <ProfileClassComp
//         firstname={person.firstname}
//         lastname={person.lastname}
//       />
//       <ProfileFuncComp firstname="Hollie" lastname="Chang" />
//     </>
//   );
// }

// Example 3
// function App() {
//   return (
//     <>
//       <ProfileClassComp firstname="Poppie" lastname="Finney">
//         <h1>Student</h1>
//         <p>test</p>
//       </ProfileClassComp>
//       <ProfileFuncComp firstname="Hollie" lastname="Chang">
//         <h1>Teacher</h1>
//       </ProfileFuncComp>
//     </>
//   );
// }

// Synthetic Event - Target
// const changeForm = (e) => {
//   console.log(e.target.value);
//   console.log(e.target.type, e.target.name);
// };

// const blurForm = (e) => {
//   alert(`You out of Focus with Firstname "${e.target.value}"`);
// };

// const onClickFunc = (e) => {
//   console.log("You clicked!");
// };

// function App() {
//   return (
//     <>
//       <p>Firstname</p>
//       <input
//         type="text"
//         name="firstname"
//         onBlur={blurForm}
//         onChange={changeForm}
//         onClick={onClickFunc}
//       />
//     </>
//   );
// }

// Event Handler with Parameter
// const people = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Somchai" },
//   { id: 3, name: "Derp" },
// ];

// const clickButton = (e, name, id) => {
//   alert(`You click on name "${name} ${id}"`);
// };

// const changeInput = (e) => {
//   console.log("You change text.");
// };

// function App() {
//   const list = people.map((x) => (
//     <p key={x.id}>
//       {" "}
//       name: {x.name}{" "}
//       <span>
//         <input
//           type="button"
//           value="Click"
//           onClick={(e) => {
//             clickButton(e, x.name, x.id);
//           }}
//         ></input>
//       </span>
//     </p>
//   ));

//   const inputText = (
//     <input
//       type="text"
//       onChange={(e) => {
//         changeInput();
//       }}
//     ></input>
//   );

//   console.log(inputText.value);

//   return (
//     <>
//       {list} <br /> {inputText}
//     </>
//   );
// }

// ... with parameter

// const people = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Somchai" },
//   { id: 3, name: "Derp" },
// ];

// const onClickFunc = (e) => {
//   alert("ALERTTTTTTT");
// };

// const onChangeFunc = (e) => {
//   console.log(`form is changed`);
//   console.log(e.target.value);
// };

// // const onKeyPressFunc = (e) => {
// //   console.log(e.key);
// //   console.log(e.target.value);
// // };

// const onKeyPressFunc = (e, name) => {
//   console.log(e.key, name);
// };

// function App() {
//   // <>
//   // {/* <input type="text" name="password" onChange={onChangeFunc} /> */}
//   // {/* <input type="text" name="password" onKeyPress={onKeyPressFunc} /> */}
//   const list = people.map((x) => (
//     <input
//       type="text"
//       name="password"
//       onKeyPress={(e) => onKeyPressFunc(e, x.name)}
//     />
//     // <input type="button" value="CLICK ME" onClick={onClickFunc} />
//   ));

//   return <>{list}</>;
//   // </>
//   // );
// }

// state
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "John",
//       age: 30,
//       skills: [
//         { id: 1, name: "React" },
//         { id: 2, name: "NodeJS" },
//       ],
//     };
//   }

//   onclickFunc = (e) => {
//     //console.log("TEST");
//     this.setState({ age: 25 });
//   };

//   render() {
//     return (
//       <>
//         <p>Name : {this.state.name}</p>
//         <p>Age : {this.state.age}</p>
//         <ul>
//           {this.state.skills.map((skill) => (
//             <li key={skill.id}>{skill.name}</li>
//           ))}
//         </ul>
//         <input type="button" value="Click Me" onClick={this.onclickFunc} />
//       </>
//     );
//   }
// }

// Functional  - Declare State
// function App() {
//   const [member, setMember] = useState({
//     name: "John Mayer",
//     age: 30,
//     skills: [
//       { id: 1, name: "React" },
//       { id: 2, name: "NodeJS" },
//     ],
//   });

//   const [number, setNumber] = useState(0);

//   // เปลี่ยนทั้ง object
//   const onChangeAge = () => {
//     // let data = member;
//     // data.age = 20;
//     // console.log(member);
//     // setMember({ data });
//     setMember({ age: 20 });
//   };

//   return (
//     <>
//       <p>Name : {member.name}</p>
//       <p>Age : {member.age}</p>
//       <ul>
//         {member.skills &&
//           member.skills.map((skill) => <li key={skill.id}>{skill.name}</li>)}
//       </ul>
//       <button onClick={onChangeAge}>change age</button>
//     </>
//   );
// }

function App() {
  const [number, setNumber] = useState(10);

  const onClickFunction = (e) => {
    setNumber(number + 1);
  };

  return (
    <>
      <p>{number}</p>
      <input type="button" value="CLICK" onClick={onClickFunction} />
    </>
  );
}

export default App;

