const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    members:{type : Array , ref:"user"},
},{timestamps:true})


module.exports = mongoose.model("conversation" , Schema)