let express=require("express");
let r=require("./Routing/Route");
let db=require("./Connect");
let user=require("./Collection/User")
let cors=require("cors")
require("dotenv").config()

let port =process.env.PORT || 4000
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
            age:20,
            phone: '03132677651'
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