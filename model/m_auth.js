const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    email: { type: String, required: [true, 'Please set your email'], unique: [true, 'Email already in use']},
    password : {type : String , require:true },
    firstname : {type : String , require:true },
    lastname : {type : String , require:true },
    isAdmin : {type : Boolean , default:false },
    profilePicture : String ,
    coverPicture : String ,
    about : String ,
    livesIn : String ,
    worksAt : String ,
    relationship : String ,
    followers : [{type:mongoose.Schema.Types.ObjectId , ref:"user"}] ,
    following : [{type:mongoose.Schema.Types.ObjectId , ref:"user"}] ,

},{timestamps:true})

module.exports = mongoose.model("user" , Schema)