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
import  Modal from '@mui/material/Modal';
import useStyles from './styles';
import PaystackIntegration from '../../Payment/PaystackIntegration';

/* import moment from 'moment'; */


const Post = ({ post, setCurrentId }) => {
const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const [modal, setModal] = useState(false);
  
  
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
      >
        <CardMedia 
        className={classes.media} 
        image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
        title={post.title} 
        /> 
  {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div className={classes.overlay2} name="edit">
       </div>
        )}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
  </ButtonBase>
    <Typography>R{post.price}</Typography>
       <CardActions className={classes.cardActions}>


<button id="checkout-button" onClick={toggleModal} >Buy</button> 

 

{modal && (
   <Modal open={modal} onClose={toggleModal} className={classes.modal}>
        <div className={classes.paper}>
     {/*      <div onClick={toggleModal} className={classes.overlay3}></div> */}
         <h4>Please enter your details</h4>
            <PaystackIntegration post={post} />
            <Button className={classes.closeButton} onClick={toggleModal}>CLOSE</Button>
          </div>
        </Modal>
      )} 


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