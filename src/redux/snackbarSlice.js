import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "",
  severity: "success",
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    toggleShowSnackbar: (state, action) => {
      const {
        open: _open,
        message: _message,
        severity: _severity,
      } = action.payload;

      state.open = _open ?? false;
      state.message = _message ?? "";
      state.severity = _severity ?? state.severity; // prevents ui shift milliseconds before closing
    },
  },
});

export const { toggleShowSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
