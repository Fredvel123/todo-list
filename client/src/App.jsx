import { useEffect } from "react";
// react touter
import { BrowserRouter, Routes, Route } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./redux/slices/token";
import { setTheme } from "./redux/slices/theme";
// pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Main from "./pages/Main/Main";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Auth from "./pages/Auth/Auth";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import useToken from "./hooks/useToken";
import AllTasks from "./sections/AllTasks/AllTasks";
import CreateTasks from "./sections/CreateTasks/CreateTasks";

function App() {
  const theme = useSelector((state) => state.theme.value);
  // const token = uZseSelector((state) => state.token.value);
  const { token } = useToken();
  const dispatch = useDispatch();

  // storing theme in local storage
  useEffect(() => {
    const data = localStorage.getItem("theme");
    if (data !== null) {
      dispatch(setTheme(JSON.parse(data)));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  // storing the token in local starage

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));
    if (data) {
      dispatch(setToken(data));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Main />} />

        {/* dashboard */}
        <Route
          path="/dashboard/*"
          element={token.auth ? <Dashboard /> : <NotFoundPage />}
        >
          <Route path="menu" element={<h2>menu</h2>} />
          <Route path="create" element={<CreateTasks />} />
          <Route path="all" element={<AllTasks />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Sign Up - Sign Up */}
        <Route path="/auth" element={<Auth />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
