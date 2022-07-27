import { Box, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TimeIcon, ToDoIcon } from '../../utils/const/icons'
interface Props {
  img: string
}
function SmallCard({ img }: Props) {
  const navigate = useNavigate()
  return (
    <Card sx={{ width: '236px', height: '155px' }} onClick={() => navigate('../course')}>
      <CardMedia component='img' alt='img' image={img} sx={{ width: '236px', height: '101px' }} />
      <CardContent sx={{ width: '236px', height: '54px', pt: '8px' }}>
        <Typography variant='subtitle1' color='#3B3B3B' sx={{ fontSize: '14px' }}>
          Introduccion a React
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#8C8C8C',
            }}>
            <TimeIcon sx={{ mr: '8px', width: '15px', height: '15px' }} />
          </Typography>
          <Typography variant='body2' color='#8C8C8C' sx={{ fontSize: '14px' }}>
            5 horas
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

function MediumCard({ img }: Props) {
  const navigate = useNavigate()
  return (
    <Card sx={{ width: '343px', height: '192px' }} onClick={() => navigate('../course')}>
      <CardContent
        sx={{
          backgroundImage: `url(${img})`,
          height: '126px',
          width: '343px',
          display: 'flex',
          justifyContent: 'right',
        }}>
        <Chip
          label='Principiante'
          sx={{
            background: '#7A72FA',
            color: 'white',
            width: '84px',
            height: '20px',
            fontSize: '11px',
          }}
        />
      </CardContent>
      <CardContent sx={{ width: '343px', height: '66px', pt: '12px' }}>
        <Typography variant='subtitle2' color='#3B3B3B' sx={{ fontSize: '16px', mb: '4px' }}>
          Introduccion a React
        </Typography>
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
            5 horas
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

function LargeCard({ img }: Props) {
  const navigate = useNavigate()
  return (
    <Card
      sx={{ width: '527px', height: '262px', display: 'flex' }}
      onClick={() => navigate('../course')}>
      <CardMedia component='img' alt='img' image={img} sx={{ height: '262px', width: '248px' }} />
      <CardContent sx={{ width: '279px', height: '262px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          <Chip
            label='Principiante'
            sx={{
              background: '#7A72FA',
              color: 'white',
              width: '84px',
              height: '20px',
              fontSize: '11px',
            }}
          />
        </Box>
        <Typography variant='subtitle2' color='#3B3B3B' sx={{ mt: '25px', fontSize: '18px' }}>
          Introduccion a React
        </Typography>
        <Typography
          variant='body2'
          color='#3B3B3B'
          sx={{ mb: '33px', mt: '18px', fontSize: '16px' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Typography>
        <Box sx={{ display: 'flex', mb: '13px' }}>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#8C8C8C',
            }}>
            <TimeIcon sx={{ width: '23px', height: '23px', mr: '9px' }} />
          </Typography>
          <Typography variant='body2' color='#8C8C8C' sx={{ display: 'flex', fontSize: '16px' }}>
            5 horas
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
            <ToDoIcon sx={{ width: '23px', height: '23px', mr: '9px' }} />
          </Typography>
          <Typography variant='body2' color='#8C8C8C' sx={{ display: 'flex', fontSize: '16px' }}>
            5 horas
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export { SmallCard, MediumCard, LargeCard }
