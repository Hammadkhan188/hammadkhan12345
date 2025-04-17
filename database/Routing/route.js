let express=require("express");
let route=express.Router();
let func=require("../Function/logic")

route.get("/i",func.home)

module.exports=route