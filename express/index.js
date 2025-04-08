let exp =require("express");
let myapp=exp();

let r =require("./Routing/route")

require ("dotenv").config()

myapp.use("/",r)
myapp.listen(process.env.PORT,()=>{
    console.log(`server started at http://localhost:${process.env.PORT}`)
})