import { Box, Button, Chip, Typography } from '@mui/material'
import Curso from '../assets/images/curso.svg'
import React from 'react'
import { TimeIcon, ToDoIcon } from '../utils/const/icons'

export default function DashBoardCourse() {
  return (
    <>
      <div>
        <h1>Introduccion a Git</h1>
        <Chip
          label='Principiante'
          sx={{
            background: '#7A72FA',
            color: 'white',
            width: '105px',
            height: '21px',
            fontSize: '18px',
          }}
        />
      </div>
      <Box sx={{ backgroundImage: `url(${Curso})`, width: '1226px', height: '416px' }}>
        <Button>
          <Typography variant='button'>Empezar Curso</Typography>
        </Button>
      </Box>
      <div>
        <Box>
          <Typography variant='h2'>Descripcion del curso</Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sit necessitatibus sunt
            veniam autem libero suscipit unde tenetur deleniti. Eius dolorem odit quod nostrum
            cupiditate necessitatibus reprehenderit alias numquam nulla.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#8C8C8C',
            }}>
            <TimeIcon sx={{ mr: '8px', width: '18px', height: '18px' }} />
          </Typography>
          <Typography variant='body2' color='#8C8C8C' sx={{ display: 'flex', mr: '14px' }}>
            5 horas
          </Typography>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#8C8C8C',
            }}>
            <ToDoIcon sx={{ mr: '8px', width: '18px', height: '18px' }} />
          </Typography>
          <Typography variant='body2' color='#8C8C8C'>
            15 lecciones
          </Typography>
        </Box>
      </div>
    </>
  )
}
