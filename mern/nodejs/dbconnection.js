let mongo=require("mongoose")
require("dotenv").config()

let url = process.env.mongo

mongo.connect(url).then(()=>{
    console.log("connection has been established")
}).catch((e)=>{
    console.log(e)
})