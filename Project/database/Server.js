let express=require("express");
let r=require("./Routing/route");
let db=require("./connect");
let user=require("./collection/User")
let cors=require("cors")
require("dotenv").config()

let port =process.env.PORT || 3002
let application=express();
application.use(cors())
application.use(express.json())
application.use("/web/",r)

let add_user=async function(){
    try {
        user.create({
            name:"Hammad",
            email:"hammad@gmail.com",
            password:"1234",
            age:"20",
            country:"Pakistan"
        })
        console.log("user Record Added")
        
    } catch (error) {
        console.log(error)
        
    }
}
db().then(()=>{
    // add_user()

    application.listen(port,()=>{
        console.log(`server created at http://localhost:${port}/web/`)
    })
}).catch((e)=>{
    console.log(e)
})