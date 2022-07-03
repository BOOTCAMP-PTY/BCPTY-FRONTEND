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
} from '../utils/const/icons'

export default function CustomDrawer() {
  const [open, setOpen] = useState(false)
  const icons = { color: '#F8F8F8', width: '43px', height: '43px' }
  return (
    <Box
      textAlign={'center'}
      sx={{
        display: { xs: 'none', md: 'block' },
        position: 'fixed',
        zIndex: 9999,
        background: '#1A1C1E',
        borderRadius: '0 15px 15px 0',
        height: '100%',
        width: open ? { xs: '330px' } : { xs: '128px' },
        transition: '0.5s',
        overflow: 'hidden',
      }}>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 4,
            mt: '12px',
            mb: '50px',
            justifyContent: 'flex-start',
          }}>
          <IconButton size='large' color='inherit' aria-label='logo' onClick={() => setOpen(!open)}>
            {open ? <ArrowLeft sx={{ ...icons }} /> : <ArrowRight sx={{ ...icons }} />}
          </IconButton>
        </Box>
        {['Dashboard', 'Cursos', 'Roadmaps', 'Favoritos'].map((text, index) => (
          <ListItem
            key={text}
            sx={{
              display: 'flex',
              height: 84,
            }}>
            <ListItemButton
              sx={{
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                padding: 0,
                '&:hover': {
                  backgroundColor: '#313334',
                  height: 68,
                },
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  m: '11px 26px 10px',
                  color: '#F8F8F8',
                }}>
                {index === 0 && <HomeIcon sx={icons} />}
                {index === 1 && <Cursos sx={icons} />}
                {index === 2 && <Roadmap sx={icons} />}
                {index === 3 && <Favorite sx={icons} />}
              </ListItemIcon>
              <Typography variant='h4' color='#F8F8F8' sx={{ px: '20px' }}>
                {text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Discord
        sx={{
          position: 'absolute',
          bottom: '28px',
          left: '40px',
          ...icons,
        }}
      />
    </Box>
  )
}
