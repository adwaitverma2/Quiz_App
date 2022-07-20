const mongoose=require("mongoose")
const userSchema =new mongoose.Schema({
    name:{
     type:String,
    require:true,

    },
    password:{
        type:String,
        required:true,
   
    },
    email:{
        type:String
    },
  

})
const userName=mongoose.model("user",userSchema)
module.exports=userName
