let exp =require("express");
let route=require("./Routing/route")
require("dotenv").config();
let myapp=exp();

// let r =require("./Routing/route")

// require ("dotenv").config()

myapp.use("/hammad/",route)
myapp.listen(process.env.PORT,()=>{
    console.log(`server started at http://localhost:${process.env.PORT}`)
})