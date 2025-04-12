let functions={
     Home:async function(req,res){
        res.send("Home Page")
        res.end();
    },
     About:async function(req,res){
        res.send("About Page")
        res.end();
    },
    Faq:async function(req,res){
        res.send("Faq Page")
        res.end();
    },
    Privacy:async function(req,res){
        res.send("Privacy Page")
        res.end();
    },
    Feedback:async function(req,res){
        res.send("Feedback Page")
        res.end();
    },
    
}
module.exports=functions