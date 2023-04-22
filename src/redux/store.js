import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notes/notesSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
    user:userSlice,
  },
});