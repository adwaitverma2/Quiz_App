const mongoose=require("mongoose")
const { stringify } = require("nodemon/lib/utils")
const validator=require("validator")
const RegSchema =new mongoose.Schema({
    RegName:{
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
        required:true,
        minlength:[8,'sagdaghda']
    },
    profiles:{
        type:String
    },
    resetPassswordToken:String,
    resetPassswordExpires:Date

})
const Reg=mongoose.model("Quiz",RegSchema)
module.exports=Reg
