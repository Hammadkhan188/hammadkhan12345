let mango=require("mongoose");
require("dotenv").config();

let url=process.env.ATLAS_URL;

let db_connect=async function(){
    mango.connect(url).then(()=>{
        console.log("connection has been successfully")
    }).catch((e)=>{
        console.log(e)
    })
}
module.exports=db_connect;