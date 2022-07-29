import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import useMediaQuery from '../hooks/useMediaQuery'
import { Discord, Logo } from '../utils/const/icons'
import { useLocation } from 'react-router-dom'

export default function HomeHeader() {
  const query = useMediaQuery(400)
  const location = useLocation()
  return (
    <Box sx={{ flexGrow: 1, width: 1, flexWrap: 'wrap' }}>
      <AppBar position='static' sx={{ background: 'none', boxShadow: 'none' }}>
        <Toolbar>
          <Logo sx={{ mr: 1 }} />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Logo and Brand
          </Typography>
          {location.pathname !== '/login' && location.pathname !== '/register'
            ? query && (
                <>
                  <IconButton color='inherit' sx={{ mr: 2 }}>
                    <GitHubIcon />
                  </IconButton>
                  <IconButton color='inherit'>
                    <Discord />
                  </IconButton>
                </>
              )
            : null}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
