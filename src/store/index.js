import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post.slice";

export const store = configureStore({
  reducer: {
    post: postSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
