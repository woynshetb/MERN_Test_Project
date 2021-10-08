import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts= async (req,res)=>{
    try{
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
    }
    catch(error){
      res.status(404).json({message:error.message});
    }
    
}
export const createPost = async (req,res)=>{
// post refers creat in our case creating user = creating post 
   const post = req.body;

   const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);

    }
    catch(error){
      res.status(409).json({message: error.message});
    }
}

export const updatePost = async(req,res) =>{
  const { id:_id } = req.params;
  const post = req.body;
  // to check the id is vSalid id
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.satus(404).send('no post with that id');
  
  const updatedPost = await PostMessage.findByIdAndUpdate(_id,{ ... post, _id},{new:true});
  res.json(updatedPost);
}    

export const deletePost =async (req,res)=>{
  const{id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.satus(404).send('no post with that id');
  await PostMessage.findByIdAndRemove(id);
  console.log('DELETE');
  res.json({message:'Post deleted Successfuly'});
}
