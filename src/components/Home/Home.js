import React, { useState} from 'react';
import Container from '@mui/material/Container';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
/* import { MuiChipsInput } from 'mui-chips-input'; */
import { getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Pagination from '../Pagination';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const { classes } = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

 

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/');
    }
  };
/* 
  useEffect(() => {
      dispatch(getPostsBySearch(search));
  },[search]);  */

 const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };  

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  const upload = () => {
    navigate("/uploading")
  }

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
             
              <TextField 
              onKeyDown={handleKeyPress} 
              name="search" 
              variant="outlined" 
              label="Search product" 
              fullWidth 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} />
              
           {/*    <MuiChipsInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAddChip={handleAddChip}
                onDeleteChip={handleDeleteChip}
                label="Search by tag"
                variant="outlined"
              />  */}

              <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
               </AppBar>
               <button onClick={upload} >Upload product image</button>
           
            {(
              !searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}


          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;