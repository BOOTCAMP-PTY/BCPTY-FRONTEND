import { GitHubIcon, GoogleIcon, PasswordIcon, UserIcon } from './icons'
import IconButton from '@mui/material/IconButton'
const login = {
  card: {
    width: { lg: '624px', xs: '325px', sm: '524px' },
  },
  titule: {
    grid: {
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      width: { lg: '217px', xs: '150px' },
      height: { lg: '42px', xs: '24px' },
    },
    typography: {
      fontSize: { lg: '36px', xs: '24px', sm: '30px' },
      fontWeight: { lg: '400px' },
      lineHeight: { lg: '42px', xs: '28.18px', sm: '36px' },
    },
  },
  fields: {
    grid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    field: {
      width: { lg: '470px', xs: '245px', sm: '440px' },
    },

    formIcon: {
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
    },
  },
  button: {
    grid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textGrid: {
      width: { lg: '154px', xs: '100px', sm: '140px' },
      height: { lg: '28px', xs: '19px', sm: '25px' },
    },
    text: {
      fontSize: { lg: '24px', xs: '16px', sm: '22px' },
      fontWeight: { lg: '600px' },
      lineHeight: {
        lg: '28.18px',
        xs: '18.78px',
        sm: '25px',
      },
    },
  },
  subtitule: {
    grid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: { lg: '38px', xs: '31px' },
      width: { lg: '137px', xs: '119px', sm: '128px' },
      height: { lg: '22px', xs: '13px', sm: '17px' },
    },
    text: {
      fontSize: { lg: '16px', xs: '14px', sm: '15px' },
      fontWeight: { lg: '400px' },
      lineHeight: {
        lg: '18.78px',
        xs: '16.44px',
        sm: '17.40px',
      },
    },
  },
  logo: {
    width: { lg: '66px', xs: '42px', sm: '60px' },
    height: { lg: '66px', xs: '44px', sm: '60px' },
  },
}

// Icon
const User = () => {
  return <UserIcon sx={login.fields.formIcon} />
}
const Password = () => {
  return <PasswordIcon sx={login.fields.formIcon} />
}

const Google = () => {
  return (
    <IconButton
      size='large'
      edge='start'
      color='inherit'
      aria-label='menu'
      sx={{
        ...login.logo,
        margin: 0,
      }}>
      <GoogleIcon
        sx={{
          ...login.logo,
          display: 'flex',
          alignItems: 'center',
        }}
      />
    </IconButton>
  )
}

const GitHub = () => {
  return (
    <IconButton
      size='large'
      edge='start'
      color='inherit'
      aria-label='menu'
      sx={{
        ...login.logo,
        margin: 0,
      }}>
      <GitHubIcon
        sx={{
          ...login.logo,
          display: 'flex',
          alignItems: 'center',
        }}
      />
    </IconButton>
  )
}
// Export
export { Google, GitHub, User, Password, login }
