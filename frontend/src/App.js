import React, { useState, useEffect } from 'react';
import { Container, AppBar,Typography,Grow,Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts } from './actions/posts.js'
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js';

const App = () =>{
    const [currentId,setCurrentId]=useState(0);
    const classes = useStyles();
    const dispatch = useDispatch(); // redux hooks
    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch])
    return (
      <Container maxidth="lg">
          <AppBar className={classes.appBar} position = "static" color ="inherit">
              <Typography className={classes.heading} variant ="h2" align ="center">Employee Information</Typography>
              <Grow in>
                  <Container>
                      <Grid container justify="space-between" alignItems="strech" spacing={3}>
                          <Grid item xs = {12} sm = {7}>
                            <Posts setCurrentId={setCurrentId} />
                          </Grid>
                          <Grid item xs = {12} sm = {4}>
                              <Form currentId={currentId} setCurrentId={setCurrentId} />
                              </Grid>
                      </Grid>
                  </Container>
              </Grow>

          </AppBar>
      </Container>
    );
}

export default App;