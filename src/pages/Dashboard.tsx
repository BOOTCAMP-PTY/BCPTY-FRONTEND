import React from 'react'
import { Container } from '@mui/material'
import HeaderPage from '../components/headers/HeaderPage'

export default function Log() {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        padding: '0 !important',
        backgroundColor: 'common.white',
      }}>
      <HeaderPage />
    </Container>
  )
}
