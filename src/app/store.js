import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.js";
import usersReducer from "../features/users/usersSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
