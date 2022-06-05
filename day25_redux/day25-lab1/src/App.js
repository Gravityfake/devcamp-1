import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setDefault } from "./calculateReducer";
import { changeName, changeLastname } from "./profileReducer";

function App() {
  // ใช้เรียก Actions

  return (
    <>
      <ProfileComp />
      <hr />
      <DisplayComp />
      <ButtonComp />
    </>
  );
}

function DisplayComp() {
  const count = useSelector((state) => state.counter);
  return <h1>{count.salary}</h1>;
}

function ButtonComp() {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="button"
        value="Increase Salary"
        onClick={() => dispatch(increment())}
      />
      <input
        type="button"
        value="Decreate Salary"
        onClick={() => dispatch(decrement())}
      />
      <input
        type="button"
        value="Default Salary"
        onClick={() => dispatch(setDefault(20000))}
      />
    </>
  );
}

function ProfileComp() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <>
      <p>{JSON.stringify(profile)}</p>
      <p>
        Firstname:{" "}
        <input
          type="text"
          onChange={(e) => dispatch(changeName(e.target.value))}
        />
      </p>
      <p>
        Lastname:{" "}
        <input
          type="text"
          onChange={(e) => dispatch(changeLastname(e.target.value))}
        />
      </p>
    </>
  );
}

export default App;
