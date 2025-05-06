let express=require("express");
let route=express.Router();
let func=require("../Function/logic")

route.get("/i",func.home)
route.post("/reg",func.register_user)
route.get("/users",func.get_user)
route.delete("/users/:id",func.delete_record)
route.put("/users/:id",func.update_record)

module.exports=route