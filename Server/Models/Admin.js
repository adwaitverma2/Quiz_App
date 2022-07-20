const mongoose=require("mongoose")
const validator=require("validator")
const AdminSchema=new mongoose.Schema({
    AdminName:{
        type:String,
        require:true,
        unique:true,
        validate(value){
            if(! validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
    },
    Password:{
        type:String,
        required:true
    }
})
const admin= mongoose.model("Admin",AdminSchema)
module.exports=admin