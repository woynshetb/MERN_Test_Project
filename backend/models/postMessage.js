import mongoose from 'mongoose';
// database model for employee
const postSchema = mongoose.Schema({
    name:String,
    salary:Number,
    gender:String,
    birth_date:String
      
});

const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;
