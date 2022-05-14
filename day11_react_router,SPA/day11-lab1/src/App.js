import "./App.css";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Portfolio from "./Portfolio";
import PortfolioDetail from "./PortfolioDetail";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Snack from "./Snack";
import SnackDetail from "./SnackDetail";

function App() {
  return (
    <div>
      <h1>Example</h1>
      {/* Routes ตรงนี้ไม่ได้ render อะไรทั้งสิ้น แค่เป็นตัว path */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* Product และ ProductDetail ใช้ filter */}
          <Route path="product" element={<Product />} />
          {/* ตรง id จริงๆจะใช้คำอื่นก็ได้ ขอให้ตรงกับที่เราตั้งใน component Product เพราะมันจะส่ง path ต่อมาให้*/}
          <Route path="product/:id" element={<ProductDetail />} />
          {/* จำเป็นต้องมี path="*" ทุกครั้ง เพราะกรณีที่ใส่ผิด(ไม่ว่าเราหรือ
          User) ก็จะได้มาหน้านี้ */}
          <Route path="*" element={<NoMatch />} />
          {/* lab1 */}
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:no" element={<PortfolioDetail />} />
          {/* Redirect with data */}
          <Route path="noodle" element={<Noodle />} />
          <Route path="noodle/detail" element={<NoodleDetail />} />
          {/* lab3 */}
          <Route path="snack" element={<Snack />} />
          <Route path="snack/detail" element={<SnackDetail />} />
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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* Product ตรงนี้ใช้ custom filter */}
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <Link to="/contact">นี้คือ Contact</Link>
          </li>
          <li>
            <Link to="/portfolio">นี้คือ Portfolio</Link>
          </li>
          {/* Redirect with data */}
          <li>
            <Link to="/noodle">Noodle</Link>
          </li>
          <li>
            <Link to="/snack">Snack</Link>
          </li>
        </ul>
      </nav>
      <hr />
      {/* มาจาก Route, ใน element ว่าให้มาออกตรงนี้ */}
      <Outlet />
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Contact() {
  return (
    <>
      <h2>ส่วนของ contact - test test test</h2>
    </>
  );
}

// แยก Component Product ไปที่ Product.js แล้ว
// เวลากดลิ้ง Product เข้ามาก็จะขึ้นอันนี้ก่อน
// พอกดเข้าไปในแต่ละ item ก็จะ filter ออกมาเฉพาะ details ของ item นั้นๆ
// function Product() {
//   const productList = [
//     { id: "01", name: "iPhone 11" },
//     { id: "02", name: "iPhone 12" },
//     { id: "03", name: "iPhone 13" },
//     { id: "04", name: "iPhone 14" },
//   ];
//   return (
//     <>
//       <h2>Product</h2>
//       <ul>
//         {productList.map((x) => (
//           <li>
//             {/* x.id ก็จะต่อกับ path ปัจจุบัน */}
//             <Link to={`${x.id}`}>{x.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// แยก Component ProductDetail ไปที่ Product.js แล้ว
// Render แต่ละ product
// function ProductDetail() {
//   let param = useParams();
//   console.log(param);
//   return (
//     <>
//       <h2>Product Detail</h2>
//       <p>You open product {param.id}</p>
//     </>
//   );
// }

function Noodle() {
  let navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let data = {
      topping: formData.getAll("toppings"),
      noodle: formData.get("noodle"),
    };
    // ให้เปลี่ยน path เป็น /noodle/detail
    navigate("/noodle/detail", { replace: true, state: { data } });
  }
  return (
    <>
      <form onSubmit={handleChange}>
        <p>What would you like?</p>
        <p>
          <label>
            <input type="radio" name="noodle" value="small" />
            เส้นเล็ก
          </label>
          <br />
          <label>
            <input type="radio" name="noodle" value="big" />
            เส้นใหญ่
          </label>
          <br />
          <label>
            <input type="radio" name="noodle" value="egg" />
            บะหมี่
          </label>
          <br />
        </p>

        <p>
          <label>
            {/* ตรง value ส่วนใหญ่ใช้ภาษาอังกฤษ ตัวเล็กหมด */}
            <input type="checkbox" name="toppings" value="meatBall" />
            ลูกชิ้น
          </label>
          <br />
          <label>
            <input type="checkbox" name="toppings" value="meat" />
            เนื้อ
          </label>
          <br />
          <label>
            <input type="checkbox" name="toppings" value="vegetable" />
            ผัก
          </label>
          <br />
          <label>
            <input type="checkbox" name="toppings" value="fish" />
            ปลา
          </label>
        </p>
        <input type="submit" />
      </form>
    </>
  );
}

function NoodleDetail() {
  const location = useLocation();
  console.log(location);
  // assign data(location.state.data) เข้า order แล้วเอา order ไป display
  let order = location.state.data;
  return (
    <>
      <h2>Noodel Detail</h2>
      <h3>
        คุณสั่งเส้น <span style={{ fontWeight: "normal" }}>{order.noodle}</span>
      </h3>
      <h3>
        คุณสั่ง Topping{" "}
        {order.topping.map((x) => (
          <span style={{ fontWeight: "normal" }}>{x} - </span>
        ))}
      </h3>
    </>
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
