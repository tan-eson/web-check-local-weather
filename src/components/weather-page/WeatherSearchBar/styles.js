import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TypographyStyled = styled(Typography)((props) => ({
  //
}));

export const DividerStyled = styled(Divider)((props) => ({
  margin: "10px auto 20px auto",
}));

export const TextFieldStyled = styled(TextField)((props) => ({
  width: "100%",
  "&.MuiInputBase-root": {
    border: `1px solid black`,
    borderRadius: "4px",
    minHeight: "50px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },

  "& .MuiInputLabel-root": {
    pointerEvents: "none",
  },
}));

export const ButtonStyled = styled(Button)((props) => ({
  marginRight: "5px",
  minWidth: "150px",
  padding: "8px",
  textTransform: "capitalize",

  [props.theme.breakpoints.down("lg")]: {
    minWidth: "80px",
  },

  [props.theme.breakpoints.down("tablet")]: {
    minWidth: "150px",
  },
}));

export const OuterGridStyled = styled(Grid)((props) => ({
  padding: "20px 10px 0 10px",
  marginBottom: "20px",
}));

export const GridStyled = styled(Grid)((props) => ({
  //
}));
