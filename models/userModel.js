const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Name is necessary'],
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'A strong Password is required'],
    },
},{timestamps:true});

const userModel=mongoose.model('users',userSchema);
module.exports = userModel;
