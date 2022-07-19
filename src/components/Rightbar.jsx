import { Avatar, Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box  flex={2} p={2}
    sx={{display:{xs:"none", sm: "block"}}}
    >
     <Box position="fixed">
<Typography variant ="h6" fontWeight={100}>Active Members</Typography>
<Stack direction="row" spacing={2}>
  <Card>
      <Avatar
        alt="Remy Sharp"
        src="https://th.bing.com/th/id/R.943c7b66f1132dda368ad02a460617ae?rik=syuVSEh44HCk%2bw&pid=ImgRaw&r=0"
        sx={{ width: 60, height: 60 }}
      />
      
      </Card>
    </Stack>

<Typography variant='h6' fontWeight={100} margin-top='3px'> Gallery</Typography>

     </Box>
      </Box>
  )
  
}

export default Rightbar
