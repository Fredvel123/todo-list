import { configureStore } from "@reduxjs/toolkit";
import token from "./slices/token";
import theme from "./slices/theme";

export const store = configureStore({
  reducer: {
    theme,
    token,
  },
});
