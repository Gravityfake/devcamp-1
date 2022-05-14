import { Routes, Route, Outlet, Link } from "react-router-dom";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import WarehouseLocation from "./Warehouse";
import WarehouseDetail from "./WarehouseDetail";
import WarehouseLocation2 from "./Warehouse2";
import WarehouseDetail2 from "./WarehouseDetail2";

function App() {
  return (
    <div>
      <h1>Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shopstock" element={<Product />} />
          <Route path="shopstock/:id" element={<ProductDetail />} />
          <Route path="warehouselocation" element={<WarehouseLocation />} />
          <Route
            path="warehouselocation/:id/:warehouse_name/:latitude/:longitude/:tel/:fax"
            element={<WarehouseDetail />}
          />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
          {/* ใช้ useNavigate, useLocation */}
          <Route path="warehouselocation2" element={<WarehouseLocation2 />} />
          <Route path="warehousedetail2" element={<WarehouseDetail2 />} />
        </Route>
      </Routes>
      <hr />
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shopstock">Shop Stock</Link>
          </li>
          <li>
            <Link to="/warehouselocation">Warehouse Location</Link>
          </li>
          <li>
            <Link to="/warehouselocation2">Warehouse Location 2</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
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
