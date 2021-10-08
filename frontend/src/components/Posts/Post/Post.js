import React from 'react';
import {Card,CardActions,CardContent,Button,Typography} from '@material-ui/core';
import useStyles from './styles.js';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// import EditIcon from '@material-ui/core/Edit';

import { useDispatch} from 'react-redux';

import {deletePost} from '../../../actions/posts.js';
const Post = ({post,setCurrentId}) =>{
    const classes = useStyles();
    const dispatch =useDispatch();
    return( 
  <Card className={classes.card}>
          
    <CardContent>
    
    <Typography className={classes.title} variant='h5' color="textSecondary" gutterButton>{post.name}</Typography>
    <Typography className={classes.title} variant='h5' color="textSecondary" gutterButton>{post.salary}</Typography>
    <Typography className={classes.title} variant='h5' color="textSecondary" gutterButton>{post.gender}</Typography>
    <Typography className={classes.title} variant='h5' color="textSecondary" gutterButton>{post.birth_date}</Typography>
    
    </CardContent>
    <CardActions className={classes.cardActions}>
    <div>
             <Button size="small" color="primary" 
               onClick={() => setCurrentId(post._id)}>
                 <EditIcon fontSize="small" />Edit
               </Button>
              </div> 
     
      <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
       
    <DeleteIcon fontSize="small" />
      Delete
       
      </Button>
    </CardActions>

        </Card>
    );
}

export default Post;
