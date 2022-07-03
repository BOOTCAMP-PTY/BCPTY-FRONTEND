import React from 'react'
import { Container, Grid } from '@mui/material'
import CustomDrawer from '../components/CustomDrawer'
import DashboardHeader from '../components/DashboardHeader'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }): React.ReactElement => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        padding: '0 !important',
        backgroundColor: 'common.white',
      }}>
      <CustomDrawer />
      <Grid container sx={{ paddingLeft: { xs: 0, md: '128px' } }}>
        <DashboardHeader />
        <Grid xs={12} sx={{ p: { xs: '25px', sm: '51px 65px' }, overflow: 'hidden' }}>
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}
