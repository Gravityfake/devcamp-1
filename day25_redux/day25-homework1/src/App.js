import "./App.css";
import NavbarMenu from "./Navbar";
import Cart from "./Cart";
import ProfileForm from "./ProfileForm";
import ProductListComp from "./ProductListComp";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <NavbarMenu />
    // </div>
    <Routes>
      <Route index element={<NavbarMenu />} />
      <Route path="/profile" element={<ProfileForm />}></Route>
      <Route path="/product" element={<ProductListComp />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}

function NoMatch() {
  return (
    <>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}

export default App;
