let mango=require("mongoose");

let user_model=mango.Schema({
    user_name:{
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
        default:"Pakistan"
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})

module.exports=mango.model("user_col",user_model)
    