import React from 'react'
import { Container } from '@mui/material'
import AsideBar from '../components/Drawer/AsideBar'
import HomeCourse from '../components/HomeLogin/HomeCourse'
export default function Log() {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        padding: '0 !important',
      }}>
      <AsideBar />
      <HomeCourse />
    </Container>
  )
}
