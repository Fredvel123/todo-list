import { configureStore } from "@reduxjs/toolkit";
import token from "./slices/token";
import theme from "./slices/theme";
import tasks from "./slices/tasks";

export const store = configureStore({
  reducer: {
    theme,
    token,
    tasks,
  },
});
