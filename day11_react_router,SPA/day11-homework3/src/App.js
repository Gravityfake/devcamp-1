import "antd/dist/antd.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Employee from "./Employee";
import EmployeeDetail from "./EmployeeDetail";
import Department from "./Department";
import employeeList from "./data";

function App() {
  return <Routing />;
}

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="employee" element={<Employee />} />
        <Route
          //path="employee/:id/:firstname/:lastname/:position/:department"
          path="employee-detail"
          element={<EmployeeDetail />}
        />
        <Route path="department" element={<Department />} />
        <Route path="employee/:department" element={<Employee />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <ContainerComp>
      <HeaderComp></HeaderComp>
      <MenuComp></MenuComp>
      <ContentComp></ContentComp>
      <FooterComp></FooterComp>
    </ContainerComp>
  );
}

function ContainerComp(props) {
  return props.children;
}

function HeaderComp() {
  return (
    <>
      <h1>Header</h1>
      <hr />
    </>
  );
}

function MenuComp() {
  return (
    <>
      <h1>Menu</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employee">Employee List</Link>
          </li>
          <li>
            <Link to="/department">Department List</Link>
          </li>
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

function FooterComp() {
  return (
    <>
      <h1>Footer</h1>
      <hr />
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function NotMatch() {
  return <h2>Not Match</h2>;
}

export default App;
