import "./App.css";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {
  let [todo, setTodo] = useState([]);

  let today = new Date();

  const enterComment = (e) => {
    if (e.keyCode === 13 && e.target.value === "") {
      alert("Error! Please add Todo list!");
    } else if (e.keyCode === 13 && e.target.value !== "") {
      //console.log(todo);
      let tempTodo = [...todo];
      tempTodo.push({
        textTodo: e.target.value,
        dateTodo:
          today.getDate() +
          "-" +
          parseInt(today.getMonth() + 1) +
          "-" +
          today.getFullYear(),
      });
      setTodo(tempTodo);
      e.target.value = "";
    }
  };

  function deleteTodo(x) {
    let del = todo.filter((y) => y.textTodo !== x.textTodo);
    setTodo(del);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TO DO LIST</h1>

      {todo.map((x) => (
        <>
          <TodoList textTodo={x.textTodo} dateTodo={x.dateTodo} />
          <button style={{ marginLeft: "50px" }} onClick={() => deleteTodo(x)}>
            Delete
          </button>
        </>
      ))}
      <br />
      <input
        style={{ marginLeft: "50px" }}
        type="text"
        onKeyUp={enterComment}
      />
    </div>
  );
}

export default App;
