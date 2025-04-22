let mongo= require("mongoose");

let user_collection=mongo.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true

    },
    password:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongo.model("user",user_collection)