import { configureStore } from "@reduxjs/toolkit";
import snackbarSlice from "./snackbarSlice";
import weatherSlice from "./weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    snackbar: snackbarSlice,
  },
});
