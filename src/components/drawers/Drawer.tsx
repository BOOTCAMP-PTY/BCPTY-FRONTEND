import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { createSvgIcon } from '@mui/material/utils'
import { typography } from '@mui/system'

export default function AsideBar() {
  const [open, setOpen] = useState(false)
  // Iconos
  const HomeIcon = createSvgIcon(
    <path d='M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm2-4h8v2H8v-2z' />,
    'Home',
  )
  const ArrowLeft = createSvgIcon(
    <path d='M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z' />,
    'Arrow Left',
  )
  const ArrowRight = createSvgIcon(
    <path d='M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z' />,
    'Arrow Right',
  )
  const Cursos = createSvgIcon(
    <path d='M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zM5 16.05c.162-.033.329-.05.5-.05H19V4H5v12.05zM16 9H8V7h8v2z' />,
    'Cursos',
  )
  const Discord = createSvgIcon(
    <path d='M10.076 11c.6 0 1.086.45 1.075 1 0 .55-.474 1-1.075 1C9.486 13 9 12.55 9 12s.475-1 1.076-1zm3.848 0c.601 0 1.076.45 1.076 1s-.475 1-1.076 1c-.59 0-1.075-.45-1.075-1s.474-1 1.075-1zm4.967-9C20.054 2 21 2.966 21 4.163V23l-2.211-1.995-1.245-1.176-1.317-1.25.546 1.943H5.109C3.946 20.522 3 19.556 3 18.359V4.163C3 2.966 3.946 2 5.109 2H18.89zm-3.97 13.713c2.273-.073 3.148-1.596 3.148-1.596 0-3.381-1.482-6.122-1.482-6.122-1.48-1.133-2.89-1.102-2.89-1.102l-.144.168c1.749.546 2.561 1.334 2.561 1.334a8.263 8.263 0 0 0-3.096-1.008 8.527 8.527 0 0 0-2.077.02c-.062 0-.114.011-.175.021-.36.032-1.235.168-2.335.662-.38.178-.607.305-.607.305s.854-.83 2.705-1.376l-.103-.126s-1.409-.031-2.89 1.103c0 0-1.481 2.74-1.481 6.121 0 0 .864 1.522 3.137 1.596 0 0 .38-.472.69-.871-1.307-.4-1.8-1.24-1.8-1.24s.102.074.287.179c.01.01.02.021.041.031.031.022.062.032.093.053.257.147.514.262.75.357.422.168.926.336 1.513.452a7.06 7.06 0 0 0 2.664.01 6.666 6.666 0 0 0 1.491-.451c.36-.137.761-.337 1.183-.62 0 0-.514.861-1.862 1.25.309.399.68.85.68.85z' />,
    'Discord',
  )
  const Roadmap = createSvgIcon(
    <path d='M18 3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3c-1.306 0-2.417-.834-2.829-2H11c-1.1 0-2 .9-2 2v.171c1.166.412 2 1.523 2 2.829 0 1.306-.834 2.417-2 2.829V15c0 1.1.9 2 2 2h1.17c.412-1.165 1.524-2 2.83-2h3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3c-1.306 0-2.417-.834-2.829-2H11c-2.21 0-4-1.79-4-4H5c-1.657 0-3-1.343-3-3s1.343-3 3-3h2c0-2.21 1.79-4 4-4h1.17c.412-1.165 1.524-2 2.83-2h3zm0 14h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1zM8 11H5c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1zm10-6h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1z' />,
    'Road map',
  )
  const Favorite = createSvgIcon(
    <path d='M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z' />,
    'Favorite',
  )
  const icons = { color: '#F8F8F8', width: '43px', height: '43px' }
  // Apuntes
  // https://mui.com/material-ui/react-drawer/
  // https://remixicon.com/
  // https://www.youtube.com/watch?v=UWDcWApfmv4&ab_channel=FrontEndID
  return (
    <>
      {/* Cuando no esta abierto */}
      {/* Cuando esta completamente abierto */}
      <Drawer
        anchor='left'
        sx={{
          width: open ? { xs: '128px' } : { xs: '427px' },
          height: 'auto',
        }}
        open={open}
        onClose={() => setOpen(false)}
        variant='permanent'>
        <Box
          textAlign={'center'}
          role='presentation'
          sx={{
            background: '#1A1C1E',
            height: '100%',
            width: open ? { xs: '128px' } : { xs: '427px' },
          }}>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <IconButton
              size='large'
              color='inherit'
              aria-label='logo'
              onClick={() => setOpen(!open)}>
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
                    justifyContent: open ? 'center' : 'left',
                    padding: 0,
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      m: open ? 0 : '11px 26px 10px',
                      color: '#F8F8F8',
                    }}>
                    {index === 0 && <HomeIcon sx={icons} />}
                    {index === 1 && <Cursos sx={icons} />}
                    {index === 2 && <Roadmap sx={icons} />}
                    {index === 3 && <Favorite sx={icons} />}
                  </ListItemIcon>
                  <Typography
                    variant='h6'
                    color='#F8F8F8'
                    sx={{ display: open ? 'none' : 'contents' }}>
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
      </Drawer>
    </>
  )
}