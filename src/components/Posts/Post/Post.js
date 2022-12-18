import React, { useState } from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
/* import CardContent from "@mui/material/CardContent"; */
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

/* import moment from 'moment'; */


const Post = ({ post, setCurrentId }) => {
const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { classes } = useStyles();


 
 
const pay = (e) => {
  navigate('/payment');
  };  

   



/* const Edit = (e) => {
  e.stopPropagation();
  setCurrentId(post._id);
  navigate("/uploading")
} */

 const openPost = (e) => {
    navigate(`/posts/${post._id}`);
  }; 


return (
    <Card className={classes.card} raised elevation={6}>


      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
      /*   onClick={openPost} */
      >
        <CardMedia 
        className={classes.media} 
        image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
        title={post.title} 
        /> 
  
     {/*  <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div> */}
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div className={classes.overlay2} name="edit">
         {/*  <Button
            onClick={Edit}
            style={{ color: 'white' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button> */}
        </div>
        )}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
     {/*    <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 20).join(' ')}...</Typography>
        </CardContent> */}
      </ButtonBase>
     {/*  <iframe src="https://friendlychat-92524.web.app/"></iframe> */}
     <Typography>R{post.price}</Typography>
       <CardActions className={classes.cardActions}>
        
       
         <button id="checkout-button" onClick={pay} >Buy</button> 
       


  {
  
  (user?.result?._id === post?.creator) && (
    <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
      <DeleteIcon fontSize="small" /> &nbsp; Remove
    </Button>
  )
  }
  


 

      
      </CardActions>

    </Card>
  );
}

export default Post;