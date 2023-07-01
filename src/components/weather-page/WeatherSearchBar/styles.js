import {
  Button,
  Divider,
  Grid,
  InputBase,
  InputLabel,
  Typography,
  colors,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const TypographyStyled = styled(Typography)((props) => ({
  //
}));

export const DividerStyled = styled(Divider)((props) => ({
  margin: "10px auto",
}));

export const InputBaseStyled = styled(InputBase)((props) => ({
  width: "100%",
  "&.MuiInputBase-root": {
    border: `1px solid black`,
    borderRadius: "4px",
    minHeight: "60px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
}));

export const InputLabelStyled = styled(InputLabel)((props) => ({
  //
}));

export const ButtonStyled = styled(Button)((props) => ({
  marginRight: "5px",
  minWidth: "150px",
  padding: "8px",

  [props.theme.breakpoints.down("lg")]: {
    minWidth: "80px",
  },

  [props.theme.breakpoints.down("tablet")]: {
    minWidth: "150px",
  },
}));

export const OuterGridStyled = styled(Grid)((props) => ({
  //
}));

export const GridStyled = styled(Grid)((props) => ({
  //
}));

export const ErrorGrid = styled(Grid)((props) => ({
  color: colors.red,
  padding: "5px",
  width: "100%",
  backgroundColor: "#f75443",
  border: `1px solid ${colors.red}`,
}));

export const ErrorTypographyStyled = styled(Typography)((props) => ({
  color: colors.red,
}));
