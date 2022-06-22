import React from 'react'
import { Container } from '@mui/material'
import AsideBar from '../components/drawers/AsideBar'
import HomeCourse from '../components/HomeLogin/HomeCourse'
export default function Log() {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        padding: '0 !important',
        backgroundColor: 'green',
        display: 'flex',
      }}>
      <AsideBar />
      <HomeCourse />
    </Container>
  )
}
