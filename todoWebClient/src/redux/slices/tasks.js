import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    value: [],
  },
  reducers: {
    setTasks: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
