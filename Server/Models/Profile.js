const mongoose=require("mongoose")
const profileSchema=new mongoose.Schema({
     profiles:{
         type:String
     }
})
const pro=mongoose.model("profile",profileSchema)
module.exports=pro