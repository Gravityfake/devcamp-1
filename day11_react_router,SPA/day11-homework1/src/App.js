import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

function App() {
  return <Routing />;
}

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <ContainerComp>
      <MenuComp></MenuComp>
      <ContentComp></ContentComp>
    </ContainerComp>
  );
}

function ContainerComp(props) {
  return props.children;
}

function MenuComp() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
            <Link to="/wrongpath">Wrong Path</Link>
          </li> */}
        </ul>
      </nav>
      <hr />
    </>
  );
}

function ContentComp() {
  return (
    <>
      <Outlet />
      <hr />
    </>
  );
}

function NotMatch() {
  return <h2>Not Match</h2>;
}

export default App;
