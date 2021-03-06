import * as React from 'react'
import { Toolbar, Typography, AppBar } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import AccountCircle from '@mui/icons-material/AccountCircle'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import { Logo } from '../utils/const/icons'

export default function DashboardHeader() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar
      position='sticky'
      sx={{
        zIndex: 999,
        borderBottom: '2px solid',
        borderBottomColor: 'secondary.main',
        backgroundColor: 'common.white',
        boxShadow: '0px 4px 6px -6px rgba(0, 0, 0, 0.25)',
      }}>
      <Toolbar>
        <Logo sx={{ mr: 1 }} />
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Logo and Brand
        </Typography>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleMenu}
          color='inherit'>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
