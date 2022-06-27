import React from 'react'
import HeaderPage from '../components/headers/HeaderPage'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  TextField,
  Grid,
  Button,
  Typography,
  IconButton,
  CardContent,
  Container,
  InputAdornment,
  Card,
  Alert,
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import PersonIcon from '@mui/icons-material/Person'
import GitHubIcon from '@mui/icons-material/GitHub'
import HttpsIcon from '@mui/icons-material/Https'
import { IUserFormValues } from '../types/users'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserFormValues>()
  const onSubmit: SubmitHandler<IUserFormValues> = (data) => console.log(data)
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          height: '100vh',
          padding: '0 !important',
          backgroundColor: 'common.white',
        }}>
        <HeaderPage />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              sx={{
                width: { lg: '624px', xs: '325px', sm: '524px' },
                height: { lg: '797px', xs: '500px', sm: '697px' },
              }}>
              <CardContent>
                <Grid container>
                  {/* Titulo */}
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                      padding: 0,
                      marginTop: { lg: '72px', xs: '59px', sm: '66px' },
                      marginBottom: { lg: '62px', xs: '39px', sm: '58px' },
                      display: 'flex',
                      justifyContent: 'center',
                      width: { lg: '217px', xs: '150px' },
                      height: { lg: '42px', xs: '24px' },
                    }}>
                    <Typography
                      variant='h1'
                      color='initial'
                      align='center'
                      sx={{
                        fontSize: { lg: '36px', xs: '24px', sm: '30px' },
                        fontWeight: { lg: '400px' },
                        lineHeight: { lg: '42px', xs: '28.18px', sm: '36px' },
                      }}>
                      Iniciar Sesion
                    </Typography>
                  </Grid>

                  {/* Campos de formulario */}
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: { lg: '64px', xs: '34px', sm: '48px' },
                    }}>
                    <TextField
                      sx={{
                        width: { lg: '470px', xs: '245px', sm: '440px' },
                      }}
                      fullWidth
                      required
                      placeholder='Correo electronico'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      InputProps={{
                        sx: {
                          height: { lg: '61px', xs: '34px', sm: '52px' },
                        },
                        startAdornment: (
                          <InputAdornment position='start'>
                            <PersonIcon
                              sx={{
                                width: { lg: '38px', xs: '18px', sm: '28px' },
                                height: { lg: '38px', xs: '18px', sm: '28px' },
                                marginLeft: {
                                  lg: '28px',
                                  xs: '15px',
                                  sm: '20px',
                                },
                                marginRight: {
                                  lg: '14px',
                                  xs: '9px',
                                  sm: '12px',
                                },
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {errors.email && (
                      <Alert
                        severity='error'
                        sx={{
                          padding: 0,
                          width: '25%',
                          display: 'flex',
                          justifyContent: 'center',
                          position: 'absolute',
                          marginTop: '6.3rem',
                        }}>
                        Escriba bien su correo
                      </Alert>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TextField
                      sx={{
                        width: { lg: '470px', xs: '245px', sm: '440px' },
                      }}
                      fullWidth
                      type='password'
                      placeholder='Contraseña'
                      {...register('password', { required: true, minLength: 8 })}
                      InputProps={{
                        sx: {
                          height: { lg: '61px', xs: '34px', sm: '52px' },
                        },
                        startAdornment: (
                          <InputAdornment position='start'>
                            <HttpsIcon
                              sx={{
                                width: { lg: '38px', xs: '18px', sm: '28px' },
                                height: { lg: '38px', xs: '18px', sm: '28px' },
                                marginLeft: {
                                  lg: '28px',
                                  xs: '15px',
                                  sm: '20px',
                                },
                                marginRight: {
                                  lg: '14px',
                                  xs: '9px',
                                  sm: '12px',
                                },
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {errors.password && (
                      <Alert
                        severity='error'
                        sx={{
                          padding: 0,
                          width: '25%',
                          display: 'flex',
                          justifyContent: 'center',
                          position: 'absolute',
                          marginTop: '6.3rem',
                        }}>
                        Escriba al menos 8 digitos
                      </Alert>
                    )}
                  </Grid>

                  {/* Boton */}
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: { lg: '105px', xs: '55px', sm: '80px' },
                      marginBottom: { lg: '70px', xs: '31px', sm: '52px' },
                    }}>
                    <Button
                      variant='contained'
                      type='submit'
                      sx={{
                        width: { lg: '358px', xs: '245px', sm: '320px' },
                        height: { lg: '51px', xs: '35px', sm: '44px' },
                      }}>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          width: { lg: '154px', xs: '100px', sm: '140px' },
                          height: { lg: '28px', xs: '19px', sm: '25px' },
                        }}>
                        <Typography
                          variant='h4'
                          color='initial'
                          align='center'
                          sx={{
                            fontSize: { lg: '24px', xs: '16px', sm: '22px' },
                            fontWeight: { lg: '600px' },
                            lineHeight: {
                              lg: '28.18px',
                              xs: '18.78px',
                              sm: '25px',
                            },
                          }}>
                          Iniciar Sesion
                        </Typography>
                      </Grid>
                    </Button>
                  </Grid>

                  {/* Letras pequeñas */}
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: { lg: '38px', xs: '31px' },
                      width: { lg: '137px', xs: '119px', sm: '128px' },
                      height: { lg: '22px', xs: '13px', sm: '17px' },
                    }}>
                    <Typography
                      variant='subtitle1'
                      color='initial'
                      align='center'
                      sx={{
                        fontSize: { lg: '16px', xs: '14px', sm: '15px' },
                        fontWeight: { lg: '400px' },
                        lineHeight: {
                          lg: '18.78px',
                          xs: '16.44px',
                          sm: '17.40px',
                        },
                      }}>
                      O iniciar sesion con
                    </Typography>
                  </Grid>

                  {/* Iconos */}
                  <Grid
                    item
                    container
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}
                    xs={12}>
                    {/* Google */}
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                      }}>
                      <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{
                          width: { lg: '66px', xs: '42px', sm: '60px' },
                          height: { lg: '66px', xs: '44px', sm: '60px' },
                          margin: 0,
                        }}>
                        <GoogleIcon
                          sx={{
                            width: { lg: '66px', xs: '42px', sm: '60px' },
                            height: { lg: '66px', xs: '44px', sm: '60px' },
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        />
                      </IconButton>
                    </Grid>

                    {/* GitHub */}
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                      <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{
                          width: { lg: '66px', xs: '42px', sm: '60px' },
                          height: { lg: '66px', xs: '44px', sm: '60px' },
                          margin: 0,
                        }}>
                        <GitHubIcon
                          sx={{
                            width: { lg: '66px', xs: '42px', sm: '60px' },
                            height: { lg: '66px', xs: '44px', sm: '60px' },
                          }}
                        />
                      </IconButton>
                    </Grid>

                    {/* Titulo de google */}
                    <Grid item xs={6}>
                      <Typography variant='body1' color='initial' align='center'>
                        Google
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant='body1' color='initial' align='center'>
                        GitHub
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </form>
      </Container>
    </>
  )
}
