import "./App.css";
import Login from "./components/login";

import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
import Register from "./components/register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
