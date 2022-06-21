import React from 'react'
import { Typography, Button, Grid, Container } from '@mui/material'
import HeaderHome from '../components/headers/HeaderHome/HeaderHome'
import Image from '../components/Image'
import homeBanner from '../assets/images/svg/landing_banner.svg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        padding: '0 !important',
        backgroundColor: 'common.white',
      }}>
      <HeaderHome />
      <Grid
        container
        alignItems='center'
        sx={{
          padding: { xs: '0 2rem', md: '2rem' },
          marginTop: { xs: 0, md: '5rem' },
        }}>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            padding: { xs: 0, sm: '2rem', md: '4rem' },
          }}>
          <Typography
            variant='h1'
            color='initial'
            sx={{
              marginBottom: { xs: '41', sm: '43px' },
            }}
            align='left'>
            Aprende a Programar como un Pro
          </Typography>
          <Typography
            variant='body1'
            color='initial'
            sx={{
              marginBottom: { xs: '64', sm: '43px' },
            }}
            align='justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum impedit sequi
            iure error reprehenderit nam praesentium explicabo velit dolor, temporibus recusandae
            nisi mollitia tempore? Rem, illo! Sequi, dolorem tempore.
          </Typography>
          <Grid container spacing={{ xs: 4, sm: 2 }} columns={{ xs: 12, sm: 12 }}>
            <Grid item sm={6} xs={12}>
              <Button
                variant='contained'
                component={Link}
                sx={{
                  width: '194px',
                  height: '51px',
                }}
                to='/login'>
                <Typography
                  variant='button'
                  color='initial'
                  align='center'
                  sx={{
                    width: '114px',
                    height: '21px',
                    fontSize: '18px',
                    fontWeight: '600px',
                    lineHeight: '21px',
                  }}>
                  Iniciar Sesion
                </Typography>
              </Button>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Button
                variant='contained'
                component={Link}
                sx={{
                  width: '194px',
                  height: '51px',
                }}
                to='/register'>
                <Typography
                  variant='button'
                  color='initial'
                  align='center'
                  sx={{
                    width: '112px',
                    height: '21px',
                    fontSize: '18px',
                    fontWeight: '600px',
                    lineHeight: '21px',
                  }}>
                  Registrarte
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} md={6} container justifyContent='center'>
          <Image
            source={homeBanner}
            sx={{
              width: {
                xs: 300,
                sm: 450,
                lg: 642,
              },
              marginTop: { xs: '4rem', md: 0 },
            }}
            alt='home-banner'
            height='auto'
            width='100%'
          />
        </Grid>
      </Grid>
    </Container>
  )
}
