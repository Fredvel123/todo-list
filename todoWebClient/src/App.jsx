import { useEffect } from "react";
// react touter
import { BrowserRouter, Routes, Route } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./redux/slices/token";
import { setTheme } from "./redux/slices/theme";
import { setTasks } from "./redux/slices/tasks";

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
import Settings from "./sections/Settings/Settings";
import useTasks from "./hooks/useTasks";
import ActiveTasks from "./sections/ActiveTasks/ActiveTasks";
import CompleteTasks from "./sections/DoneTasks/CompleteTasks";
import ForgottenPassword from "./pages/ForgottenPassword/ForgottenPassword";

function App() {
  const theme = useSelector((state) => state.theme.value);
  // const tasks = useSelector((state) => state.tasks.value);
  const { tasks } = useTasks();
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

  // storing the tasks in local starage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (data) {
      dispatch(setTasks(data));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
          <Route path="create" element={<CreateTasks />} />
          <Route path="all" element={<AllTasks />} />
          <Route path="settings" element={<Settings />} />
          <Route path="active" element={<ActiveTasks />} />
          <Route path="complete" element={<CompleteTasks />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Sign Up - Sign Up */}
        <Route path="/auth" element={<Auth />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        {/* forgotten password  */}
        <Route path="password" element={<ForgottenPassword />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
