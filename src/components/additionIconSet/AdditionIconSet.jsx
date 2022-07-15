import React from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

const AdditionIconSet = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton
        aria-label="show 17 new notifications"
        color="inherit" >
            <Badge badgeContent={17} color="error">
                <NotificationsIcon />
            </Badge>
        </IconButton>
        <IconButton color="inherit">
            <SettingsOutlinedIcon />
        </IconButton>
    </Box>
  )
}

export default AdditionIconSet