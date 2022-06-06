import { createTheme } from "@mui/material";

const theme = createTheme({})

theme.typography.h1 = {
  "@media (min-width:600px)": {
    fontSize: "2.4rem",
    margin: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
    margin: "1.5rem",
  },
};

theme.typography.body1 = {
  "@media (max-width:600px)": {
    fontSize: "1.5rem",
    margin: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
    margin: "1.5rem",
  },
};

export default theme