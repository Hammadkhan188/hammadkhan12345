let exp = require("express")
let rouute=exp.Router()
let func = require("../Function/logic")

rouute.get("/",func.Home)

module.exports=rouute