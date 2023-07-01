import { Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TypographyStyled = styled(Typography)((props) => ({
  textTransform: "capitalize",
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
  padding: "40px",
}));
