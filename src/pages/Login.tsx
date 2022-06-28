import { SubmitHandler, useForm } from 'react-hook-form'
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
import { IUserFormValues } from '../types/users'
import HeaderHome from '../components/headers/HeaderHome'
import { GitHub, Google, login, Password, User } from '../utils/const/login'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../services/store/userSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserFormValues>()

  const onSubmit: SubmitHandler<IUserFormValues> = (data) => {
    console.log(data)
    dispatch(changeStatus())
    navigate('/dashboard', { replace: true })
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        height: '110vh',
        padding: '0 !important',
        backgroundColor: 'common.white',
      }}>
      <HeaderHome />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center', mt: '56px' }}>
          <Card sx={{ ...login.card, height: { lg: '797px', xs: '500px', sm: '697px' } }}>
            <CardContent>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    ...login.titule.grid,
                    marginTop: { lg: '72px', xs: '59px', sm: '66px' },
                    marginBottom: { lg: '62px', xs: '39px', sm: '58px' },
                  }}>
                  <Typography sx={login.titule.typography}>Iniciar Sesion</Typography>
                </Grid>
                <Grid item xs={12} sx={{ ...login.fields.grid, mb: '64px' }}>
                  <TextField
                    sx={login.fields.field}
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
                <Grid item xs={12} sx={login.fields.grid}>
                  <TextField
                    sx={login.fields.field}
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
                <Grid
                  item
                  xs={12}
                  sx={{
                    ...login.button.grid,
                    mt: { lg: '105px', xs: '55px', sm: '80px' },
                    mb: { lg: '70px', xs: '31px', sm: '52px' },
                  }}>
                  <Button
                    variant='contained'
                    type='submit'
                    sx={{
                      width: { lg: '358px', xs: '245px', sm: '320px' },
                      height: { lg: '51px', xs: '35px', sm: '44px' },
                    }}>
                    <Grid item xs={12} sx={login.button.textGrid}>
                      <Typography
                        variant='h4'
                        color='initial'
                        align='center'
                        sx={login.button.text}>
                        Iniciar Sesion
                      </Typography>
                    </Grid>
                  </Button>
                </Grid>
                <Grid item xs={12} sx={login.subtitule.grid}>
                  <Typography sx={login.subtitule.text}>O iniciar sesion con</Typography>
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
