import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaDiscord } from 'react-icons/fa';
import CodeIcon from '@mui/icons-material/Code';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function HeaderPage() {
  const query = useMediaQuery('400');
  return (
    <Box sx={{ flexGrow: 1, width: 1, height: '10%', flexWrap: 'wrap' }}>
      <AppBar position="static" sx={{ backgroundColor: 'common.white' }}>
        <Toolbar>
          <CodeIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo and Brand
          </Typography>

          {query && (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}>
                <GitHubIcon />
              </IconButton>
              <IconButton size="large" edge="start" color="inherit" aria-label="menu">
                <FaDiscord />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
