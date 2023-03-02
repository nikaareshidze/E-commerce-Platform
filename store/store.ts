import { configureStore } from "@reduxjs/toolkit";
import hiddenMenuSlice from "./hiddenMenuSlice";

export const store = configureStore({
  reducer: { hiddenMenu: hiddenMenuSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
