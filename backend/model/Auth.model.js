import { Schema,model } from "mongoose";
const AuthSchema=new Schema({
fullname:{
    type:String,
    trim:true,
    required:true
},
email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address"
    ]
},

mobile: {
    type: String,
    required: true,
    trim: true,
    
    match: [
        /^[6-9]\d{9}$/,
        "Please enter a valid 10-digit Indian mobile number"
    ]
},
password:{
    type:String,
    required:true
}

},{
    timestamps:true
})
const User=model("auth",AuthSchema)
export default User