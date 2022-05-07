import "./App.css";
import React from "react";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const random = getRandomIntInclusive(20, 40);
const randomBox = getRandomIntInclusive(150, 250);

const colors = ["red", "blue", "green", "purple", "pink"];
const boxColor = colors[Math.floor(Math.random() * colors.length)];

class RandomBox extends React.Component {
  render() {
    return (
      <div
        style={{
          width: `${randomBox}px`,
          height: `${randomBox}px`,
          backgroundColor: `${boxColor}`,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: `${random}px` }}>Random Box</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <RandomBox />
    </div>
  );
}

export default App;
