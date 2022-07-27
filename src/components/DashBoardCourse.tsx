import { Box, Button, Chip, Typography } from '@mui/material'
import Curso from '../assets/images/curso.svg'
import React from 'react'
import { TimeIcon, ToDoIcon } from '../utils/const/icons'

export default function DashBoardCourse() {
  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          variant='h1'
          sx={{
            width: '444px',
            height: '61px',
            fontWeight: '700',
            fontSize: '52px',
            lineHeight: '62px',
            mr: '44px',
          }}>
          Introduccion a Git
        </Typography>
        <Chip
          label='Principiante'
          sx={{
            background: '#7A72FA',
            color: 'white',
            width: '148px',
            height: '36px',
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '21px',
          }}
        />
      </Box>
      <Box
        sx={{
          background: `url(${Curso})`,
          width: '100%',
          height: '416px',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'end',
          m: '38px 41px 86px 0',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Button
          variant='contained'
          sx={{
            width: '272px',
            height: '57px',
            m: '0 30px 29px 0',
          }}>
          <Typography
            variant='button'
            color='#242424'
            sx={{
              fontWeight: '600',
              fontSize: '24px',
              lineHeight: '28px',
            }}>
            Empezar Curso
          </Typography>
        </Button>
      </Box>
      <Box>
        <Typography variant='h3'>Descripcion del curso</Typography>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ mr: '131px', width: '553px', height: '132px' }}>
            <Typography variant='body1' align='justify'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sit necessitatibus sunt
              veniam autem libero suscipit unde tenetur deleniti. Eius dolorem odit quod nostrum
              cupiditate necessitatibus reprehenderit alias numquam nulla.
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  color: '#8C8C8C',
                  width: '38px',
                  height: '38px',
                  mr: '25px',
                }}>
                <TimeIcon sx={{ width: '100%', height: '100%' }} />
              </Box>
              <Typography variant='h5' color='#8C8C8C'>
                15 minutos
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyItems: 'center',
                mt: '26px',
              }}>
              <Box
                sx={{
                  color: '#8C8C8C',
                  width: '38px',
                  height: '38px',
                  mr: '25px',
                }}>
                <ToDoIcon sx={{ width: '100%', height: '100%' }} />
              </Box>
              <Typography variant='h5' color='#8C8C8C' sx={{ width: '155px', height: '33px' }}>
                5 lecciones
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
