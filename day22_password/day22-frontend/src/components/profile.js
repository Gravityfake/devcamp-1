import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function Profile() {
  let navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    console.log(decoded);
    const name = decoded.username;
    setName(name);
    // var decodedHeader = jwt_decode(token, { header: true });
    // console.log(decodedHeader);
    if (token) {
      axios
        .get("/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // JWT in Authorization header
          },
        })
        .then((res) => {
          setCart(res.data);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            // token expired - remove and redirect to login
            localStorage.removeItem("token");
            navigate("/login");
          }
        });
    } else {
      navigate("/login");
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <>
      <h2>Hello K.{name}, this is your profile page</h2>
      <h3>My shopping cart items</h3>
      <ul>{cart && cart.map((c) => <li>{c.item}</li>)}</ul>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
}
