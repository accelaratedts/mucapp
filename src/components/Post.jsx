
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ShareIcon from '@mui/icons-material/Share';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import React from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Checkbox } from '@mui/material';

const Post = () => {
  return (
    <Card sx={{margin: 5 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">
        B
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Great Teacher"
      subheader="July 17 14, 2022"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://th.bing.com/th/id/R.3f0a4af701c322ae86d079eed5e21160?rik=W7Ivh%2fccTrnK4A&pid=ImgRaw&r=0"
      alt="Good Lessons"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      MuCapp Mobile App. The salesman to collect amount from his customers and can provide a receipt generated from app via blue tooth printer. Online and Offline mode. App works with both online and offline mode.
       User can save the transaction details in offline mode and data get synced
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />


      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>


     {/*  <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore> */}



    </CardActions>
   
  </Card>
  )
}

export default Post
