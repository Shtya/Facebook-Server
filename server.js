const express = require("express") 
const mongoose = require("mongoose")
const path = require("path")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv").config({path:".env"})
const morgan = require("morgan")
mongoose.connect(process.env.DB).then(res => console.log(res.connection.host)).catch(err=> console.log(err))


const Auth = require("./routes/Auth")
const Post = require("./routes/Post")
const User = require("./routes/User")
const Conversation = require("./routes/Conversation")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(compression())
app.use(morgan("dev"))
app.use(cors())
app.options("*", cors())
app.enable("trust proxy")


// Middle ware 
app.use("/api/v1/user" , User)
app.use("/api/v1/auth" , Auth)
app.use("/api/v1/post" , Post)
app.use("/api/v1/conversation" , Conversation)

app.use(express.static(path.join(__dirname, "uploads")))

app.all("*" , (req ,res) => res.status(404).json({Error:"This routes is not exists"}))
app.use((err , req , res ,next)=>{
    next(res.status(400).json({Error :{
        message : err.message,
        stack : err.stack
    }}))
})
app.listen(4000 , _=> console.log("connection on port 4000"))
