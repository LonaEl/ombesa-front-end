import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { Link, useNavigate } from 'react-router-dom';
import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [checked, setChecked] = React.useState(false);
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '', price: '' });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '',  selectedFile: '' });
  };

  useEffect(() => { 
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.username }));
      clear();
      navigate('/');
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.username }));
      clear();
    }
};

 

  if (!user?.result?.username) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Sign in to upload
        </Typography>
      </Paper>
    );
  }

const element = <Typography variant='h8'>I agree to the <Box component={Link} to="/termsandconditions">terms and conditions</Box> </Typography>

 const handleChange = (event) => {
  setChecked(event.target.checked);
};

const formChange = (e) => {
setPostData(prevPostData => {
  return {
    ...prevPostData, [e.target.name]: e.target.value
  }
})
};

const disabled = !checked
 
  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post?.title}"` : 'Upload your product and set the price'}</Typography>
       
       
        <TextField 
        name="title" 
        variant="outlined" 
        label="Name of the product" 
        value={postData.title} 
        onChange={formChange}
         />
        
      {/*   <TextField 
        name="message" 
        variant="outlined" 
        label="Message" 
        fullWidth
        multiline 
        minRows={4} 
        value={postData.message} 
        onChange={formChange} 
        /> */}
      {/*   <div style={{ padding: '5px 0', width: '94%' }}>
        
         <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
           value={postData.tags}
           onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} 
              />
        </div> */}

        <TextField 
        name="price" 
        variant="outlined" 
        label="Price" 
        id="price"
        value={postData.price} 
        onChange={formChange}
         />
       <div className={classes.fileInput}>
          <FileBase type="file" 
          multiple={false} 
          onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
          </div>

           <FormControlLabel
            value="end"
            control={ <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          /> }
          label={element}
          labelPlacement="end"
        /> 
 <Typography variant='h8'> </Typography>
        <Button className={classes.buttonSubmit} variant="contained" disabled={disabled} color="primary" size="large" type="submit" >Upload</Button>
      </form>
  </Paper>


  );
};

export default Form;
//  <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>