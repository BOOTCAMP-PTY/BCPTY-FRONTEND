import React, { ReactElement, useMemo } from 'react'

import { CssBaseline } from '@mui/material'
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles'

import palette from './palette'
import typography from './typography'

interface ThemeProviderProps {
  children: React.ReactNode
}

interface ThemeOptions {
  palette?: object
  shape?: object
  typography?: object
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }): ReactElement => {
  const themeOptions = useMemo(
    () =>
      ({
        palette,
        shape: { borderRadius: 15 },
        typography,
      } as ThemeOptions),
    [],
  )

  const theme = createTheme(themeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
