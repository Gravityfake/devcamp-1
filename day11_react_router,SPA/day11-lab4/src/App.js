import {
  Routes,
  Route,
  Outlet,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import React from "react";

function App() {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

function PublicPage() {
  return <h3>Public Page</h3>;
}

function ProtectedPage() {
  let navigate = useNavigate();
  let auth = React.useContext(AuthContext);

  const onLogoutFunc = () => {
    auth.signout();
    navigate("/protected");
  };
  return (
    <>
      <h3>Protected Page</h3>
      <input type="button" value="Logout" onClick={onLogoutFunc} />
    </>
  );
}

function LoginPage() {
  let navigate = useNavigate();
  let auth = React.useContext(AuthContext);

  const onClickFunc = () => {
    auth.signin();
    navigate("/protected");
  };
  return <input type="button" value="Login" onClick={onClickFunc} />;
}

let AuthContext = React.createContext();

function AuthProvider(props) {
  let [isLogin, setIsLogin] = React.useState(false);
  let signin = () => {
    setIsLogin(true);
  };
  let signout = (callback) => {
    setIsLogin(false);
  };
  return (
    <AuthContext.Provider value={{ isLogin, signin, signout, name: "Robert" }}>
      {props.children}
    </AuthContext.Provider>
  );
}

function RequireAuth(props) {
  let auth = React.useContext(AuthContext);
  console.log(auth);
  return !auth.isLogin ? <Navigate to="/login" replace /> : props.children;
}

export default App;
