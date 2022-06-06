import { useTheme } from "@mui/material/styles";
import { useMediaQuery as MUIUseMediaQuery } from "@mui/material/";

const useMediaQuery = (breakpoint) => {
  const theme = useTheme();
  const matches = MUIUseMediaQuery(theme.breakpoints.up(breakpoint));

  return matches;
}

export default useMediaQuery
