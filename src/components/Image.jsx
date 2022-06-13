import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import React from 'react';

const Image = ({ source, sx, alt, height, width }) => {
  return (
    <Box component="img" sx={{ ...sx }} src={source} alt={alt} height={height} width={width} />
  );
};

Image.propTypes = {
  source: PropTypes.node,
  sx: PropTypes.node,
  alt: PropTypes.node,
  height: PropTypes.node,
  width: PropTypes.node
};

export default Image;
