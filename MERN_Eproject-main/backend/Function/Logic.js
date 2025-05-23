let user=require("../Collection/User")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
require("dotenv").config()

let main_function={
    home:async function(req,res){
        res.send("home Page")
        res.end();
    },
    register_user:async function(req,res){
        try {
            let {name,email,password,age,phone}=req.body;
            let checkemail= await user.findOne({email:email})
            if (checkemail){
                return res.status(200).json({msg:"email already exist"})
            }
            else{
                 let encrypted_pswd=bcrypt.hashSync(password,15)
                let user_data=new user ({name,email,password:encrypted_pswd,age,phone})
                let create=await user_data.save();
               return res.status(200).json({msg:"user Registeration successfully"})

            }
           
 } catch (error) {
            res.status(501).json({msg:error.message})
            
        }
    },
    get_user:async function(req,res){
        try {
            let getdata=await user.find().select("-password").sort({"created_at":-1})
            return res.status(201).json(getdata)
            
        } catch (error) {
            res.status(501).json({msg :error.message})
        }
     
    },
    
    login_work: async function(req,res){
        try {
            let {email,password}=req.body
            let find_user_email=await user.findOne({email})
            if(!find_user_email){
                return res.status(404).json({msg:"Email Not Found"})
            }
            let get_password=bcrypt.compareSync(password,find_user_email.password)
            if(!get_password){
                return res.status(404).json({msg:"Password Not Found"})
            }
            let user_record=jwt.sign({id:find_user_email._id},process.env.JWT_KEY,{expiresIn:"2d"})
            return res.status(201).json({
                msg:"login Successfully",
                user_record,
                user:{
                    n:find_user_email.name,
                    e:find_user_email.email
                }
            })
            
        } catch (error) {
            return res.status(501).json({msg:error.message})
            
        }
    }

}
module.exports= main_function