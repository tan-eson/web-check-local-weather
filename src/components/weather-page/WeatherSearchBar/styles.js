import {
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const TypographyStyled = styled(Typography)((props) => ({
  fontSize: "28px",

  [props.theme.breakpoints.down("lg")]: {
    fontSize: "24px",
  },

  [props.theme.breakpoints.down("tablet")]: {
    fontSize: "22px",
  },
}));

export const DividerStyled = styled(Divider)((props) => ({
  margin: "10px auto 20px auto",
}));

export const TextFieldStyled = styled(TextField)((props) => ({
  width: "100%",

  ".MuiInputBase-root": {
    borderRadius: "4px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },

  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "black",
  },

  ".MuiInputLabel-root.Mui-focused": {
    color: "black",
  },
}));

export const ButtonStyled = styled(Button)((props) => ({
  marginRight: "5px",
  minWidth: "150px",
  padding: "8px",
  textTransform: "capitalize",
  border: `1px solid ${colors.cyan[700]}`,
  backgroundColor: colors.cyan[700],

  "&:hover": {
    backgroundColor: colors.cyan[800],
    boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
    border: "1px solid black",
  },

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
