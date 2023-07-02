import DeleteOutline from "@mui/icons-material/DeleteOutline";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Divider, Grid, IconButton, Typography, colors } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TitleTypography = styled(Typography)((props) => ({
  fontSize: "28px",
  marginBottom: "10px",

  [props.theme.breakpoints.down("lg")]: {
    fontSize: "24px",
  },

  [props.theme.breakpoints.down("tablet")]: {
    fontSize: "22px",
  },
}));

export const RecordTygraphy = styled(Typography)((props) => ({
  fontSize: "18px",

  [props.theme.breakpoints.down("lg")]: {
    fontSize: "16px",
  },
}));

export const EmptyStateTypography = styled(Typography)((props) => ({
  fontSize: "24px",
  fontWeight: 700,

  [props.theme.breakpoints.down("lg")]: {
    fontSize: "20px",
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
  border: `0.5px solid ${colors.grey[200]}`,
  backgroundColor: colors.grey[200],

  "&:hover": {
    boxShadow: "1.5px 1.5px 0px 0px rgba(0,0,0,1)",
    border: "0.5px solid black",
  },
}));

export const SearchIcon = styled(SearchOutlined)((props) => ({
  width: "24px",
  height: "24px",
  color: "black",
}));

export const TrashIcon = styled(DeleteOutline)((props) => ({
  width: "24px",
  height: "24px",
  color: "black",
}));
