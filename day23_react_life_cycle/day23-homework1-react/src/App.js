import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return <Data />;
  }
}

class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "Unknown User",
      nameList: [],
    };
  }

  componentDidMount() {
    let person = prompt("Please enter your name:");
    if (person) {
      this.setState({ username: person });
    }
    console.log(this.state.username);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // ต้อง return true ด้วย เพื่อ update ค่า
    if (nextState.username === this.state.username) {
      alert("You didn't change your name");
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.username}</h1>
        <input id="btn-user" />
        <input
          type="button"
          value="Change my name"
          onClick={() => {
            const name = document.getElementById("btn-user").value;
            let date = new Date().toString();
            this.setState({
              username: name ? name : "Unknown User",
              nameList: [
                ...this.state.nameList,
                {
                  current: this.state.username,
                  next: name ? name : "Unknown User",
                  date: date,
                },
              ],
            });
          }}
        />
        {this.state.nameList.map((x) => {
          return (
            <div>
              <p>
                Old name: {x.current}, New name: {x.next}, Date: {x.date}
              </p>
            </div>
          );
        })}
      </>
    );
  }
}

export default App;
