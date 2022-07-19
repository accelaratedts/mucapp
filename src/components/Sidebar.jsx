
import { Box } from '@mui/system'

import Chatbar from './Chatbar'

const Sidebar = () => {
  return (
    <Box  flex={1} p={2} 
    sx={{display:{xs:"none",sm: "block"}}}
    >
     
      <Chatbar/>
      <Chatbar/>
      <Chatbar/>
      <Chatbar/>
      <Chatbar/>
  

    </Box>
  )
}

export default Sidebar



