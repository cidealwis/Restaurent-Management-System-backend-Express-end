const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const directURL = process.env.DATABASE_URL
const dataBaseName=process.env.DATABASE_NAME

const mongoDbURL=`${directURL}/${dataBaseName}`

mongoose.connect(mongoDbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.once("open",()=>{
    console.log("connected to mongoDB")
})
