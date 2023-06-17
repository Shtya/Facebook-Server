const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    user  : { type:mongoose.Schema.ObjectId , ref:"user" , required:true},
    desc  :String ,
    image : String ,
    likes : [mongoose.Schema.ObjectId] ,
    comments:[{
      user:{type :mongoose.Schema.Types.ObjectId  , ref:"user" }, 
      comment:String
    }],

},{timestamps:true})


Schema.pre(/^find/, function (next) {
    this.populate("user" , "email firstname lastname  profilePicture" )
    next()
  } )


    // const setImageUrl = (doc) => {
    //     if (doc.image) {
    //       const imageUrl = `${process.env.BASE_URL}/posts/${doc.image}`;
    //       doc.image = imageUrl;
    //     }
    //   };
      
    //   Schema.post('init', (doc) => {
    //     setImageUrl(doc);
    //   });
      
    //   Schema.post('save', (doc) => {
    //     setImageUrl(doc);
    //   });

module.exports = mongoose.model("post" , Schema)