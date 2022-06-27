import React from 'react'
import Router from './routes/router'

import ThemeProvider from './theme'

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}
