import { Avatar,  ListItemAvatar,ListItem, ListItemText } from '@mui/material'
import React from 'react'

const Chatbar = () => {
  return (
    
    <ListItem>
    <ListItemAvatar>
      <Avatar
        alt="Remy Sharp"
        src="https://th.bing.com/th/id/R.943c7b66f1132dda368ad02a460617ae?rik=syuVSEh44HCk%2bw&pid=ImgRaw&r=0"
        sx={{ width: 60, height: 60 }}
      />
    </ListItemAvatar>
      <ListItemText primary="Mucapp"/>
      </ListItem>
  )
}

export default Chatbar
