import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import HeaderPage from '../headers/HeaderPage'

export default function HomeCourse() {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: '0 !important',
        backgroundColor: 'common.white',
      }}>
      <HeaderPage />
      <Grid
        container
        sx={{
          padding: 0,
          flexGrow: 1,
          width: 1,
          flexWrap: 'wrap',
        }}>
        {/* Hola, joe */}
        <Grid item xs={12} sx={{ margin: '61px 0 77px 65px' }}>
          {/* 209px */}
          <Typography
            variant='h1'
            color='#3B3B3B'
            sx={{
              width: '400px',
              height: '38px',
              fontWeight: '700',
              fontSize: '32px',
              lineHeight: '38px',
            }}>
            Hola, Joe Doe
          </Typography>
        </Grid>
        {/* Buscador */}
        <Grid container sx={{ display: 'flex', flexDirection: 'column', marginLeft: '65px' }}>
          <Grid item xs={12}>
            <Typography
              variant='caption'
              color='#3B3B3B'
              sx={{
                width: '374px',
                height: '33px',
                fontWeight: '500px',
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
                    fontWeight: '600px',
                    fontSize: '24px',
                    lineHeight: '28px',
                  }}>
                  Buscar
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* Continuar Viendo */}
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '117px',
            marginLeft: '65px',
          }}>
          <Grid item xs={12}>
            {/* 213px */}
            <Typography
              variant='h1'
              color='#3B3B3B'
              sx={{
                width: '600px',
                height: '33px',
                fontWeight: '500',
                fontSize: '28px',
                lineHeight: '33px',
              }}>
              Continuar Viendo
            </Typography>
            <Grid item xs={12} sx={{ display: 'flex', marginTop: '60px' }}>
              <Card sx={{ width: '236px', height: '155px', marginRight: '55px' }}>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/images/cards/contemplative-reptile.jpg'
                  alt='green iguana'
                />
              </Card>
              <Card sx={{ width: '236px', height: '155px', marginRight: '55px' }}>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/images/cards/contemplative-reptile.jpg'
                  alt='green iguana'
                />
              </Card>
              <Card sx={{ width: '236px', height: '155px', marginRight: '55px' }}>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/images/cards/contemplative-reptile.jpg'
                  alt='green iguana'
                />
              </Card>
              <Card sx={{ width: '236px', height: '155px' }}>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/images/cards/contemplative-reptile.jpg'
                  alt='green iguana'
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        {/* Nuevos cursos */}
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '102px',
            marginLeft: '65px',
          }}>
          <Grid item xs={12}>
            {/* 194px */}
            <Typography
              variant='h1'
              color='#3B3B3B'
              sx={{
                width: '600px',
                height: '33px',
                fontWeight: '500',
                fontSize: '28px',
                lineHeight: '33px',
              }}>
              Nuevos cursos
            </Typography>
            <Grid item xs={12} sx={{ display: 'flex', marginTop: '32px' }}>
              <Card sx={{ width: '527px', height: '262px', marginRight: '55px' }}>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/images/cards/contemplative-reptile.jpg'
                  alt='green iguana'
                />
              </Card>
              <Card sx={{ width: '527px', height: '262px', marginRight: '55px' }}>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/images/cards/contemplative-reptile.jpg'
                  alt='green iguana'
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        {/* Los mas vistos */}
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '104px',
            marginLeft: '65px',
          }}>
          <Grid item xs={12}>
            {/* 191px */}
            <Typography
              variant='h1'
              color='#3B3B3B'
              sx={{
                width: '600px',
                height: '33px',
                fontWeight: '500',
                fontSize: '28px',
                lineHeight: '33px',
              }}>
              Los mas vistos
            </Typography>
            <Grid item xs={12} sx={{ display: 'flex', marginTop: '30px' }}>
              <Card sx={{ width: '342px', height: '192px', marginRight: '40px' }}>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/images/cards/contemplative-reptile.jpg'
                  alt='green iguana'
                />
              </Card>
              <Card sx={{ width: '342px', height: '192px', marginRight: '40px' }}>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/images/cards/contemplative-reptile.jpg'
                  alt='green iguana'
                />
              </Card>
              <Card sx={{ width: '342px', height: '192px', marginRight: '40px' }}>
                <CardMedia
                  component='img'
                  height='140'
                  image='/static/images/cards/contemplative-reptile.jpg'
                  alt='green iguana'
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
