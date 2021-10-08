// reducers are a function that accept state and action and return something changed by action
const reducer = (posts = [], action) =>{
    switch(action.type){
        case 'FETCH_ALL':
               return action.payload;
        case 'UPDATE':
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
        case 'CREATE':
            return [ ...posts, action.payload];
        default:
            return posts;
    }
}
export default reducer;