import { useEffect } from "react";
// pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Main from "./pages/Main/Main";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// react touter
import { BrowserRouter, Routes, Route } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./redux/slices/theme";

function App() {
  const theme = useSelector((state) => state.theme.value);
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

  return (
    <BrowserRouter>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Main />} />

        {/* dashboard */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="menu" element={<h2>menu</h2>} />
          <Route path="tasks" element={<h2>task</h2>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Sign In */}
        <Route path="/signin" element={<h2>Sign In</h2>} />

        {/* Sign Up */}
        <Route path="/signup" element={<h2>Sign Up</h2>} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
