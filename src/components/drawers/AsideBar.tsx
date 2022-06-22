import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material'
import React, { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Cursos,
  Discord,
  Favorite,
  HomeIcon,
  Roadmap,
} from '../../assets/images/svg/icons/icons'

export default function AsideBar() {
  const [open, setOpen] = useState(false)
  const icons = { color: '#F8F8F8', width: '43px', height: '43px' }
  // Apuntes
  // https://mui.com/material-ui/react-drawer/
  // https://remixicon.com/
  // https://www.youtube.com/watch?v=UWDcWApfmv4&ab_channel=FrontEndID
  return (
    <Box
      textAlign={'center'}
      sx={{
        background: '#1A1C1E',
        height: '100%',
        width: open ? { xs: '427px' } : { xs: '128px' },
      }}>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <IconButton size='large' color='inherit' aria-label='logo' onClick={() => setOpen(!open)}>
          {open ? <ArrowRight sx={icons} /> : <ArrowLeft sx={icons} />}
        </IconButton>
        {['Dashboard', 'Cursos', 'Roadmaps', 'Favoritos'].map((text, index) => (
          <ListItem
            key={text}
            sx={{
              marginBottom: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ListItemButton
              sx={{
                minHeight: 64,
                borderRadius: '15px',
                px: open ? 2.4 : 0,
                display: 'flex',
                justifyContent: open ? 'left' : 'center',
                padding: 0,
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  m: open ? '11px 26px 10px' : 0,
                  color: '#F8F8F8',
                }}>
                {index === 0 && <HomeIcon sx={icons} />}
                {index === 1 && <Cursos sx={icons} />}
                {index === 2 && <Roadmap sx={icons} />}
                {index === 3 && <Favorite sx={icons} />}
              </ListItemIcon>
              <Typography variant='h6' color='#F8F8F8' sx={{ display: open ? 'contents' : 'none' }}>
                {text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Discord
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '40px',
          ...icons,
        }}
      />
    </Box>
  )
}
