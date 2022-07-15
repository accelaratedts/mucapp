import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const NavIconSet = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton color="inherit">
            <HomeOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
            <MessageOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
            <GroupsOutlinedIcon />
        </IconButton>
    </Box>
  )
}

export default NavIconSet
