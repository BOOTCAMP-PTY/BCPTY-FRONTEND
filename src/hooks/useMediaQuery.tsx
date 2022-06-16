import { Breakpoint, useTheme } from '@mui/material/styles'
import { useMediaQuery as MUIUseMediaQuery } from '@mui/material/'

const useMediaQuery = (breakpoint: number | Breakpoint) => {
  const theme = useTheme()
  return MUIUseMediaQuery(theme.breakpoints.up(breakpoint))
}

export default useMediaQuery
