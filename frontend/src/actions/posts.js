import * as api from '../api'; 
// action creators are a functions that returns a creator
// b/c the action is asyncrounius i used the keyword async and await
// used redux to pass an action from our data(our backend)
export const getPosts = () => async (dispatch)=>{

     try{
         // fetch all data from the api and data represents the posts(Employee)
         const { data } = await api.fetchPosts();
         dispatch({type:'FETCH_ALL', payload: data});
     }
     catch(error){
      console.log('Error in Action post');
     }


  
    
}

export const createPost = (post) => async (dispatch) =>{
    try{
     const {data} = await api.createPost(post); 
     
     dispatch({type:'CREATE', payload:data})
    }
    catch(error){
   console.log('Error in action ')
    }

}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };
export const deletePost = (id) => async (dispatch) =>{
 try{
   await api.deletePost(id);
   dispatch({type:'DELETE',payload:id})
 }
 catch(error){
   console.log('Error in action post delete function')

 } 
}