import { createTheme } from "@mui/material";

// setting custom breakpoints for mobile, tablet and desktop
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 360,
      tablet: 768,
      lg: 1280,
    },
  },
});

export default theme;
