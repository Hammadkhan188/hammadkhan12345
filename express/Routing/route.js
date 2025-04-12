let exp =require("express");
let co= require("../Function/logic")



let r =exp.Router();

r.get("/i",co.Home);
r.get("/f",co.Faq);
r.get("/p",co.Privacy);
r.get("/s",co.Feedback);
r.get("/a",co.About);

module.exports=r;