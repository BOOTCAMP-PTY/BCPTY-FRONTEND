import {
  TextField,
  Grid,
  Button,
  Typography,
  CardContent,
  Container,
  InputAdornment,
  Card,
  Alert,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { IUserFormValues } from '../types/users'
import HomeHeader from '../components/HomeHeader'
import { User, Password, Google, GitHub, login } from '../utils/const/login'
export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserFormValues>()

  const onSubmit: SubmitHandler<IUserFormValues> = (data) => {
    console.log(data)
    if (data.password == data.confirmPassword) {
      Swal.fire('Good job!', 'Tus datos se han enviado!', 'success')
      reset()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden!',
      })
    }
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        height: '110vh',
        padding: '0 !important',
        backgroundColor: 'common.white',
      }}>
      <HomeHeader />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center', mt: '56px' }}>
          <Card
            sx={{
              ...login.card,
              height: { lg: '873px', xs: '570px', sm: '697px' },
            }}>
            <CardContent>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    ...login.titule.grid,
                    marginTop: { lg: '58px', xs: '59px', sm: '66px' },
                    marginBottom: { lg: '45px', xs: '39px', sm: '51px' },
                  }}>
                  <Typography sx={login.titule.typography}>Registrate</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    ...login.fields.grid,
                    mb: { lg: '62px', xs: '34px', sm: '48px' },
                  }}>
                  <TextField
                    sx={login.fields.field}
                    fullWidth
                    placeholder='Correo electronico'
                    {...register('email', {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    InputProps={{
                      sx: {
                        height: { lg: '61px', xs: '34px', sm: '48px' },
                      },
                      startAdornment: (
                        <InputAdornment position='start'>
                          <User />
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
                    ...login.fields.grid,
                    mb: { lg: '62px', xs: '34px', sm: '48px' },
                  }}>
                  <TextField
                    sx={login.fields.field}
                    fullWidth
                    placeholder='Contraseña'
                    type='password'
                    {...register('password', {
                      required: true,
                      minLength: 8,
                    })}
                    InputProps={{
                      sx: {
                        height: { lg: '61px', xs: '34px', sm: '48px' },
                      },
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Password />
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
                <Grid item xs={12} sx={login.fields.grid}>
                  <TextField
                    sx={login.fields.field}
                    fullWidth
                    type='password'
                    placeholder='Repetir contraseña'
                    {...register('confirmPassword', {
                      required: true,
                      minLength: 8,
                    })}
                    InputProps={{
                      sx: {
                        height: { lg: '61px', xs: '34px', sm: '48px' },
                      },
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Password />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.confirmPassword && (
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
                <Grid
                  item
                  xs={12}
                  sx={{
                    ...login.button.grid,
                    mt: { lg: '85px', xs: '55px', sm: '65px' },
                    mb: { lg: '70px', xs: '31px', sm: '46px' },
                  }}>
                  <Button
                    variant='contained'
                    type='submit'
                    sx={{
                      width: { lg: '358px', xs: '245px', sm: '300px' },
                      height: { lg: '51px', xs: '35px', sm: '40px' },
                    }}>
                    <Grid item xs={12} sx={login.button.textGrid}>
                      <Typography
                        variant='h4'
                        color='initial'
                        align='center'
                        sx={login.button.text}>
                        Registrarse
                      </Typography>
                    </Grid>
                  </Button>
                </Grid>
                <Grid item xs={12} sx={login.subtitule.grid}>
                  <Typography
                    variant='subtitle1'
                    color='initial'
                    align='center'
                    sx={login.subtitule.text}>
                    O iniciar sesion con
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                  xs={12}>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                    }}>
                    <Google />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    <GitHub />
                  </Grid>
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
  )
}
