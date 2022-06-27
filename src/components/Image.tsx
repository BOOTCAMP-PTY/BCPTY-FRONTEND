import { Box } from '@mui/material'
import React from 'react'
import { ImageProps } from '../types/image'

const Image: React.FC<ImageProps> = ({ source, sx, alt, height, width }) => {
  return <Box component='img' sx={{ ...sx }} src={source} alt={alt} height={height} width={width} />
}

export default Image
