import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import useMediaQuery from '../../hooks/useMediaQuery'
import { Discord, Logo } from '../../utils/const/icons'

type Props = {
  query: number
}
export default function HeaderHome({ query }: Props) {
  let res: boolean
  query >= 400 ? (res = useMediaQuery(query)) : (res = !useMediaQuery(query))
  return (
    <Box sx={{ flexGrow: 1, width: 1, flexWrap: 'wrap' }}>
      <AppBar position='static' sx={{ background: 'none', boxShadow: 'none' }}>
        <Toolbar>
          <Logo sx={{ mr: 1 }} />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Logo and Brand
          </Typography>
          {res && (
            <>
              <IconButton color='inherit' sx={{ mr: 2 }}>
                <GitHubIcon />
              </IconButton>
              <IconButton color='inherit'>
                <Discord />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
