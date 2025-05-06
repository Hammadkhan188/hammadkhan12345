let user=require("../collection/User")
let bcrypt=require("bcrypt")

let main_function={
    home:async function(req,res){
        res.send("home Page")
        res.end();
    },
    register_user:async function(req,res){
        try {
            let {name,email,password,age}=req.body;
            let checkemail= await user.findOne({email:email})
            if (checkemail){
                return res.status(200).json({msg:"email already exist"})
            }
            else{
                 let encrypted_pswd=bcrypt.hashSync(password,15)
                let user_data=new user ({name,email,password:encrypted_pswd,age})
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
    delete_record:async function (req,res){
        try {
            let {id} =req.params
            let id_dhoundo =await user.findById(id)
            if (id_dhoundo) {
                await user.findByIdAndDelete(id_dhoundo)
                return res.status(200).json({msg:'record added succesfully'})
                
            } 
        }catch(e){
            res.status(501).json({msg:'record added succesfully'})
        }
    },
    update_record:async function(req,res){
       try {
        let {id} =req.params
        let {name,email,age}=req.body

        let id_dhoundo =await user.findById(id);
        if (id_dhoundo) {
            await user .findByIdAndUpdate(id,{name:name,email:email,age:age})
            res.status(200).json({msg:"Record Update Successfully"})
        } 
        
       } catch (error) {
        res.status(501).json({msg:error.message})
        
       }
    }
}
module.exports= main_function