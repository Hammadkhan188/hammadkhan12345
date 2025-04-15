let exp =require("express");
let route=require("./Routing/route")
require("dotenv").config();
let db=require("./db")
let myapp=exp();
let datas=require("./collection/User");
const User = require("./collection/User");

// let r =require("./Routing/route")

// require ("dotenv").config()

myapp.use("/hammad/",route);

let datajao=async function(){
    try {
        User.create({
            user_name:"Hammad",
            email:"Hammad@gmail.com",
            password:"123",
            age:20
        })
        console.log("data Added")
        
    } catch (error) {
        console.log(error)
        
    }
}

db().then(()=>{
    datajao();
    myapp.listen(process.env.PORT,()=>{
        console.log(`server started at http://localhost:${process.env.PORT}`)
    })
}).catch((e)=>{
    console.log(e)
})