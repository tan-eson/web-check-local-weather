import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Severity } from "../../helpers/constants";
import { toggleShowSnackbar } from "../../redux/snackbarSlice";

export default function SharedSnackbar() {
  const dispatch = useDispatch();
  const showSnackbar = useSelector((state) => state.snackbar.open) ?? false;
  const snackbarMsg = useSelector((state) => state.snackbar.message) ?? "";
  const snackbarSeverity =
    useSelector((state) => state.snackbar.severity) ?? Severity.SUCCESS;

  function handleClose() {
    dispatch(
      toggleShowSnackbar({
        open: false,
      })
    );
  }

  return (
    <Snackbar
      open={showSnackbar}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={snackbarSeverity}>{snackbarMsg}</Alert>
    </Snackbar>
  );
}
