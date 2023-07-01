import DeleteOutline from "@mui/icons-material/DeleteOutline";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TitleTypography = styled(Typography)((props) => ({
  fontSize: "28px",
  marginBottom: "10px",

  [props.theme.breakpoints.down("lg")]: {
    fontSize: "24px",
  },
}));

export const RecordTygraphy = styled(Typography)((props) => ({
  fontSize: "18px",

  [props.theme.breakpoints.down("lg")]: {
    fontSize: "16px",
  },
}));

export const EmptyStateTypography = styled(Typography)((props) => ({
  fontSize: "18px",
  fontWeight: 700,

  [props.theme.breakpoints.down("lg")]: {
    fontSize: "14px",
  },
}));

export const DividerStyled = styled(Divider)((props) => ({
  //
}));

export const GridStyled = styled(Grid)((props) => ({
  //
}));

export const OuterGrid = styled(Grid)((props) => ({
  padding: "0 10px 0 10px",
}));

export const IconButtonStyled = styled(IconButton)((props) => ({
  //
}));

export const SearchIcon = styled(SearchOutlined)((props) => ({
  width: "24px",
  height: "24px",
}));

export const TrashIcon = styled(DeleteOutline)((props) => ({
  width: "24px",
  height: "24px",
}));
