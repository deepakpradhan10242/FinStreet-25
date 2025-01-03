import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    rollNo:{
        type:String,
        required:true
    }

});

const User = mongoose.model("User",userSchema);
export default User;