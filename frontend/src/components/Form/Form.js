import React, { useState , useEffect} from 'react';
import { TextField , Button , Typography, Paper } from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';

import useStyles from './styles.js';
import {createPost,updatePost} from '../../actions/posts.js'
//import { updatePost } from '../../../../backend/controllers/posts.js';
// i commented the above imort and add updatepost from action post

// we have to get current employee id 

const Form = ({currentId, setCurrentId}) =>{
    const [postData, setPostData] = useState({
        name:'',salary:'',gender:'',birth_date:''
    });
    const post = useSelector((state)=> currentId ? state.posts.find((p) =>p._id === currentId):null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        if(post) setPostData(post);
    },[post]);

    const handleSubmit =(e) =>{
        // not to get refresh in the browser 
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,postData));
            

        }
        else{
            dispatch(createPost(postData));
            
        }
        clear();  
    }
    const clear =() =>{
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }
    return(
       <Paper className ={classes.paper}>
           <form autoComplete ="off" noValidate className = {classes.form} onSubmit ={handleSubmit} >
            <Typography variant ="h6"> {currentId ? 'Edit' : 'Register'} Employee's Information </Typography>
            
            <TextField name = "name" variant = "outlined" label="Name" fullwidth value ={postData.name} onChange={(e)=>setPostData({ ...postData,name:e.target.value})}
            />
            <TextField name = "salary" variant = "outlined" label="Salary" fullwidth value ={postData.salary} onChange={(e)=>setPostData({ ...postData,salary:e.target.value})}
            />
            <TextField name = "gender" variant = "outlined" label="Gender" fullwidth value ={postData.gender} onChange={(e)=>setPostData({ ...postData,gender:e.target.value})}
            />
            <TextField name = "birth_date" variant = "outlined" label="Birth_Date" fullwidth value ={postData.birth_date} onChange={(e)=>setPostData({ ...postData,birth_date:e.target.value})}
            />
            <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullwidth>Register</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullwidth>Clear</Button>
           </form>
       </Paper>
    );
}

export default Form;
