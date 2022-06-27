import React from 'react'
import { Container, Grid } from '@mui/material'
import AsideBar from '../components/Drawer/AsideBar'
import HomePage from '../components/Content/HomePage'
export default function DashBoard() {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        padding: '0 !important',
      }}>
      <Grid container sx={{ display: 'flex' }}>
        <Grid item>
          <AsideBar />
        </Grid>
        <Grid item xs sx={{ ml: '128px' }}>
          <HomePage />
        </Grid>
      </Grid>
    </Container>
  )
}
