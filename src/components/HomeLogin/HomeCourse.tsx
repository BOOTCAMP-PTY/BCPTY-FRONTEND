import { Box, Button, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import HeaderPage from '../headers/HeaderPage/HeaderPage'
import SearchIcon from '@mui/icons-material/Search'

export default function HomeCourse() {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        padding: '0 !important',
        backgroundColor: 'common.white',
      }}>
      <HeaderPage />
      <Grid container sx={{ padding: 0, flexGrow: 1, width: 1, flexWrap: 'wrap' }}>
        <Grid item xs={12} sx={{ margin: '61px 0 77px 65px' }}>
          <Typography variant='h1' color='#3B3B3B'>
            Hola, Joe Doe
          </Typography>
        </Grid>
        <Grid container sx={{ display: 'flex', flexDirection: 'column', marginLeft: '65px' }}>
          <Grid item xs={12}>
            <Typography
              variant='caption'
              color='#3B3B3B'
              sx={{
                width: '374px',
                height: '33px',
                fontFamily: '500px',
                fontSize: '28px',
                lineHeight: '33px',
              }}>
              Busca algun tema de interes
            </Typography>
            <Grid item xs={12} sx={{ display: 'flex' }}>
              <Box
                sx={{
                  width: '875px',
                }}>
                <TextField
                  fullWidth
                  placeholder='ej. fronted'
                  InputProps={{
                    sx: {
                      height: '60px',
                    },
                    endAdornment: (
                      <InputAdornment position='end'>
                        <SearchIcon
                          sx={{
                            color: '#636363',
                            width: '38px',
                            height: '38px',
                            marginRight: '35px',
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Button
                variant='contained'
                sx={{ marginLeft: '37px', width: '228px', height: '57px' }}>
                <Typography
                  variant='button'
                  color='#636363'
                  sx={{
                    width: '98px',
                    height: '31px',
                    fontFamily: '600px',
                    fontSize: '24px',
                    lineHeight: '28px',
                  }}>
                  Buscar
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
