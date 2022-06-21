import React from 'react'
import { Container, Grid } from '@mui/material'
import AsideBar from '../components/drawers/Drawer'
import HeaderPage from '../components/headers/HeaderPage/HeaderPage'
export default function Log() {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        padding: '0 !important',
        backgroundColor: 'common.white',
        display: 'flex',
      }}>
      <Grid container>
        <Grid item>
          <AsideBar />
        </Grid>
        <Grid item sx={{ display: 'flex', flexGrow: 1 }}>
          <HeaderPage />
        </Grid>
      </Grid>
    </Container>
  )
}
