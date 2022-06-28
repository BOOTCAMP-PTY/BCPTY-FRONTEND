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
} from '../../utils/const/icons'

export default function AsideBar() {
  const [open, setOpen] = useState(false)
  const icons = { color: '#F8F8F8', width: '43px', height: '43px' }
  return (
    <Box
      textAlign={'center'}
      sx={{
        zIndex: 1,
        position: 'fixed',
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
          {open ? (
            <ArrowRight sx={{ ...icons, mb: '87px' }} />
          ) : (
            <ArrowLeft sx={{ ...icons, mb: '87px' }} />
          )}
        </IconButton>
        {['Dashboard', 'Cursos', 'Roadmaps', 'Favoritos'].map((text, index) => (
          <ListItem
            key={text}
            sx={{
              display: 'flex',
            }}>
            <ListItemButton
              sx={{
                borderRadius: '15px',
                px: open ? 2.4 : 0,
                display: 'flex',
                justifyContent: open ? 'left' : 'center',
                alignItems: 'center',
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