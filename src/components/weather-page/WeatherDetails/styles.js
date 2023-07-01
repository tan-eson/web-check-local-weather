import { Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TypographyStyled = styled(Typography)((props) => ({
  textTransform: "capitalize",
}));

export const LocationTypography = styled(Typography)((props) => ({
  textTransform: "capitalize",
  fontSize: "18px",

  [props.theme.breakpoints.down("lg")]: {
    fontSize: "16px",
  },
}));

export const WeatherTypography = styled(Typography)((props) => ({
  textTransform: "capitalize",
  fontSize: "36px",

  [props.theme.breakpoints.down("lg")]: {
    fontSize: "30px",
  },

  [props.theme.breakpoints.down("tablet")]: {
    fontSize: "25px",
  },
}));

export const DetailTypography = styled(Typography)((props) => ({
  textTransform: "capitalize",
  fontSize: "18px",

  [props.theme.breakpoints.down("lg")]: {
    fontSize: "18px",
  },

  [props.theme.breakpoints.down("tablet")]: {
    fontSize: "16px",
  },
}));

export const DividerStyled = styled(Divider)((props) => ({
  //
}));

export const OuterGridStyled = styled(Grid)((props) => ({
  //
}));

export const GridStyled = styled(Grid)((props) => ({
  minWidth: "100px",
}));

export const OuterGrid = styled(Grid)((props) => ({
  padding: "0px 40px 20px",
}));
